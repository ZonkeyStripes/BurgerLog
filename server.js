const express = require("express");

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = require("./controllers/burgers_controller.js")

app.use(router);

app.listen(PORT, () => {
    console.log("Listening at localhost: ", PORT)
});

