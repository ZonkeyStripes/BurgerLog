const mysql = require("mysql");
let connection;
if(process.env.JAWSDB_URL){
   connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "rootpass",
        database: "burger_db"
    });
}

connection.connect(function(error) {
    if (error) {
        console.error("Opps!! =>", error.stack);
        return;
    }
    console.log("Connected as :", connection.port);
});

module.exports = connection;