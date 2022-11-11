import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData, getWeatherData } from "../../api/index";
import Header from "./Header/Header";
import List from "./List/List";
import Map from "./Map/Map";

function Browser() {
  const [radius, setRadius] = useState(5);
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [living, setLiving] = useState({});
  const [zoom, setZoom] = useState(13);

  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        setLiving({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getWeatherData(coordinates).then((data) => setWeatherData(data));

    getPlacesData(coordinates, radius).then((data) => {
      setPlaces(Object.values(data));
      setIsLoading(false);
    });
  }, [coordinates, bounds, radius]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
            radius={radius}
            setRadius={setRadius}
            setZoom={setZoom}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
            zoom={zoom}
            living={living}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Browser;
