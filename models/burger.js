let orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        })
    },
    insert: function(name, cb) {
        orm.insert(name, function(res) {
            cb(res);
        });
    },
    update: function(ID, cb) {
        orm.update(ID, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;