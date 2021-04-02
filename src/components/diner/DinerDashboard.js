import React from 'react';
import {Link} from 'react-router-dom'
import LoginSignupNav from '../navs/LoginSignupNav'
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
        width:'40%',
        height:'40vh',
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
function DinerDashboard() {
    const classes = useStyles()

    return (
        <>
        <Grid className={classes.root}>
        <LoginSignupNav />
        <h2 className={classes.h2}>Diner's Dashboard</h2>
        <Grid className={classes.dashboardContainer}>
            <Grid className = {classes.dashboardCard}>
                <Link to='/diner/browse' style={{ textDecoration: 'none' }}>
                    <h3 className={classes.h3}>Browse Trucks</h3>
                </Link>
            </Grid>
            <Grid className = {classes.dashboardCard}>
                <Link to='/diner/update-info' style={{ textDecoration: 'none' }}>
                    <h3 className={classes.h3}>Edit Account</h3>
                </Link>
            </Grid>
       
        </Grid>
        </Grid>
        </>

    );
}


export default DinerDashboard;