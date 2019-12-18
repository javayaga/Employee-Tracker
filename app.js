// dependencies 
const inquirer = require("inquirer");
const mysql = require("mysql");

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
