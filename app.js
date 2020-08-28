const request = require('request')
const geocode = require('./utils/geocode')



// /const url = 'http://api.weatherstack.com/current?access_key=d708b084721589e833355a187ddde094&query=37.8267,-122.4233&units=f'
// const url = 'http://api.weatherstack.com/current?access_key=d708b084721589e833355a187ddde094&query=&units=f'

// request({url: url, json: true},
//     (error, response) =>{
//         if(error) {
//            console.log(error.code + error.type) 
//         }
//         else if(response.body.error){
//             console.log('Error code: ' + response.body.error.code + ' Type: ' + response.body.error.type)
//         }
//         else{
//             const currentData = response.body.current
//             console.log(currentData.weather_descriptions[0] + '. It is currently ' + currentData.temperature + ' degrees out. It feels like ' + currentData.feelslike + ' degrees out')
//         }
// })




// const geocodeURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoid2ludGVyc2o2MyIsImEiOiJja2VkNDFkZDQwMDk5MnlzODhuazRueWR5In0.Irir8dqxihBm9fMtKQDM9Q&limit=1'
// // const geocodeURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/opafdupasdufoipasudfpoasdu.json?access_token=pk.eyJ1Ijoid2ludGVyc2o2MyIsImEiOiJja2VkNDFkZDQwMDk5MnlzODhuazRueWR5In0.Irir8dqxihBm9fMtKQDM9Q&limit=1'


// request({url: geocodeURL, json: true},
//     (error, response) => {
//         if(error){
//             console.log('This is an error')
//         }else if(response.body.features.length === 0){
//             console.log('NO RESULTS FOUND FOR SEARCH CRITERIA!!')

//         }else{
//             const lat = response.body.features[0].center[1]
//             const long = response.body.features[0].center[0]
//             console.log('latitude: ' + lat + ' longitude: ' + long)
//         }
//     }
//     )   

geocode('Boston', (error, data) => {
    console.log('Error: ' + error)
    console.log('latitude: ' + data.latitude + ' longitude: ' + data.longitude + ' location: ' + data.location)
})
