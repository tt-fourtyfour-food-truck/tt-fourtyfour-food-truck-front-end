import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  // IconButton,
  makeStyles
  // input
  // datalist
} from "@material-ui/core";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";

// import { mdiCarEstate } from '@mdi/js';
import {connect} from 'react-redux'

const useStyles = makeStyles({
  root: {
    flexFlow: "column wrap",
    alignItems: "center",

    backgroundPosition: "cover",
    height: "100vh"
  },
  paper: {
    width: "50%",
    marginTop: "1%",
    marginBottom: "1%",
    padding: "1%",
    backgroundColor: "#ADD8E6",
    position: "relative",
    boxSizing: "border-box"
  },
  paperItem: {
    color: "white",
    marginTop: "4%",
    marginBottom: "3%",
    borderColor: "white",
    boxSizing: "border-box"
  },
  topText: {
    width: "100%",
    textAlign: "center",
    boxSizing: "border-box"
  },
  formGrid: {
    flexFlow: "column wrap",
    alignItems: "center",
    boxSizing: "border-box"
  },
  makeTruck: {
    flexFlow: "column wrap",
    alignItems: "center",
    boxSizing: "border-box"
  }
});

const initialValues = {
  location: "",
  departureTime: "",
  departureDate: "",
  cuisineType: "",
  image: ""
};

const UpdateTruck = () => {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      setValues({ ...values, image: reader });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h4"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Update Truck
            </Typography>
          </Grid>

          <form onSubmit={handleSubmit}>
            <Grid container className={classes.formGrid}>
              <Button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                  style={{
                    display: "none"
                  }}
                />
                <p
                  onClick={() => imageUploader.current.click()}
                  ref={uploadedImage}
                >
                  UpLoad Truck Photo
                </p>
              </Button>
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="text"
                label="Update Cuisine Category"
                name="cuisineType"
                value={values.cuisineType}
                onChange={handleChange}
                autoComplete="off"
              />
              <TextField
                variant="outlined"
                label="Update Location"
                id="outlined-start-adornment"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="address"
                name="location"
                value={values.location}
                onChange={handleChange}
                autoComplete="off"
              />
              <TextField
                variant="outlined"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="date"
                name="departureDate"
                value={values.departureDate}
                onChange={handleChange}
                autoComplete="off"
              />
              <TextField
                variant="outlined"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="time"
                name="departureTime"
                value={values.departureTime}
                onChange={handleChange}
                autoComplete="off"
              />
              <Button
                className={`${classes.paperItem}`}
                size="large"
                variant="contained"
                type="input"
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

export default connect(null)(UpdateTruck);
