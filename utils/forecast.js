const request = require('request')


const forecast =  (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d708b084721589e833355a187ddde094&query=' + latitude + ', ' + longitude + '&units=f'

    request({url: url, json: true}, (error, response) => {
        // Add response and error code
        if(error){
            callback(error.code + error.type, undefined)
        }else if(response.body.error){
            callback('Error code: ' + response.body.error.code +  ', ' + response.body.error.info, undefined)
        }else {
            callback(undefined, 
                response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + '. It feels like ' + response.body.current.feelslike + ' degrees out.', 
            )
        }
    })

}


module.exports = forecast