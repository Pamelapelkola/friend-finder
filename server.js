var express = require("express")
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, ()=>{
    console.log("App listening on PORT " + PORT);
  });