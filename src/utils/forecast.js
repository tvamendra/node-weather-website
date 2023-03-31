const request = require('request')


const url= 'http://api.weatherstack.com/current?access_key=f545af2dfdd8a9b76713728c90d4dca5&query=India&units=f'


const forecast= (place, callback) => {

    const url= 'http://api.weatherstack.com/current?access_key=f545af2dfdd8a9b76713728c90d4dca5&query='+place+'&units=f'


    request({url:url, json:true}, (error,response)=> {
        if(error){
            callback('Unable to connect to weater service', undefined)
        }
        else if(response.body.error) {
            callback('Unable to find location', undefined)
        }
        else{
            // console.log("It is currently "+response.body.current.temperature+" But feels like "+response.body.current.feelslike)
            console.log(response);
            callback(undefined,"It is currently "+response.body.current.temperature+" But feels like "+response.body.current.feelslike)
        }
    })
}

module.exports = forecast
