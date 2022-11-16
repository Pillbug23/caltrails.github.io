import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import "./markers.css";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
  zoom,
  living,
}) => {
  const classes = useStyles();

  const AnyReactComponent = () => (
    <div>
      <div class="pin"></div>
      <div class="pulse"></div>
    </div>
  );

  const AnyReactComponentCurrent = () => (
    <div>
      <div class="pin2"></div>
      <div class="pulse2"></div>
    </div>
  );
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDdDf2UClg6ZsRozMW2vWp512pOgSooNCo" }}
        defaultCenter={coordinates}
        center={coordinates}
        zoom={zoom}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        <AnyReactComponentCurrent lat={living.lat} lng={living.lng} />

        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.lat)}
            lng={Number(place.lon)}
            key={i}
          >
            {
              <Paper
                style={{ position: "relative", bottom: "80px" }}
                elevation={3}
                className={classes.paper}
              >
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {" "}
                  {place.name}
                </Typography>
              </Paper>
            }
            {<AnyReactComponent lat={coordinates.lat} lng={coordinates.lng} />}
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              height="80px"
              alt="weather"
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
