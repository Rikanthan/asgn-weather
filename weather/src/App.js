import "./App.css";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import cities from "./constants/Cities";
import Dashboard from "./pages/Dashboard";


function App() {
  const [weather, setWeather] = useState([]);
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
    setTimeout(() => {
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach(name => {
            caches.delete(name);
          })
        });
      }
      window.location.reload(true);
      //refresh after every five minutes
    }, 3000000)
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
      <Dashboard weather={weather} />
    </div>
  );
}

export default App;
