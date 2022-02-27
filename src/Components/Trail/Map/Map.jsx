import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper,Typography} from '@material-ui/core';
import useStyles from './styles';

const Map = ({setCoordinates,setBounds,coordinates,places,setChildClicked,weatherData}) => {
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}} 
                defaultCenter={coordinates} 
                center={coordinates}
                defaultZoom={14}
                margin= {[50,50,50,50]}
                options={{ disableDefaultUI: true, zoomControl: true}}
                onChange={(e) => {
                    setCoordinates({lat:e.center.lat,lng:e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place,i)=>(
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.lat)}
                        lng={Number(place.lon)}
                        key={i}
                    >
                        {
                             (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                                </Paper>
                            )
                        }
                    </div>
                ))}
                {weatherData?.list?.map((data,i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="80px" />
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;