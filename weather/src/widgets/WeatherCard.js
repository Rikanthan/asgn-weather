import { Divider, Grid, Typography } from "@mui/material";
import Image from '../cld.png';
import { FaLocationArrow } from "react-icons/fa";
const WeatherCard =({weatherDetails}) =>
  (
    <Grid
      container
      md={4}
      style={{ border: 1, borderRadius: 5,backgroundColor:"#388ee7", backgroundImage: `url(${Image})`,margin: 10 }}
      direction="column"
      justifyContent="space-between"
      alignItems="baseline"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Typography />
        <Typography>X</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Grid
          item
          style={{ padding: 10 }}
          direction="column"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Typography variant="h6">{weatherDetails.name},{weatherDetails.sys.country}</Typography>
          <Typography variant="body2">feb 3, 2012</Typography>
        </Grid>
        <Grid
          item
          style={{ paddingRight: 20, paddingBottom: 10 }}
          direction="column"
          textAlign="left"
          alignItems="baseline"
        >
          <Typography variant="h4">{weatherDetails.main.temp}°C</Typography>
          <Typography variant="body2">Temp Min:{weatherDetails.main.temp_min}°C</Typography>
          <Typography variant="body2">Temp Max:{weatherDetails.main.temp_max}°C</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
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
           Visibility: {weatherDetails.visibility/1000}km
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          color="white"
        />
        <Grid
          item
          style={{ padding: 10 }}
          direction="column"
          textAlign="center"
          alignItems="baseline"
        >
          <FaLocationArrow color="white"/>
          <Typography variant="body2" color="white">
            {weatherDetails.wind.speed}{"m/s "}{weatherDetails.wind.deg}{"Degree"}
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          color="white"
        />
        <Grid
          item
          style={{ padding: 10 }}
          direction="column"
          textAlign="right"
          alignItems="baseline"
        >
          {/* <Typography variant="body2" color="white">
           {"Sunrise:"}{weatherDetails.sunrise}
          </Typography>
          <Typography variant="body2" color="white">
          {"Sunset:"}{weatherDetails.sunset}
          </Typography> */}
        </Grid>
      </Grid>
    </Grid>
  )

  export default WeatherCard;

