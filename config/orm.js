const connection = require("../config/connection.js");

let orm = {
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            if (err){
                throw err
            };
            cb(result);
        });
    },

    insert: function(name, cb) {
        let queryString = "INSERT INTO burgers (burger_name)VALUES ";

        queryString += `('${name}');`;

        connection.query(queryString, name, function(error, result) {
            if(error) {
                throw error;
            }
            cb(result);
        });
    },

    update: function(ID, cb) {
        let queryString = `UPDATE burgers SET devoured = 1 WHERE ID = ?`;
        connection.query(queryString, [ID], function(error, result) {
            if(error) {
                throw error;
            }
            cb(result);
        });
    },
}

module.exports = orm;