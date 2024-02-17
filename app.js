"use strict";

const URL = "https://api.tomorrow.io/v4/weather/forecast";
const API_KEY = "ZQng47zktSHEinGGm3GdqgBlZyJi3CLC";
const city = "Memphis";

class Weather {
  constructor(weatherData) {
    this.temp = weatherData.values.temperatureAvg;
    // this.humidity = weatherData.timelines.minutely.values.humidity;
    // this.windSpeed = weatherData.timelines.minutely.values.windSpeed;
  }
}

async function getWeatherData() {
  try {
    const response = await fetch(
      `${URL}?apikey=${API_KEY}&location=${city}`
    );
    const weatherData = await response.json();
    console.log(weatherData);
    const weatherDays = weatherData.timelines.daily.map ((day) => {
      return new Weather(day);
        
    });
    // loop over weatherDays array call the display weather function
    weatherDays.forEach(displayWeather);
    // console.log(weatherDays);
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(day) {
// display each day as HTML
}

getWeatherData();

