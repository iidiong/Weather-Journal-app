/* Global Variables */
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
const baseURL1 = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us";
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";

const apiKey = "13fc8ddd7261c7a2d68efb3130e11adf";

const zipcode = document.querySelector("#zip");
const generateBtn = document.querySelector("#generate");
const feelingsTxtArea = document.querySelector("#feelings");
const entryHolderTxtArea = document.querySelector("#entryHolder");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const content = document.querySelector("#content");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();



generateBtn.addEventListener("click", tempReq, false);

function tempReq(event){
    const zipCodeValue = zipcode.value;
    const countryCode = "us";
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCodeValue},${countryCode}&appid=${apiKey}`;

    fetch(url)
    .then( response => {
        if(response.ok){
            return response;
        }throw Error (response.statusText)
    })
    .then (response =>  response.json())
    .then ((result) => {

        date.innerText = newDate;
        content.innerText = `${result.name}, US`
        const tempToFarh = `${result.main.temp * 9/5 - 459.67}`;
        temp.innerText = `${Number.parseInt(tempToFarh)} °F`;
        console.log(result)
        console.log(result.main.temp)
    })
    .catch (error => console.log(`There was an error :`, error))
    
}




// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

