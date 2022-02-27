import React,{useState} from 'react';
import style from './Saved.css';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import {Box,Button,Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core';
import Axios from 'axios';
import useStyles from '../Trail/List/styles';

function Saved() {
    const [FavoriteStatus, setFavoriteStatus] = useState([])

    const classes = useStyles();

    const favorites = () => {
    Axios.get('http://localhost:5000/favorite', {
      })
      .then((response) => {
          console.log(response.data)
          setFavoriteStatus(response.data)
          console.log(FavoriteStatus)
      })
    }

    return (
        <div className="Saved">  
            <div className="Favs">
                <button className='searcheedd' onClick={favorites}>
                    Click here to see what trails you favorited!
                </button>
            <div className="Inside" style={{ padding: 20 }}>
            <Grid container spacing={10} justify="center" className={classes.list}>
                {FavoriteStatus?.map((place, i) => (   
                    <Card elevation={1}
                    style={{backgroundColor: "aquamarine" ,border: '2px solid gold', alignItems: 'center'}}
                    >
                    <CardMedia
                      style={{ height: 20}}
                      title={place.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5">{place.name}</Typography>
                      <Box display="flex" justifyContent="space-between"  mt={4}>
                        <Typography component="legend">Description: {place.description}</Typography>
                        
                      </Box>
                      <Box display="flex" justifyContent="space-between"  mt={4}> 
                        <Typography component="legend">Directions: {place.directions}</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between"  mt={4}> 
                        <Typography component="legend" >City: {place.city}</Typography>
                      </Box>
                      <Box display="flex" justifyContent="space-between"  mt={4}> 
                        <Typography component="legend" >Favorites: {place.shalong} </Typography>
                      </Box>
                    </CardContent>
                    </Card>
                ))}
            </Grid>
            </div>
            </div>
        </div>
      );
    }
    
export default Saved;