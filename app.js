const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=d708b084721589e833355a187ddde094&query=37.8267,-122.4233&units=f'

// request({url: url, json: true},
//     (error, response) =>{
//         const currentData = response.body.current
//         // console.log(response.body.current)
//         console.log(currentData.weather_descriptions[0] + '. It is currently ' + currentData.temperature + ' degrees out. It feels like ' + currentData.feelslike + ' degrees out')
// })

const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2ludGVyc2o2MyIsImEiOiJja2VkNDFkZDQwMDk5MnlzODhuazRueWR5In0.Irir8dqxihBm9fMtKQDM9Q&limit=1'

request({url: url, json: true},
    (error, response) => {
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]

        console.log('latitude: ' + lat + ' longitude: ' + long)  
    }
    )   
