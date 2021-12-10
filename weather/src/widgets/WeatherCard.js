import { Divider, Grid, Typography } from "@mui/material";
import Image from '../cld.png';

export default function WeatherCard() {
  return (
    <Grid
      container
      md={4}
      style={{ border: 1, borderRadius: 5,backgroundColor:"lightblue", backgroundImage: `url(${Image})`,margin: 10 }}
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
          <Typography variant="h6">Colombo,LK</Typography>
          <Typography variant="body2">9.19 am,feb 8</Typography>
        </Grid>
        <Grid
          item
          style={{ paddingRight: 20, paddingBottom: 10 }}
          direction="column"
          textAlign="left"
          alignItems="baseline"
        >
          <Typography variant="h4">27c</Typography>
          <Typography variant="body2">Temp Min:</Typography>
          <Typography variant="body2">Temp Max:</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        style={{ padding: 10, backgroundColor: "black", borderRadius: 5 }}
      >
        <Grid
          item
          style={{ padding: 10 }}
          direction="column"
          textAlign="left"
          alignItems="baseline"
        >
          <Typography variant="body2" color="white">
            Pressure
          </Typography>
          <Typography variant="body2" color="white">
            Humidity
          </Typography>
          <Typography variant="body2" color="white">
            Visibility:
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
            Pressure
          </Typography>
          <Typography variant="body2" color="white">
            Humidity
          </Typography>
          <Typography variant="body2" color="white">
            Visibility:
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
            Pressure
          </Typography>
          <Typography variant="body2" color="white">
            Humidity
          </Typography>
          <Typography variant="body2" color="white">
            Visibility:
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
