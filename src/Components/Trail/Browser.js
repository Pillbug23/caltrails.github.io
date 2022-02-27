import React, {useState,useEffect} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';

import {getPlacesData,getWeatherData} from '../../api/index';
import Header from './Header/Header';
import List from './List/List';
import Map from './Map/Map';

function Browser() {
    const [places,setPlaces] = useState([]);
    const [weatherData,setWeatherData] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    const [coordinates,setCoordinates] = useState({});

    const [bounds,setBounds] = useState({});

    const[isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude,lng: longitude});
        })
    }, []);

    useEffect(() => {
        setIsLoading(true);
        getWeatherData(coordinates.lat,coordinates.lng)
        .then((data) => setWeatherData(data));

        getPlacesData(bounds.sw,bounds.ne)
        .then((data) => {
            setPlaces(Object.values(data));
            setIsLoading(false);
        })
    }, [coordinates,bounds])

    return (
        <>
            <CssBaseline />
            <Header setCoordinates={setCoordinates} />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places = {places} 
                          childClicked={childClicked}
                          isLoading={isLoading}
                    />
                </Grid>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                        weatherData={weatherData}
                    />
                </Grid>
        </>
    );
}

export default Browser;