let express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    console.log("TEST")
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject); 
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert([req.body.name], function(result) {
        res.json(result);
    });
});

module.exports = router;