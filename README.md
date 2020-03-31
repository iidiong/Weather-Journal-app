# Weather-Journal App Project
Weather-Journal app project takes zipcode from user, send a request to OpenWeatherMap.com and display temperature of the selected location on UI

## Table of Contents
- [Overview](#overview)

- [Instructions](#instructions)

- [How it works](#howItworks)

- [Project Structure](#projectStructure)

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.


## Project_Structure
1. Express app instance is pointed to the project folder with .html, .css, and .js files.
2. An API key for OpenWeatherMap.com is created
3. A JavaScript Object named projectData initiated in the file server.js act as the app API endpoint.
4. Local server should be running and producing feedback to the Command Line through a working callback function.

## How_it_works
1. User enters any us zipcode in "Enter Zipcode here" input field
2. User enters feelings in "How are you feeling today?" input field 
3. User click "Generate" button
4. Then, a request is sent to OpenWeatherMap.com for current location temperature
5. The received data is sent as post request to server.js
6. The UI is updated with the temperature data, current date, and feeling data entered by user
7. When a user clicks "Generate" button without entering zipcode and feelings information, the last saved data from server.js is retrieved and update the UI
8. If user enters invalid zipcode, most resent valid data is displayed
