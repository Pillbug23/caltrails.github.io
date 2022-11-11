import React, {useState, useEffect, createRef} from 'react';
import { CircularProgress, Grid, Typography, Select, MenuItem, InputLabel, FormControl} from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';
import { ContactSupportSharp } from '@material-ui/icons';


const List = ({places,childClicked,isLoading,radius,setRadius,setZoom}) => {
    const classes = useStyles();
    const[elRefs,setElRefs] = useState([]);

    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);

    function setBoth(event) {
        setRadius(event)
        if (event === '10') {
            setZoom(12)
        } else if (event === '15') {
            setZoom(11)
        } else if (event === '20') {
            setZoom(10)
        } else if (event === '30') {
            setZoom(10)
        } else if (event === '40') {
            setZoom(9)
        } else if (event === '50') {
            setZoom(9)
        } else if (event === '100') {
            setZoom(8)
        } else {
            setZoom(13)
        }
    }

    return (
        <div className={classes.container}>
            <Typography variant='h4'>
                Find a trail near you! You can free roam as well!
            </Typography>
            <FormControl style={{margins: '20px'}} className={classes.formControl}>
                <InputLabel id="type"> Distance: Current </InputLabel>
                <Select id="type" value={radius} onChange={(e) => setBoth(e.target.value)}>
                    <MenuItem value="5"> Within 5 miles</MenuItem>
                    <MenuItem value="10"> Within 10 miles</MenuItem>
                    <MenuItem value="15"> Within 15 miles</MenuItem>
                    <MenuItem value="20"> Within 20 miles</MenuItem>
                    <MenuItem value="30"> Within 30 miles</MenuItem>
                    <MenuItem value="40"> Within 40 miles</MenuItem>
                    <MenuItem value="50"> Within 50 miles</MenuItem>
                    <MenuItem value="100"> Within 100 miles</MenuItem>
                </Select>
            </FormControl>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>
            ) : (
                <>
            <Grid container spacing={3} className={classes.list}>
                {places.map((place, i) => (
                    <Grid ref={elRefs[i]} item key={i} xs={12}>
                        <PlaceDetails selected={Number(childClicked) === i} 
                                        refProp={elRefs[i]} 
                                        place={place} 
                                        />
                    </Grid>
                ))}
                
            </Grid>
            </>
            )}
        </div>
    );
}

export default List;