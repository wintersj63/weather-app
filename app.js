const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Boston', (error, data) => {
    console.log('Error: ' + error)
    console.log('latitude: ' + data.latitude + ' longitude: ' + data.longitude + ' location: ' + data.location)
})


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(42.360081, -71.058884, (error, data) => {
    console.log(error)
    console.log(data.description + '. It is currently ' + data.temperature + '. It feels like ' + data.realfeel + ' degrees out.')
  })
