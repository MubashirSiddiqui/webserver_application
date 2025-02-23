

backend_framework/ 
    
    "api_testing_framework/"
    "│                                                     "
    "├── get_calls.py            # File for all GET calls  "
    "├── post_calls.py           # File for all POST calls "
    "├── headers.py              # File to manage and store headers "
    "├── test_runner.py          # Main script to execute the tests "
    "├── utils.py                # Utility functions (e.g., report generation) "
    "├── requirements.txt        # Required Python packages                    "
    "└── reports/ "
    " └── api_test_report.html # HTML reports folder "


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
