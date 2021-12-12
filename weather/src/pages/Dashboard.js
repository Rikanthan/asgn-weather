import { Grid, Button } from "@mui/material";
import WeatherCard from "../widgets/WeatherCard";
import SingleWeatherCard from "../widgets/WeatherCard2";
import { useState } from "react";
import cities from "../constants/Cities";
import TextInput from "../widgets/CustomTextField";
export default function Dashboard({ weather }) {
  const [click, setClick] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <>
      {!click ?
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
                  onclick={() => {
                    console.log(index);
                    setClick(true);
                    setIndex(index);
                  }}

                >
                  {/* {
                    onclick = () => {
                      console.log(index);
                      setClick(true);
                      setIndex(index);
                    }
                  } */}
                </WeatherCard>
              ) :
              null
          }
        }))
        }
      </Grid>
      {click ?
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="baseline"
        >
          <SingleWeatherCard
            weatherDetails={weather.list[index]}>
            {
              onclick = () => {
                setClick(false);
                setIndex(0);
              }
            }
          </SingleWeatherCard>
        </Grid> : null}
    </>
  );
}