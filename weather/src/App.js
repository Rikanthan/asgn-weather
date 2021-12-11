import logo from "./logo.svg";
import "./App.css";
import { Divider, Grid, Typography,Paper } from "@mui/material";
import WeatherCard from "./widgets/WeatherCard";
import { styled } from '@mui/material/styles';
import axios from "axios";
import { useState, useEffect } from "react";
import { FaLocationArrow} from "react-icons/fa";

function App() {
  const [weather,setWeather] = useState([]);

 async function fetchData()
 {
   const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&appid=067ad514cf62f9ba62b5ea5d5ffa57d1");
   const result = await response.data;
   console.log(result);
   setWeather(result);
 }
useEffect(() => {
  fetchData();
}, [])

  return (
    <div className="App">
      <Typography>Weather app</Typography>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        {(typeof weather.main != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather}/>
        ):
        null}
         
          {/* // city={weather.name}
          // country={weather.sys.country}
          // temperature={weather.main.temp}
          // tempmax={weather.main.temp_max}
          // tempmin={weather.main.temp_min}
          // description={weather.weather[0].description}
          // time={"feb 3"}
          // pressure={weather.main.pressure}
          // huminity={weather.main.humidity}
          // visibility={weather.visibility}
          // degree={weather.wind.deg}
          // speed={weather.wind.speed}
          // sunrise={weather.sys.sunrise}
          // sunset={weather.sys.sunset}
          > */}
        {/* <WeatherCard 
          city="Tokyo,JP"
          color="#6249cc"
          time="9.19 am,feb 8"
          temperature="34"
          tempmax="35"
          tempmin="28"
          /> */}
      </Grid>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        {/* <WeatherCard 
          city="Colombo, LK"
          color="#40b681"
          time="9.19 am,feb 8"
          temperature="34"
          tempmax="35"
          tempmin="28"
          />
        <WeatherCard 
          city="Tokyo,JP"
          color="#de944e"
          time="9.19 am,feb 8"
          temperature="34"
          tempmax="35"
          tempmin="28"
          /> */}
      </Grid>
    </div>
  );
}

export default App;
