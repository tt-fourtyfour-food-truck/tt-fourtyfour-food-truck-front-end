import React, { useEffect } from 'react'
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
  chicken:{
    width:'30%'
  },
  p:{
    color:'black',
    fontSize:'2rem',
    textShadow: '1px 1px 1px white'
  },
  box:{
    display:'flex',
    flexFlow:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  innerbox:{
    width:'30%',
    backgroundColor: 'white',
    margin:'1%'
  }
})

const dummyTrucksOwned = [
  {
      truck: {
          id: 1,
          img: 'https://images.pexels.com/photos/5675763/pexels-photo-5675763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          cuisineType: 'Chinese',
          customerRatings: [4.5,4.4],
          customerRatingAvg: 4.45, //integer equal to the mean of the values in customer ratings
           //menuItems will be held in here when created
          menuItems: {
              itemName: 'Orange Chicken',
              itemDescription: 'Yummy!',
              itemPhotos: 'https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', //array of images or url's
              itemPrice: 14.99, //integer
              customerRatings: [4.5],
              customerRatingAvg: 4.5,
          },
          currentLocation: {
              location: 'California, USA',
              departureTime: '10am', //time
              departureDate: 'April 2nd, 2021' //date
          },
      },
  }
];

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

            {/* Dummy Truck */}
            {dummyTrucksOwned.map((item) =>{
              return (
              <>
              <Grid className={classes.box}>
                <Grid className={classes.innerbox}>
                <p className={classes.p}>Truck Number #{item.truck.id}</p>
                <img src={item.img} />
                <p className={classes.p}>Cuisine Type:{item.truck.cuisineType}</p>
                <p className={classes.p}>Customer Rating:{item.truck.customerRatings}</p>
                <p className={classes.p}>Customer Avg Rating:{item.truck.customerRatingAvg}</p>
                </Grid>
                <Grid className={classes.innerbox}>
                  <p className={classes.p}>Menu Items: {item.truck.menuItems.itemName}</p>
                  <img className={classes.chicken} src={item.truck.menuItems.itemPhotos} />
                  <p className={classes.p}>Description:{item.truck.menuItems.itemDescription}</p>
                  <p className={classes.p}>Price: {item.truck.menuItems.itemPrice}</p>
                  <p className={classes.p}>Customer Rating: {item.truck.menuItems.customerRatings}</p>
                  <p className={classes.p}>Customer Avg Rating: {item.truck.menuItems.customerRatingAvg}</p>
                </Grid>
              </Grid>
              </>
              )
            })}
           
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

