"use strict";

const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const API_KEY = "QHPYDX7CB3SRA9ME2AB7S5FHZ";

class Weather {
  constructor(weatherData) {
    this.city = weatherData.city;
    this.temp = weatherData.temp;
    this.humidity = weatherData.humidity;
    this.desc = weatherData.description;
    this.icon = weatherData.icon;
  }
}

async function getWeatherData() {
  const weatherData = document.getElementById("city");
  const city = weatherData.value;
  if (!city) return alert("Please enter a valid City!");
  try {
    const response = await fetch(`${BASE_URL}/${city}/?key=${API_KEY}`);
    const weatherData = await response.json();
    console.log(weatherData);
    const weatherDays = weatherData.days.map((day) => {
      return new Weather(day);
    });
    // loop over weatherDays array call the display weather function
    // for each day
    weatherDays.forEach((day) => {
      displayWeather(day, weatherData.address);
    });
    // console.log(weatherDays);
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(weather, city) {
  document.querySelector(".cityDisplay").textContent = city;
  document.querySelector(".tempDisplay").textContent = weather.temp + "°F";
  document.querySelector(".humdidtyDisplay").textContent =
    weather.humidity + "%";
  document.querySelector(".descDisplay").textContent = weather.desc;
}

getWeatherData();

// Event Listener to add a city when user submits form
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const city = document.querySelector("#city").value;
  getWeatherData(city);
});
