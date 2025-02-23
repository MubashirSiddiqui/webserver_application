const mongoose = require('mongoose');

const FootballSchema = new mongoose.Schema({
    team: String,
    gamesPlayed: Number,
    win: Number,
    draw: Number,
    loss: Number,
    goalsFor: Number,
    goalsAgainst: Number,
    points: Number,
    year: Number
});

module.exports = mongoose.model('FootballData', FootballSchema);
