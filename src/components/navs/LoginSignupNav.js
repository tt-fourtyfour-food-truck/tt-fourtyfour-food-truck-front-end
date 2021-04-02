import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  navStyles: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '1%',
    paddingRight: '5%',
    textDecoration: 'none',
    maxWidth: '100%',
    backgroundColor: "#ADD8E6"
  },
  linkStyles: {
    textDecoration: 'none',
    paddingLeft: '1.5%',
    paddingTop: '1%',

  },
  buttonStyles: {
    fontSize: '1rem',
    color: 'white',
    fontWeight: 'bolder'
  }
})

const HomeNav = () => {

  const classes = useStyles();
  const { push } = useHistory();

    return (
        <div className={classes.navStyles}>
            <NavLink to='/' className={classes.linkStyles}>
              <Button className={classes.buttonStyles}>
                  Home
              </Button>
            </NavLink>
            <Button onClick={e => {
              e.stopPropagation();
              localStorage.removeItem("token");
              push('/');
            }} className={classes.buttonStyles}>
              Logout        
            </Button>
        </div>
    )
}

export default HomeNav;
