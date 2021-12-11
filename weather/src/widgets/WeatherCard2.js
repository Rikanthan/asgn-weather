import { Divider, Grid, Typography } from "@mui/material";
import Image from "../cld.png";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaBackward } from "react-icons/fa";

function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i) {
  var c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return "#" + "00000".substring(0, 6 - c.length) + c;
}

const SingleWeatherCard = ({ weatherDetails }) => (
  <Grid
    container
    md={6}
    style={{
      border: 1,
      borderRadius: 5,
      backgroundColor: intToRGB(hashCode(weatherDetails.name+weatherDetails.sys.country)),
      margin: 10,
    }}
    direction="column"
    justifyContent="space-between"
    alignItems="center"
  >
     <Typography variant="h6">
          {weatherDetails.name},{weatherDetails.sys.country}
        </Typography>
        <Typography variant="body2">
        {new Date(weatherDetails.dt * 1000).toLocaleTimeString(
            "en-IN",
            { hour: "2-digit", minute: "2-digit" },
          )}
          {", "}
        {new Date(weatherDetails.sys.sunset * 1000).toLocaleDateString(
          'en-US',{day:"numeric" ,month:"short"}
          )}
        </Typography>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
    >
     <FaBackward/>
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="start"
    >
      <Grid
        item
        style={{  }}
        direction="column"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <img
            src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`}
            width={50}
          ></img>
          <Typography variant="body1">
            {weatherDetails.weather[0].description}
          </Typography>
        </Grid>
      </Grid>
      <Divider orientation="vertical" variant="middle"
       flexItem color="white" 
       style={{marginLeft:30,marginRight:30}}/>
      <Grid
        item
        style={{ paddingBottom: 10}}
        direction="column"
        textAlign="left"
        alignItems="baseline"
      >
        <Typography variant="h4" paddingBottom={2}>
          {weatherDetails.main.temp}°C
        </Typography>
        <Typography variant="body2">
          Temp Min:{weatherDetails.main.temp_min}°C
        </Typography>
        <Typography variant="body2">
          Temp Max:{weatherDetails.main.temp_max}°C
        </Typography>
      </Grid>
    </Grid>
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ padding: 10, backgroundColor: "#383b47", borderRadius: 5 }}
    >
      <Grid
        item
        style={{ padding: 10 }}
        direction="column"
        textAlign="left"
        alignItems="baseline"
      >
        <Typography variant="body2" color="white">
          Pressure:{weatherDetails.main.pressure}hPa
        </Typography>
        <Typography variant="body2" color="white">
          Humidity: {weatherDetails.main.humidity}%
        </Typography>
        <Typography variant="body2" color="white">
          Visibility: {weatherDetails.visibility / 1000}km
        </Typography>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem color="white" />
      <Grid
        item
        style={{ padding: 10 }}
        direction="column"
        textAlign="center"
        alignItems="center"
      >
        <TiLocationArrowOutline color="white" />
        <Typography variant="body2" color="white">
          {weatherDetails.wind.speed}
          {"m/s "}
          {weatherDetails.wind.deg}
          {"Degree"}
        </Typography>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem color="white" />
      <Grid
        item
        style={{ padding: 10 }}
        direction="column"
        textAlign="right"
        alignItems="center"
      >
        <Typography variant="body2" color="white">
          {"Sunrise: "}
          {new Date(weatherDetails.sys.sunrise * 1000).toLocaleTimeString(
            "en-IN",
            { hour: "2-digit", minute: "2-digit" }
          )}
          {}
        </Typography>
        <Typography variant="body2" color="white">
          {"Sunset: "}
          {new Date(weatherDetails.sys.sunset * 1000).toLocaleTimeString(
            "en-IN",
            { hour: "2-digit", minute: "2-digit" }
          )}
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

export default SingleWeatherCard;
