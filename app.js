const request = require("request")
const chalk = require("chalk")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const demo = process.argv[2];
//console.log(demo)
if(!demo)
return console.log(chalk.red.bold.inverse("Please provide address"))
else
{
geocode(demo,(error,data)=>{
  if(error)
  {
    return console.log(error)
  }
  forecast(data.Latitude,data.Longitude, (error, foredata) => {
    if(error)
    {
      return console.log(error)
    }
    console.log(chalk.yellowBright.bold(data.Place))
    console.log(foredata)
  })
})

}
