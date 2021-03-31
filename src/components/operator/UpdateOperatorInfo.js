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


const useStyles = makeStyles({
  root: {
    flexFlow: "column wrap",
    alignItems: "center",
    // backgroundImage: `url(${StreetFoodBg})`,
    height: "100vh"
  },
  paper: {
    width: "35%",
    marginTop: "5%",
    padding: "2%",
    backgroundColor: "#eaf0df"
  },
  paperItem: {
    color: "#1a0000",
    marginTop: "4%",
    marginBottom: "3%",
    borderColor: "black"
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

const UpdateOperatorInfo = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [helperText, setHelperText] = useState(initialHelperText);

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
      setValues(initialValues);
      console.log(values);
    } else {
      setValues(initialValues);
      setHelperText({
        username: "Invalid Username. Please try again.",
        password: "Invalid Password. Please try again."
      });
      return;
    }
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h4"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Update Profile
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
                Save Changes
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default UpdateOperatorInfo;