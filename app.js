// dependencies 
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

// create connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "19911991",
    database: "employees"
});

// open connection 
connection.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("Database is connected!");

    // close connection
    connection.end();
});

function runApp() {
    function initialPrompt() {
        inquirer.prompt([
            {
                type: "list",
                name: "userAnswer",
                message: "What would you like to do?",
                choices: [
                    "View All Employess",
                    "View All Employees by Department",
                    "View All Empoyee By Manager",
                    "Add Employee",
                    "Remove Employee",
                    "Update Employee Role",
                    "Updaye Employee Manager"
                ]
            }])
            .then(userAnswer => {
                console.log(userAnswer);  
            })
    }

    initialPrompt();
};

runApp();

