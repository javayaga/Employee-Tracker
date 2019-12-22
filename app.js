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
    runApp();
});

function runApp() {
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
            .then(answer => {
                console.log(answer.userAnswer);  
                if (answer.userAnswer === "View All Employess") {
                    runAllEmployees();
                }
            })
};

function runAllEmployees() {
    connection.query("SELECT * FROM employees_db.employees", function(err, results) {
        if (err) throw err;
        
        console.table(results);
    });
};

