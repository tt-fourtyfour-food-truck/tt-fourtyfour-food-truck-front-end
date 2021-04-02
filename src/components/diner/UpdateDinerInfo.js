import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import { updateDinerInfo } from "../../store";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexFlow: "column wrap",
    alignItems: "center",
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
  // styles for drop down
  formControl: {
    margin: theme.spacing(3),
    minWidth: 250,
    color: "#fff",
    marginTop: "4%",
    marginBottom: "3%",
    borderColor: "#fff",
    borderRadius: "10%"
  }
}));

const initialValues = {
  username: "",
  email: "",
  user_lat: "",
  user_long: ""
};

const initialHelperText = {
  username: "",
  email: ""
};

const UpdateDinerInfo = props => {
  const classes = useStyles();
  console.log(props);
  const [favoriteTrucks, setFavoriteTrucks] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleTruckChange = (event) => {
    setFavoriteTrucks(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

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

  console.log(props.diner)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.username.match(/^\w{5,11}$/g)) {
      props.updateDinerInfo(props.diner.user_id);
      setValues(initialValues);
      console.log(values);
    } else {
      setValues(initialValues);
      setHelperText({
        username: "Invalid Username. Please try again."
      });

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
              Update Preferences
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
                label="Update Username"
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
                helperText={helperText.email}
                type="text"
                label="Update email"
                name="email"
                value={values.email}
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
              {/* <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.password}
                label="New Password"
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
              /> */}

              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.username}
                type="text"
                label="Update Location Lat"
                name="user_lat"
                value={values.user_lat}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <LocationSearchingIcon />
                    </IconButton>
                  )
                }}
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.username}
                type="text"
                label="Update Location Long"
                name="user_long"
                value={values.user_long}
                onChange={handleChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <LocationSearchingIcon />
                    </IconButton>
                  )
                }}
              />

              <div>
                {/* <FormControl
                  onSubmit={handleSubmit}
                  className={classes.formControl}
                >
                  <InputLabel id="demo-controlled-open-select-label">
                    Select Favorite Truck
                  </InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    // fullWidth
                    // type='select'
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={favoriteTrucks}
                    onChange={handleTruckChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Oink & Moo BBQ"}>Oink & Moo BBQ</MenuItem>
                    <MenuItem value={"Ms. Cheezious"}>Ms. Cheezious</MenuItem>
                    <MenuItem value={"The Cow and Curd"}>
                      The Cow and Curd
                    </MenuItem>
                  </Select>
                </FormControl> */}
              </div>

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

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    diner: state.auth.diner
  }
}

const mapDispatchToProps = () => {
  return {
    updateDinerInfo    
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(UpdateDinerInfo);
