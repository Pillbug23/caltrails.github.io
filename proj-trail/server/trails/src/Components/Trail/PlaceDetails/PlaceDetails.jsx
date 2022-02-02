import React from 'react';
import {Box, Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import Axios from 'axios';

import useStyles from './styles';

const PlaceDetails = ({place,selected, refProp}) => {
    const classes = useStyles();

    const add = () => {
      Axios.post('http://localhost:3001/add', {
        description: place.description,
        directions: place.directions,
        city: place.city,
        name: place.name
      }).then((response)=> {
        console.log(response);
      });
    };

    if (selected) refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"})
    return (
      <Card elevation={6}>
      <CardMedia
        style={{ height: 200}}
        image={place.url ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1517210067403-d86a5703516f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuJTIwZnJhbmNpc2NvJTIwYmF5JTIwYXJlYXxlbnwwfHwwfHw%3D&w=1000&q=80'}
        title={place.name}
      />
      <CardContent>
      <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Description:</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.description}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" > 
          <Typography component="legend">Directions:</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.directions}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" > 
          <Typography component="legend">City:</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.city}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{add()}}>
          Favorite Hike
        </Button>
      </CardActions>
        </Card>
    );
}

export default PlaceDetails;