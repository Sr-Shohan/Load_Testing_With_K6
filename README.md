# Load_Testing_With_K6

Project structure should look like this:

load-testing/
│
├── src/                        # Source code folder
│   ├── tests/                  # Contains test scripts
│   │   └── crocodilesTest.js    # Load test for the crocodiles API
│   │
│   ├── scripts/                # Reusable scripts for requests, checks, etc.
│   │   ├── requests.js          # Contains HTTP requests
│   │   ├── checks.js            # Contains validation checks
│   │   └── utils.js             # Utility functions (optional)
│   │
│   └── config/
│       └── config.js            # Contains configuration (e.g., base URL, headers)
│
├── results/                     # (empty directory for storing test results)
├── package.json                 # Project metadata
└── README.md  