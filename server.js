const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const footballRoutes = require('./routes/footballRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/football', footballRoutes);

app.get("/api/football/teams", async (req, res) => {
    try {
        const teams = await FootballModel.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

