// Setup empty JS object to act as endpoint for all routes
const projectData = async ( url = '', data = {})=>{
    const response = await fetch(url)
    console.log(data)
    .then( response => {
        if(response.ok){
            return response;
        }throw Error (response.statusText)
    })
    //.then (response =>  response.json())
    // .then ((result) => {

    //     date.innerText = newDate;
    //     content.innerText = `${result.name}, US`
    //     const tempToFarh = `${result.main.temp * 9/5 - 459.67}`;
    //     temp.innerText = `${Number.parseInt(tempToFarh)} °F`;
    //     console.log(result)
    //     console.log(result.main.temp)
    // })
    .catch (error => console.log(`There was an error :`, error))
};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
const port = 3000;

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));

app.get('/all', sendData);

function sendData (request, response) {
//     const data = projectData()
//   response.send();
//     console.log(request.body);
//     console.log(projectData);

};

app.post("/all", getTemp);

// Setup Server
app.listen(port, () => {
  console.log(`Listening for request on port ${port}!`);
});

function getTemp(req, res) {
  const newEntry = {
    zipcode: req.zipCode,
    apikey: req.apiKey
  };
  console.log("================");
  console.log(req.body.zipCode);
  console.log(req.body.apiKey);
  projectData(newEntry);
//   console.log(projectData);
}

// app.get("/", (req, res) => res.send("Hello World!"));
