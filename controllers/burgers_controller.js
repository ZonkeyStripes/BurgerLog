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

router.post("/", function(req, res) {
    burger.insert([req.body.name], function(result) {
        console.log("Burger added!", result);
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    burger.update([req.params.id], function(data) {
        res.json(data);
    });
});

module.exports = router;