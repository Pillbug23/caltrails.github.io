import React, {useState, useEffect, createRef} from 'react';
import { CircularProgress, Grid, Typography} from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

const List = ({places,childClicked,isLoading}) => {
    const classes = useStyles();
    const[elRefs,setElRefs] = useState([]);

    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);

    return (
        <div className={classes.container}>
            <Typography variant='h4'>
                Find a trail near you!
            </Typography>
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