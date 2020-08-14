const request =require("request")
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
module.exports=geocode
