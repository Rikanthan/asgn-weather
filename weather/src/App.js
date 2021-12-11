import logo from "./logo.svg";
import "./App.css";
import { Divider, Grid, Typography,Paper } from "@mui/material";
import WeatherCard from "./widgets/WeatherCard";
import { styled } from '@mui/material/styles';
import axios from "axios";
import { useState, useEffect } from "react";
import { FaLocationArrow} from "react-icons/fa";
import cities from "./constants/Cities";

function App() {
  const [weather,setWeather] = useState([]);
  const fronturl = "http://api.openweathermap.org/data/2.5/group?id=";
  const backurl = "&units=metric&appid=067ad514cf62f9ba62b5ea5d5ffa57d1";
  let id ="";
  function setUrl()
  {
    for(let i=0; i<cities.length; i++)
    {
      id = id + cities[i].CityCode+",";
    }
    return id;
  }

 async function fetchData()
 {
  setUrl();
   const response = await axios.get(fronturl+id+backurl);
   const result = await response.data;
   
   console.log(fronturl+id+backurl)
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
        {(typeof weather.list[0].main != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather.list[0]}/>
        ):
        null}
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
