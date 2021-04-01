import React from 'react';
import {Link} from 'react-router-dom'

// material-ui
import { Grid } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'

//styles
const useStyles = makeStyles({
    root:{
        backgroundColor:'#ADD8E6',
    },
    dashboardContainer:{
        display:'flex',
        flexFlow:'row wrap',
        justifyContent:'center',
        alignItems:'center',
    },
    dashboardCard:{
        display: 'flex',
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
        width:'30%',
        height:'30vh',
        margin:'2% 4% 2% 4%',
        boxShadow:' 0 2px 3px 3px lightcoral',
        backgroundColor:'white',
    },
    h2:{
        color:'lightcoral',
        fontSize:'3.5rem',
        textShadow: '0px 1px 2px white'
    },
    h3:{
        color:'black',
        fontSize:'4rem',
        underline:'none',
        '&:hover':{
            color:'#ADD8E6'
        }
    },


})

//
function OperatorDashboard() {
    const classes = useStyles()

    return (
        <>
        <Grid className={classes.root}>
        <h2 className={classes.h2}>Operator's Dashboard</h2>
        <Grid className={classes.dashboardContainer}>
            <Grid className = {classes.dashboardCard}>
                <Link to='/operator/truck/:id' style={{ textDecoration: 'none' }}>
                    <h3 className={classes.h3}>My Truck</h3>

                </Link>
            </Grid>
            <Grid className = {classes.dashboardCard}>
                <Link to='/operator/add-truck' style={{ textDecoration: 'none' }}>
                    <h3 className={classes.h3}>Add Truck</h3>

                </Link>
            </Grid>
            <Grid className = {classes.dashboardCard}>
                <Link to='/operator/update-truck/:id' style={{ textDecoration: 'none' }}>
                    <h3 className={classes.h3}>Update Truck</h3>

                </Link>
            </Grid>
            <Grid className = {classes.dashboardCard}>
                <Link to='/operator/add-menuItem' style={{ textDecoration: 'none' }}>
                    <h3 className={classes.h3}>Add Menu Item</h3>
                
                </Link>
            </Grid>
            <Grid className = {classes.dashboardCard}>
                <Link to='/operator/update-menuItem:id' style={{ textDecoration: 'none' }}>
                    <h3 className={classes.h3}>Update Menu Item</h3>
    
                </Link>
            </Grid>
        </Grid>
        </Grid>
        </>

    );
}


export default OperatorDashboard;