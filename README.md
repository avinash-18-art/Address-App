# User Address App

A simple Node.js and Express application that allows users to register and store multiple addresses using a one-to-many relationship between **User** and **Address** tables.

## Features

- Register users with multiple addresses.
- One-to-many relationship between users and their addresses.
- API endpoints to create and retrieve user data.
- SQLite3 is used for database management (can be easily switched to MySQL/PostgreSQL).

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: SQLite (or MySQL/PostgreSQL)
- **ORM**: Sequelize
- **Others**: Body-parser, Nodemon

## Project Structure

user-address-app/
│
├── config/
│   └── config.json
├── migrations/
├── models/
│   ├── address.js
│   └── user.js
├── node_modules/
├── app.js
└── package.json


## Prerequisites

Before you begin, ensure you have installed the following tools:

- **Node.js**: [Download here](https://nodejs.org/en/download/)
- **npm**: Node's package manager (comes with Node.js)
- **SQLite3** (optional): If you use a different database, install the respective driver.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-address-app.git
   cd user-address-app
## Install dependencies:


- npm install
- Set up the database (SQLite by default):


## npx sequelize-cli db:migrate
- This will create the User and Address tables in the SQLite database. If you are using MySQL/PostgreSQL, adjust the configuration in config/config.json.

(Optional) If you're using a different database (like MySQL/PostgreSQL), install the required driver:

## For MySQL:


- npm install mysql2
- For PostgreSQL:


- npm install pg
- Usage
- Start the server:


- npm start
- For development with auto-reload on changes:


- npm run dev
- Use Postman or Insomnia to interact with the API.

- API Endpoints
- Register a User and Address
- Method: POST

- URL: /register

- Body (JSON):

## json

{
  "name": "John Doe",
  "address": "123 Main Street"
}
## Response (Success):

json

{
  "message": "User and Address stored successfully."
}
Testing
You can use tools like Postman or Insomnia to test the /register endpoint. Send a POST request to:


http://localhost:3000/register
with the required JSON body (as shown in the API section).

License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Your Name - Avinash Chauhan
https://github.com/avinash-18-art


### Notes:
- Replace **`Your Name`** and **`Your GitHub Profile`** with your actual details.
- If you're using a different database, make sure to update the instructions in the "Installation" section accordingly.
- This README provides clear instructions on setting up, running, and testing the project, along with a brief description of the technologies used.





