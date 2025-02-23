const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const FootballData = require('./models/FootballData');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

fs.createReadStream('./uploads/football_data.csv')
    .pipe(csv())
    .on('data', async (row) => {
        try {
            await FootballData.create(row);
        } catch (err) {
            console.error(err);
        }
    })
    .on('end', () => {
        console.log('✅ CSV Imported Successfully');
        mongoose.connection.close();
    });
