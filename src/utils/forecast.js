const request = require("request")

const forecast = (latitude, longtitude, callback) => {
    const url = `http://api.weatherstack.com/forecast?access_key=d47fd0eb2a668b184f1c7d2f02f4de50&query=${latitude},${longtitude}` 

    request({ url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to the weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `it is currently ${response.body.current.weather_descriptions}, at ${response.body.current.temperature} degrees celsius`)
        }
    })
}

module.exports = forecast