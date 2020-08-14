const request=require("request")
const chalk=require("chalk")
const forecast=(add1,add2,callback)=>{
const url="http://api.weatherstack.com/current?access_key=c38cccc5be8ecd91f575f926ce369334&query="+add1+','+add2+"&units=F"
request({url:url ,json:true },(error,response)=>{
    if(error)
    {
    callback("NETWORK ISSUE!",undefined)
    }
    else if(response.body.error)
    { 
    
        callback("Location not found",undefined)
    }
        else
    {
        callback(undefined,chalk.green.bold(chalk.red.bold(response.body.current.weather_descriptions[0])+" The actual temp is "+chalk.cyanBright.bold(response.body.current.temperature)+" degrees F and it feels like "+chalk.bold.cyanBright(response.body.current.feelslike)+" degrees F."))
    }
    
})
}
module.exports=forecast
