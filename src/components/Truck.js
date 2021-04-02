import React from 'react';

import { Card, CardContent, CardMedia, Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        marginTop: "3rem",
        marginBottom: "3rem"
    },
    truckImg: {
        width: "450px"
    }
});

const Truck = ({ truck }) => {
    
    const classes = useStyles();


    return (
    <Card className={classes.card}>
        <Grid container alignItems="center">
            <CardMedia>
                <img src={truck.image_url} alt={truck.truck_name} className={classes.truckImg} />
            </CardMedia>
            <CardContent>
                <Typography variant="h4" >{truck.truck_name}</Typography>
                <Typography variant="h6" >Cusine:</Typography>
                <Typography variant="body1" >{truck.cuisine}</Typography>
                {truck.truck_avg_rating === undefined || truck.truck_avg_rating === null ? (
                    <Typography variant="h6">No Ratings Yet</Typography>
                ) : (
                <>
                    <Typography variant="h6" >Rating:</Typography>
                    <Typography variant="body1" >{truck.truck_avg_rating} ⭐️</Typography>
                </>)}
                <Typography variant="h6" >Open:</Typography>
                <Typography variant="body1" >{truck.open_time}</Typography>
                <Typography variant="h6">Location</Typography>
                <Typography variant="body1">{truck.truck_lat}, {truck.truck_lat}</Typography>
                <Button variant="contained">Add to favorites</Button>
            </CardContent>
        </Grid>

    </Card>
    );
}
 
export default Truck;