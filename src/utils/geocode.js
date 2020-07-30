const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoiam9obmRhbmllbHMiLCJhIjoiY2tkMzRieWR5MHNrZDJzbndhNmRybGUwYiJ9.PiocRQkl7Yv-2uavvGje_g`
    request({ url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!')
        } else if(response.body.features.length === 0 ) {
            callback('Unable to find location. Try another search.', undefined)
        } 
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}


// http://api.weatherstack.com/current?access_key=d47fd0eb2a668b184f1c7d2f02f4de50&query=lagos

module.exports = geocode