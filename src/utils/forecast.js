const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ee206011159622f1beb5a40216feb7aa&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.observation_time +
          ". Mostly " +
          body.current.weather_descriptions +
          " throughout the day. It is currently " +
          body.current.temperature +
          " degress out. Humidity is " +
          body.current.humidity +
          "%"

        // body.current.observation_time +
        //   ". It is currently " +
        //   body.current.temperature +
        //   " degress out. " +
        //   body.current.weather_descriptions +
        //   ". Humidity is  " +
        //   body.current.humidity +
        //   "%"
      );
    }
  });
};

module.exports = forecast;
