
const mysql = require("mysql2");
const connectionAuth = require("../auth.json");

const connection = mysql.createConnection({
    host: `${connectionAuth.connection.host}`, // Computer
    user: `${connectionAuth.connection.user}`, // Username
    password: `${connectionAuth.connection.password}`, // Password
    database: `${connectionAuth.connection.database}` // Database name
});


connection.connect(err => {
    if (err) {
        console.log("Failed to create connection + " + err);
        return;
    }
    console.log("We're connected to MySQL");
});



function execute(sql) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                // console.log("Error " + err);
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

function executeWithParameters(sql, parameters) {
    return new Promise((resolve, reject) => {
        connection.query(sql, parameters, (err, result) => {
            if (err) {
                console.log("Failed interacting with DB, calling reject");
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    execute,
    executeWithParameters
};