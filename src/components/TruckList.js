import React, { useEffect } from 'react';

//components
import Truck from "./Truck";

//store
import { connect } from "react-redux";
import { fetchTrucks } from "../store";
import { Grid, Typography } from '@material-ui/core';


const TruckList = props => {
    const { fetchTrucks } = props;
    useEffect(() => {
        fetchTrucks();
        console.log("props", props);
    }, [fetchTrucks]);

    return (
    <>
    <Grid>
    <Typography>TruckList</Typography>
    {props.truckList && props.truckList.map(truck => {
        console.log(truck);
        return <Truck key={truck.truck_id} truck={truck} />
    })}
    </Grid>
    </>
    );
}


const mapStateToProps = state => {
    return {
        truckList: state.app.truckList
    }
}

const mapDispatchToProps = () => {
    return {
        fetchTrucks
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps())(TruckList);