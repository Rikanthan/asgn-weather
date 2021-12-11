import logo from "./logo.svg";
import "./App.css";
import { Divider, Grid, Typography, Paper } from "@mui/material";
import WeatherCard from "./widgets/WeatherCard";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import cities from "./constants/Cities";
import SingleWeatherCard from "./widgets/WeatherCard2";

function App() {
  const [weather, setWeather] = useState([]);
  const [refresh, setRefresh] = useState(true)
  const fronturl = "http://api.openweathermap.org/data/2.5/group?id=";
  const backurl = "&units=metric&appid=067ad514cf62f9ba62b5ea5d5ffa57d1";
  let id = "";
  function setUrl() {
    for (let i = 0; i < cities.length; i++) {
      id = id + cities[i].CityCode + ",";
    }
    return id;
  }

  async function fetchData() {
    setUrl();
    const response = await axios.get(fronturl + id + backurl);
    const result = await response.data;
    console.log(fronturl + id + backurl);
    //console.log(result);
    setWeather(result); 
    console.log(weather);

  }
  useEffect(() => {
    fetchData();
    console.log(weather)
  }, []);

  return (
    <div className="App">
      <Typography variant="h5" color="white">
        Weather App
      </Typography>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        {/* {( weather.list.map((element,index)=> 
         {
          console.log(element.name);
          console.log(index);
           <WeatherCard 
            weatherDetails={weather[0]}
            />
         } ))
        } */}
        
        {(typeof weather.cnt != 'undefined') ? (
          <WeatherCard 
          weatherDetails ={weather.list[0]}/>
        ):
        null}
        {/* <div>
          try {
            <WeatherCard 
          weatherDetails={weather.list[0]}/>
          } catch (error) {
            <WeatherCard 
          weatherDetails={weather.list[0]}/>
          }
          </div> */}
          
      
        {/* { weather != undefined ? (
          
        ) : null} */}
        {/* {(typeof weather.list[1] != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather.list[1]}/>
        ):
        null}
        {(typeof weather.list[2] != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather.list[2]}/>
        ):
        null}
        {(typeof weather.list[3] != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather.list[3]}/>
        ):
        null}
         {(typeof weather.list[4] != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather.list[4]}/>
        ):
        null}
        {(typeof weather.list[5] != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather.list[5]}/>
        ):
        null}
         {(typeof weather.list[6] != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather.list[6]}/>
        ):
        null}
        {(typeof weather.list[7] != 'undefined') ? (
          <WeatherCard 
          weatherDetails={weather.list[7]}/>
        ):
        null} */}
      </Grid>
    </div>
  );
}

export default App;
