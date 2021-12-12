import { Divider, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import WeatherCard from "../widgets/WeatherCard";
import SingleWeatherCard from "../widgets/WeatherCard2";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import cities from "../constants/Cities";
import TextInput from "../widgets/CustomTextField";

export default function Dashboard({weather})
{
    const [click,setClick] = useState(false);
    const [index,setIndex] = useState(0);
    return(
        <>
         <Grid
        container
        spacing={1}
        direction="row"
        paddingBottom={5}
        justifyContent="center"
        alignItems="baseline"
      >
        <TextInput/>
        <Button variant="contained" color="primary">Add city</Button>
        </Grid>
        <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        {( weather.list.map((element,index)=> 
         {
          console.log(element);
          console.log(index);
          {
            return (typeof weather.cnt != 'undefined' && !click) ? 
           (
            <WeatherCard 
            weatherDetails={weather.list[index]}
         >
          </WeatherCard>
          ):
          null}
         } ))
        }
      </Grid>
      </>
    );
}