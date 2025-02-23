

backend_framework/ 
    
  backend/"
"│── server.js                # Main server file (imports routes and DB connection)"
"│── models/"
"│   └── FootballData.js      # Mongoose schema & model"
"│── routes/"
"│   └── footballRoutes.js    # API routes for CRUD operations"
"│── config/"
"│   └── db.js                # MongoDB connection setup"
"│── uploads/"
"│   └── (CSV files stored here)"
"│── .env                     # Environment variables"


Requirements
Add the required dependencies to requirements.txt:
Install dependencies:

    "pip install -r requirements.txt"

Run the Tests
Run the main test script:

    "python test_runner.py"


HTML Report Output
The HTML report will be saved in the reports/ folder with details like:

- API Name
- API Status (PASS/FAIL)
- API Code
- Data Response
