const request = require("request");

const forecast = (latitude, longitude,callback) => {
    const url =
  "http://api.weatherstack.com/current?access_key=7754577f2fb9be114805c221a1001eff&query=" + latitude+ ","+ longitude + "&units=f";
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ". Temprature outside is "+ body.current.temperature+" but it feels like "+ body.current.feelslike + ".");
    }
  });
}

module.exports = forecast