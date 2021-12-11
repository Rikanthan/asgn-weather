import SingleWeatherCard from "../widgets/WeatherCard2";

export default function ShowWeather({weather})
{
 return(
     <div>
    {(typeof weather.cnt != 'undefined') ? (
        <SingleWeatherCard 
        weatherDetails = {weather.list[0]}/>
      ):
      null}
      </div>
 );  
}