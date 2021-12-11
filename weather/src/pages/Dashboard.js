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
        {/* {( weather.list.map((element,index)=> 
         {
          console.log(element.name);
          console.log(index);
           <WeatherCard 
            weatherDetails={element}
            />
         } ))
        } */}
        {(typeof weather.cnt != 'undefined' && !click ) ? (
          <WeatherCard 
          weatherDetails={weather.list[0]}
          onClick = {(e)=>{
                setClick(true)
                  setIndex(0)
                  console.log(index)
          }}>
              </WeatherCard>
        ):
        null}
        {(typeof weather.cnt != 'undefined' && !click) ? (
          <WeatherCard 
          weatherDetails={weather.list[1]}
          onclick = {()=>{
            setClick(true)
            setIndex(1)
        }}>
        </WeatherCard>
        ):
        null}
        {(typeof weather.cnt != 'undefined'  && !click) ? (
          <WeatherCard 
          weatherDetails={weather.list[2]}
           onclick = {
               () =>{
                   setClick(true)
                   setIndex(2)
                   console.log(index)
               }
           }    >
              </WeatherCard>
        ):
        null}
        {(typeof weather.cnt != 'undefined'  && !click) ? (
          <WeatherCard 
          weatherDetails={weather.list[3]}>
              {onclick =()=>{
                  setClick(true)
                  setIndex(3)
              }}
              </WeatherCard>
        ):
        null}
         {(typeof weather.cnt != 'undefined'  && !click) ? (
          <WeatherCard 
          weatherDetails={weather.list[4]}>
              {onclick =()=>{
                  setClick(true)
                  setIndex(4)
              }}
              </WeatherCard>
        ):
        null}
        {(typeof weather.cnt != 'undefined'  && !click) ? (
          <WeatherCard 
          weatherDetails={weather.list[5]}>
              {onclick =()=>{
                  setClick(true)
                  setIndex(5)
              }}
              </WeatherCard>
        ):
        null}
         {(typeof weather.cnt != 'undefined'  && !click) ? (
          <WeatherCard 
          weatherDetails={weather.list[6]}>
              {onclick =()=>{
                  setClick(true)
                  setIndex(6)
                  console.log(index);
              }}
              </WeatherCard>
        ):
        null}
        {(typeof weather.cnt != 'undefined'  && !click) ? (
          <WeatherCard 
          weatherDetails={weather.list[7]} >
              {onclick =()=>{
                  setClick(true)
                  setIndex(7)
              }}
              </WeatherCard>
        ):
        null}
        {(typeof weather.cnt != 'undefined'  && click) ? (
        <SingleWeatherCard 
        weatherDetails = {weather.list[index]}
        >
              {onclick =()=>{
                  setClick(false)
                  setIndex(0)
              }}
              </SingleWeatherCard>
      ):
      null}

      </Grid>
      </>
    );
}