/* Global Variables */
/*
Request format
api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
"http://api.openweathermap.org/data/2.5/weather?zip=94040,us";
*/

const apiKey = "13fc8ddd7261c7a2d68efb3130e11adf";
const serverBaseUrl = "http://localhost:3000/";

const zipcode = document.querySelector("#zip");
const generateBtn = document.querySelector("#generate");
const feelingsTxtArea = document.querySelector("#feelings");
const entryHolderTxtArea = document.querySelector("#entryHolder");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const content = document.querySelector("#content");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
let webData = {};

generateBtn.addEventListener("click", requestTemp, false);

function requestTemp(event) {
  if (zipcode.value) {
    const zipCodeValue = zipcode.value;

    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCodeValue},us&appid=${apiKey}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .then(result => {
        webData = {
          temperature: `${(result.main.temp * 9) / 5 - 459.67}`,
          date: newDate,
          user_response: feelingsTxtArea.value
        };
      })
      .then(function(data) {
        postData(serverBaseUrl + "add", webData);
      })
      .then(function(allData) {
        updateUI(webData);
      })
      .catch(error => console.log(`There was an error :`, error));
  } else {
    retrieveData(serverBaseUrl + "all").then(function(allData) {
      updateUI(allData);
    });
  }
}

function updateUI(allData) {
  console.log(allData);
  date.innerText = allData.date;
  const tempToFarh = `${allData.temperature} °F`;
  content.innerText =
    allData.user_response !== undefined
      ? allData.user_response
      : "No valid Data is available";
  temp.innerText = `${Number.parseInt(tempToFarh)} °F`;
}

// Async POST
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  try {
    const newData = await response;
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// Async GET
const retrieveData = async (url = "") => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json();
    return allData;
  } catch (error) {
    console.log("error", error);
  }
};
