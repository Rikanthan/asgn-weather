import logo from "./logo.svg";
import "./App.css";
import { Divider, Grid, Typography,Paper } from "@mui/material";
import WeatherCard from "./widgets/WeatherCard";
import { styled } from '@mui/material/styles';
import axios from "axios";
import { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [weather,setWeather] = useState({
    // city:"",
    // country:"",
    // temperature:"",
    // tempmax:"",
    // tempmin:"",
    // description:"",
    // time:"",
    // pressure:"",
    // huminity:"",
    // visibility:"",
    // degree:"",
    // speed:"",
    // sunrise:"",
    // sunset:""
  });

useEffect(() => {
  axios.get("https://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&appid=067ad514cf62f9ba62b5ea5d5ffa57d1")
  .then((response)=> {
  console.log(response.data)
  setWeather(response.data)
  })
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
         <WeatherCard 
          city={weather.name}
          country={weather.sys.country}
          temperature={weather.main.temp}
          tempmax={weather.main.temp_max}
          tempmin={weather.main.temp_min}
          description={weather.weather[0].description}
          time={"feb 3"}
          pressure={weather.main.pressure}
          huminity={weather.main.humidity}
          visibility={weather.visibility}
          degree={weather.wind.deg}
          speed={weather.wind.speed}
          sunrise={weather.sys.sunrise}
          sunset={weather.sys.sunset}
          />
        <WeatherCard 
          city="Tokyo,JP"
          color="#6249cc"
          time="9.19 am,feb 8"
          temperature="34"
          tempmax="35"
          tempmin="28"
          />
      </Grid>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        <WeatherCard 
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
          />
      </Grid>
    </div>
  );
}

export default App;
