//You need routes here for api friends 
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================
const bodyParser = require("body-parser");
var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
// Basic route that sends the user first to the AJAX Page

// Displays all friends
module.exports = (app)=>{
  app.get("/api/friends", function(req, res){
 res.json(friendData);
});

// Create New Friends - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newfriend = req.body;

  // Using a RegEx Pattern to remove spaces from newfriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friendData.push(newfriend);

  res.json(newfriend);
});

}


// write for loop of scores and do a comparison
