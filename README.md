📂 Folder Structure

````
webserver_application/
|
│── server.js                # Main server file (imports routes and DB connection)
│── models/
│   └── FootballData.js      # Mongoose schema & model
│── routes/
│   └── footballRoutes.js    # API routes for CRUD operations
│── config/
│   └── db.js                # MongoDB connection setup
│── uploads/
│   └── (CSV files stored here)
│── .env                     # Environment variables
````

📌 Step 1: Install Prerequisites
Make sure you have the following installed:
````
Node.js (Download from nodejs.org)
MongoDB (Install from mongodb.com)
Postman (for testing API, optional)
````

📌 Step 2: Clone or Set Up the Project

📌 Step 3: Initialize the Node.js Project
Install Dependencies
````
npm init -y
npm install express mongoose multer csv-parser cors dotenv body-parser
````
📌 Step 4: Install Required Dependencies
````
npm install express mongoose dotenv cors body-parser multer csv-parser
````

📌 Step 5: Setup MongoDB
````
mongodb+srv://yourusername:yourpassword@cluster0.mongodb.net/footballDB?retryWrites=true&w=majority
````

📌 Step 6: Run the Application
````
node server.js
````

📌 Step 7: Test API Endpoints

Use Postman or cURL to test:
````
# Add a new team
curl -X POST http://localhost:5000/api/football/add -H "Content-Type: application/json" -d '{
    "team": "Liverpool",
    "gamesPlayed": 38,
    "win": 25,
    "draw": 10,
    "loss": 3,
    "goalsFor": 75,
    "goalsAgainst": 30,
    "points": 85,
    "year": 2023
}'

# Update a team
curl -X POST http://localhost:5000/api/football/update/Liverpool -H "Content-Type: application/json" -d '{
    "win": 26
}'

# Delete a team
curl -X POST http://localhost:5000/api/football/delete/Liverpool

# Get stats for a year
curl -X GET http://localhost:5000/api/football/stats/2023

# Get top teams with wins > 20
curl -X GET http://localhost:5000/api/football/topTeams/20

# Get teams with high average goals in a year
curl -X GET http://localhost:5000/api/football/averageGoals/2023
````
