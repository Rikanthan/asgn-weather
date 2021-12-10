import logo from "./logo.svg";
import "./App.css";
import { Divider, Grid, Typography,Paper } from "@mui/material";
import WeatherCard from "./widgets/WeatherCard";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
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
         <WeatherCard/>
        <WeatherCard/>
      </Grid>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
         <WeatherCard/>
        <WeatherCard/>
      </Grid>
    </div>
  );
}

export default App;
