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
import Dashboard from "./pages/Dashboard";
import { HashRouter as Router, Routes, RouterProps, Route } from "react-router-dom";
import ShowWeather from "./pages/ShowWeather";

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
    setWeather(result); 
  }
  useEffect(() => {
    fetchData();
    setTimeout(()=>{
      if('caches' in window){
        caches.keys().then((names) => {
                names.forEach(name => {
                    caches.delete(name);
                })
            });
          }
      window.location.reload(true);
    },3000000)
  }, []);
  return (
    <div className="App">
       <Grid
        container
        direction="row"
        padding={5}
        justifyContent="center"
        alignItems="start"
      >
        <img src="http://openweathermap.org/img/wn/10d@2x.png"></img>
      <Typography variant="h5" color="white" paddingTop={5}>
        Weather App
      </Typography>
      </Grid>
      <Dashboard weather={weather}/>
    </div>
  );
}

export default App;
