const request = require("request")
const chalk = require("chalk")
const url ="http://api.weatherstack.com/current?access_key=c38cccc5be8ecd91f575f926ce369334&query=17.700,83.300&units=F"
request({url:url , json:true},(error, response)=>{
   // console.log(response.body.current)
   if(error)
   {
       console.log(chalk.inverse.bold("NETWORK ISSUE"))
   }
   else if(response.body.error)
   {
       console.log(chalk.inverse.bold("UNABLE TO FIND THE LOCATION"))
   }
   else
    console.log(chalk.green.bold(chalk.red.bold(response.body.current.weather_descriptions[0])+" The actual temp is "+chalk.cyanBright.bold(response.body.current.temperature)+" degrees F and it feels like "+chalk.bold.cyanBright(response.body.current.feelslike)+" degrees F."))
})

//geocoding ...using callback


const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoicm9oaXRobWFyZ2FuaSIsImEiOiJja2RrN2t2czAwbTIzMnhxM3htZXptdzluIn0.wEa3MZ0xZox2tmM0hXp3Yg&limit=1"
    request({url:url ,json:true},(error,response)=>{
        if(error)
        {
            callback(chalk.red.bold("NETWORK ISSUE!",undefined))
        }
        else if(response.body.features.length===0)
        {
            callback("Location not found ",undefined)
        }
        else{
            callback(undefined,{
                Longitude: response.body.features[0].center[0],
                Latitude: response.body.features[0].center[1],
                Place: response.body.features[0].place_name
        })
        }
    })
}
geocode("vizag",(error,data))
{
   console.log("Error",error)
   console.log("Data",data)
}
