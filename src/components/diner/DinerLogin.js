import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  makeStyles
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { dinerLoggedIn } from "../../store";
import LoginSignupNav from './../navs/LoginSignupNav';

const useStyles = makeStyles({
  root: {
    flexFlow: "column wrap",
    alignItems: "center",
    backgroundImage: `url("https://images.unsplash.com/photo-1513640127641-49ba81f8305c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80")`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ADD8E6',
    backgroundPosition: 'center',
    width: '100%',
    height: "100vh"
  },
  paper: {
    width: "35%",
    marginTop: "5%",
    padding: "2%",
    backgroundColor: "#ADD8E6"
  },
  paperItem: {
    color: "#fff",
    marginTop: "4%",
    marginBottom: "3%",
    borderColor: "#fff",
    borderRadius: "10%"
  },
  topText: {
    width: "100%",
    textAlign: "center"
  },
  formGrid: {
    flexFlow: "column wrap",
    alignItems: "center"
  },
  haveAccount: {
    flexFlow: "column wrap",
    alignItems: "center"
  }
});

const initialValues = {
  username: "",
  password: ""
};

const initialHelperText = {
  username: "",
  password: ""
};

const DinerLogin = props => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [helperText, setHelperText] = useState(initialHelperText);
  const { push } = useHistory();

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.username.match(/^\w{5,11}$/g) &&
      values.password.match(/^[.\S]{7,15}$/g)
    ) {
      props.dinerLoggedIn(values);
      setValues(initialValues);
      setTimeout(() => {
        push(`/diner/dashboard`);
      }, 2000);
    } else {
      setValues(initialValues);
      setHelperText({
        username: "Invalid Username. Please try again.",
        password: "Invalid Password. Please try again."
      });
    }
  };

  return (
    <>
    <LoginSignupNav />
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h4"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Diner Login
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.username}
                type="text"
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  )
                }}
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.password}
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}
              />
              <Button
                className={`${classes.paperItem}`}
                size="large"
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </form>
          <Grid container className={classes.haveAccount}>
            <Typography className={`${classes.paperItem}`}>
              Don't have an account?
            </Typography>
            <Button
              className={`${classes.paperItem}`}
              size="large"
              variant="outlined"
              onClick={() => {push('/diner/register')}}
            >
              Sign-Up
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

const mapDispatchToProps = () => {
  return {
    dinerLoggedIn
  }
}

export default connect(null, mapDispatchToProps())(DinerLogin);