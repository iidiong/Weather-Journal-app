// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express();
const port = 3000;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


app.get("/all", sendData) ;

function sendData (request, response ){
    response.send(projectData)
};


app.post("/add", addTemp);

function callBack(req, res){
    res.send("POST recieved")
};


function addTemp(req, res) {
  
   projectData.temperature = req.body.temperature;
   projectData.date = req.body.date;
   projectData.user_response = req.body.user_response;

  res.send("POST recieved");
}


// Setup Server
app.listen(port, () => {
  console.log(`Listening for request on port ${port}!`);
});

  