import weatherObject from "./dataModels/weatherObject";


async function getWeather(location) {
    try {
        const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=b6af69247cfa437ca9364342241104&q='+location)
        const weather = await response.json();
        const weatherForUse = weather.forecast.forecastday[0];
        let weatherData = new weatherObject(weatherForUse)
        console.log(weatherData)
        return weatherData;
    } catch (error){
        console.log(error)
    }
}

export {getWeather};


