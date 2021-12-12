import { Grid, Button } from "@mui/material";
import WeatherCard from "../widgets/WeatherCard";
import SingleWeatherCard from "../widgets/WeatherCard2";
import { useState } from "react";
import cities from "../constants/Cities";
import TextInput from "../widgets/CustomTextField";
export default function Dashboard({ weather }) {
  const [click, setClick] = useState(false);
  const [idx, setIdx] = useState(-1);
  return (
    <>
      {!click && idx < -1?
        <Grid
          container
          spacing={1}
          direction="row"
          paddingBottom={5}
          justifyContent="center"
          alignItems="center"
        >
          <TextInput />
          <Button variant="contained" color="primary">Add city</Button>
        </Grid> : null
      }
      {!click && idx < 0 ?
      <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="baseline"
    >
      {(cities.map((element, index) => {
        {
          return (typeof weather.cnt != 'undefined' && !click) ?
            (
              <WeatherCard
                weatherDetails={weather.list[index]}
                index = {index}
                onpress ={() => {
                  setClick(true);
                  console.log(click);
                  console.log(index);
                  setIdx(index);
                  console.log(idx);
                  console.log(click);
                }}

              >
              </WeatherCard>
            ) :
            null
        }
      }))
      }
    </Grid> : null
      }
      {click ?
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="baseline"
        >
          
          <SingleWeatherCard
            weatherDetails={weather.list[idx]}
            onpress ={() => {
              setClick(false);
              setIdx(-1);
              console.log(click);
            }}>
          </SingleWeatherCard>
        </Grid> : null}
    </>
  );
}