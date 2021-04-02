import React from 'react';

import { Grid, Typography } from "@material-ui/core";

const Truck = ({ truck }) => {
    
    return (
    <Grid container>
        <Typography>{truck.truck_name}</Typography>
    </Grid>
    );
}
 
export default Truck;