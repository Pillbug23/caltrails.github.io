import React,{ useState } from 'react';
import {Box, Typography,Button,Card,CardMedia,CardContent,CardActions} from '@material-ui/core';
import Axios from 'axios';

import useStyles from './styles';

const PlaceDetails = ({place,selected, refProp}) => {
    const classes = useStyles();
    const [count,setCount] = useState(1);

    const add = () => {
      setCount(count + 1)
      Axios.post('http://localhost:5000/add', {
        description: place.description,
        directions: place.directions,
        city: place.city,
        name: place.name,
        shalong: count.toString()
      }).then((response)=> {
        console.log(response);
      });
    };

    if (selected) refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"})
    return (
      <Card elevation={6}>
      <CardMedia
        style={{ height: 200}}
        image={'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGlraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
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