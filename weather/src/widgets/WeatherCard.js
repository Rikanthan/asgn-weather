import { Divider, Grid, Typography } from "@mui/material";
import Image from "../newbl.png";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useState  } from "react";
import { AiOutlineClose } from "react-icons/ai";

function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();

  return "#" + "00000".substring(0, 6 - c.length) + c;
}

export default function WeatherCard  ({weatherDetails},props) {
  const [id,setId] = useState(0);
  const [click,setClick] = useState(false);
  return(
    (
      <Grid
        container
        md={4}
        style={{
          border: 1,
          borderRadius: 5,
          backgroundColor: intToRGB(
            hashCode(weatherDetails.name + weatherDetails.sys.country +"sun" )
          ),
          backgroundImage: `url(${Image})`,
          margin: 10,
        }}
        direction="column"
        justifyContent="space-between"
        alignItems="start"
      >
        {onclick = 
          props.onclick
        }
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Typography />
          <AiOutlineClose/>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Grid
            item
            style={{ padding: 10 }}
            direction="column"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography variant="h6" color={"white"}>
              {weatherDetails.name},{weatherDetails.sys.country}
            </Typography>
            <Typography variant="body2" color={"white"}>
              {new Date(weatherDetails.dt * 1000).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              {", "}
              {new Date(weatherDetails.sys.sunset * 1000).toLocaleDateString(
                "en-US",
                { day: "numeric", month: "short" }
              )}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src={`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`}
                width={50}
              ></img>
              <Typography variant="body1" color={"white"}>
                {weatherDetails.weather[0].description}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{ paddingRight: 20, paddingBottom: 10 }}
            direction="column"
            textAlign="left"
            alignItems="baseline"
          >
            <Typography variant="h4" paddingBottom={2} color={"white"}>
              {parseInt( weatherDetails.main.temp,10)}°C
            </Typography>
            <Typography variant="body2" color={"white"}>
              Temp Min:{parseInt( weatherDetails.main.temp_min,10)}°C
            </Typography>
            <Typography variant="body2" color={"white"}>
              Temp Max:{parseInt( weatherDetails.main.temp_max,10)}°C
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
              {"Pressure: "}{weatherDetails.main.pressure}hPa
            </Typography>
            <Typography variant="body2" color="white">
             {"Humidity: "}  {weatherDetails.main.humidity}%
            </Typography>
            <Typography variant="body2" color="white">
              {"Visibility: "} {weatherDetails.visibility / 1000}km
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
            alignItems="center"
          >
            <TiLocationArrowOutline color="white" />
            <Typography variant="body2" color="white">
              {weatherDetails.wind.speed}
              {"m/s "}
              {weatherDetails.wind.deg}
              {" Degree"}
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
    )
  );
}

