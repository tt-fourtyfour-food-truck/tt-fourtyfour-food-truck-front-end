import React from 'react';

//store
import { connect } from "react-redux";

// material-ui
import { Card, Grid, Typography } from "@material-ui/core";

const DinerDashboard = () => {
    return (
    <>
    <Typography>Diner DinerDashboard</Typography>
    <Grid container direction="row" 
    >
        <Card>

        </Card>
    </Grid>
    </>
    );
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(DinerDashboard);