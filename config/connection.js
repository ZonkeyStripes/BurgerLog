const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootpass",
    database: "burger_db"
});

connection.connect(function(error) {
    if (error) {
        console.error("Opps!! =>", error.stack);
        return;
    }
    console.log("Connected as :", connection.threadID);
});

module.exports = connection;