const express = require('express');
const FootballData = require('../models/FootballData');
const router = express.Router();

// @desc Add new team
router.post('/add', async (req, res) => {
    try {
        const newTeam = new FootballData(req.body);
        await newTeam.save();
        res.status(201).json({ message: '✅ Team Added Successfully', newTeam });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @desc Update team by name
router.post('/update/:team', async (req, res) => {
    try {
        const updatedTeam = await FootballData.findOneAndUpdate(
            { team: req.params.team },
            req.body,
            { new: true }
        );
        res.json({ message: '✅ Team Updated Successfully', updatedTeam });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @desc Delete team by name
router.post('/delete/:team', async (req, res) => {
    try {
        await FootballData.findOneAndDelete({ team: req.params.team });
        res.json({ message: '✅ Team Deleted Successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc Get total games played, draw, won for a given year
router.get('/stats/:year', async (req, res) => {
    try {
        const stats = await FootballData.aggregate([
            { $match: { year: parseInt(req.params.year) } },
            {
                $group: {
                    _id: "$year",
                    totalGames: { $sum: "$gamesPlayed" },
                    totalWins: { $sum: "$win" },
                    totalDraws: { $sum: "$draw" }
                }
            }
        ]);
        res.json(stats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc Get first 10 teams with wins greater than user input
router.get('/topTeams/:wins', async (req, res) => {
    try {
        const teams = await FootballData.find({ win: { $gt: parseInt(req.params.wins) } })
            .limit(10);
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc Get teams where avg "Goals For" is greater for a given year
router.get('/averageGoals/:year', async (req, res) => {
    try {
        const avgGoals = await FootballData.aggregate([
            { $match: { year: parseInt(req.params.year) } },
            {
                $group: {
                    _id: "$team",
                    averageGoalsFor: { $avg: "$goalsFor" }
                }
            },
            { $match: { averageGoalsFor: { $gt: 2 } } } // Adjust condition as needed
        ]);
        res.json(avgGoals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
