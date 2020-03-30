/* Global Variables */
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
const baseURL1 = "http://api.openweathermap.org/data/2.5/weather?zip=94040,us";
const baseURL3 = "http://api.openweathermap.org/data/2.5/weather?zip=";

const apiKey = "13fc8ddd7261c7a2d68efb3130e11adf";
const baseUrl = "http://localhost:3000/";

const zipcode = document.querySelector("#zip");
const generateBtn = document.querySelector("#generate");
const feelingsTxtArea = document.querySelector("#feelings");
const entryHolderTxtArea = document.querySelector("#entryHolder");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const content = document.querySelector("#content");

let tempToFarh = 0;


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

generateBtn.addEventListener("click", requestTemp, false);

function requestTemp(event) {

  if( zipcode.value){
      const zipCodeValue = zipcode.value;
      const countryCode = "us";

      const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCodeValue},${countryCode}&appid=${apiKey}`;

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
        //   console.log(webData);
        })
        .then(function(data) {
          postData("http://localhost:3000/add", webData);
        //   postGet();
        })
        .then( function(allData){
            updateUI(webData)
        })
        .catch(error => console.log(`There was an error :`, error))
    }else{
      retrieveData("http://localhost:3000/all")
        .then( function(allData){
            updateUI(allData)
        }
        )}
}
function updateUI(allData) {
  console.log(allData);
  date.innerText = allData.date;
  tempToFarh = `${allData.temperature} °F`;
  content.innerText = allData.user_response;
  // tempToFarh = `${(result.main.temp * 9) / 5 - 459.67}`;
  temp.innerText = `${Number.parseInt(tempToFarh)} °F`;
}

//   const webData = {
//     temperature: tempToFarh,
//     date: newDate,
//     user_response: feelingsTxtArea.value
//   };

//   const request = new Request("http://localhost:3000/", {
//     method: "POST",
//     header: "headers",
//     credentials: "same-origin",
//     body: {
//       temperature: tempToFarh,
//       date: newDate,
//       user_response: feelingsTxtArea.value
//     }
//     // body: JSON.stringify(webData)
//     });
//   console.log(request.body.temp)
//   fetch(request)
//     .then(function(response) {
//         // console.log(response.body);
//         return response.text() })
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(error => console.log(`There was an error:`, error));
// }

// Async POST
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data) 
  });

  try {
    const newData = await response.json();
    updateUI(allData);
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

// function postGet() {
//   postData("http://localhost:3000/add", webData)
//     .then(function() {
//       retrieveData("http://localhost:3000/all");
//     })
// }
    // .then(result => {
    //   console.log(result.temperature);
    //   date.innerText = newDate;
    //   content.innerText = `${result.name}, US`;
    //   tempToFarh = `${(result.main.temp * 9) / 5 - 459.67}`;
    //   temp.innerText = `${Number.parseInt(tempToFarh)} °F`;
    //   content.innerText = console.log(result);
    //   console.log(result.main.temp);
    //   console.log(feelingsTxtArea.value);
    // })
    // .catch(error => console.log(`There was an error :`, error));
