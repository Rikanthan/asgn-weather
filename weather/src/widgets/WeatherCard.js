import { Divider, Grid, Typography } from "@mui/material";
import Image from '../cld.png';

const WeatherCard =(weatherDetails) =>
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
          <Typography variant="h6">{weatherDetails.city},{weatherDetails.country}</Typography>
          <Typography variant="body2">feb 3, 2012</Typography>
        </Grid>
        <Grid
          item
          style={{ paddingRight: 20, paddingBottom: 10 }}
          direction="column"
          textAlign="left"
          alignItems="baseline"
        >
          <Typography variant="h4">{weatherDetails.temperature}</Typography>
          <Typography variant="body2">Temp Min:{weatherDetails.tempmin}</Typography>
          <Typography variant="body2">Temp Max:{weatherDetails.tempmax}</Typography>
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
           Pressure:{weatherDetails.pressure}hPa
          </Typography>
          <Typography variant="body2" color="white">
           Humidity: {weatherDetails.huminity}%
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
          <Typography variant="body2" color="white">
            {weatherDetails.speed}{"m/s "}{weatherDetails.degree}{"Degree"}
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
          <Typography variant="body2" color="white">
           {"Sunrise:"}{weatherDetails.sunrise}
          </Typography>
          <Typography variant="body2" color="white">
          {"Sunset:"}{weatherDetails.sunset}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )

  export default WeatherCard;

