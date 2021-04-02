import React, { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const useStyles = makeStyles({
  root:{
    boxSizing: 'border-box',
    maxWidth: '100%',
  },
  nav:{
    display:'flex',
    flexFlow:'row',
    justifyContent: 'space-around',
  },
  navLinks:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'20%',
  },
  span:{
    padding: '5%',
    margin:'5%',
  },
  a:{
    fontSize: '1.5rem',
    color:'white',
    textDecoration: 'none',
  },
  header:{
    backgroundColor: '#ADD8E6',
    borderBottom: '3px solid white',
  },
  h1:{
    fontSize: '3rem',
    color:'white',
    textShadow: '0px 2px 3px black',
  },
  h2:{
    fontSize: '3rem',
    color: 'white',
    textShadow: '0px 2px 3px black',
  },
  container:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    backgroundColor: 'silver',
    background: "url('https://images.pexels.com/photos/1053769/pexels-photo-1053769.jpeg?cs=srgb&dl=pexels-adrianna-calvo-1053769.jpg&fm=jpg')",
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  },
  imageContainer:{
    textAlign: 'center',
    color: '#ADD8E6',
    textShadow:'0px 1px 2px black',
    fontSize: '1.5rem',
  },
  img:{
    width:'40%',
    borderRadius: '20px',
    border: '5px solid #ADD8E6',
    boxShadow:' 0 2px 3px 3px lightcoral',
  },
})



function BrowseTrucks() {
    // const [trucks, setTrucks] = useState([])
    const classes = useStyles()
    
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/trucks')
        .then(res =>{
            console.log(res)
            // setTrucks(res)
        })
        .catch(err =>{
            console.log(err, err.reponse)
        })
    }, [])


  return (
    <Grid className={classes.root}>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <h1 className={classes.h1}>FoodTruck TrackR</h1>
        </nav>
      </header>
        <Grid className={classes.container}>
        <h2 className={classes.h2}>Browse Local Trucks!</h2>
            {/* Map over trucks */}
            {/* {trucks.map(item=><p>{item}</p>)} */}
          <Grid className={classes.imageContainer}>
            <h3 className={classes.h3}>Find all your nearby food trucks!</h3>
            <Grid className={classes.truckImg}>
                <img className={classes.img}src='https://images.pexels.com/photos/2227960/pexels-photo-2227960.jpeg?cs=srgb&dl=pexels-james-frid-2227960.jpg&fm=jpg' alt='Food Truck'/>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  );
}

export default BrowseTrucks;

