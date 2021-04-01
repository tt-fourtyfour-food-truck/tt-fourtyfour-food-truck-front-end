import React, { useState, useEffect } from "react";
import {
    Paper,
    Grid,
    TextField,
    Typography,
    Button,
    makeStyles
} from "@material-ui/core";

// action creators
import { addTruck } from "../../store";

//store
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    flexFlow: "column wrap",
    alignItems: "center",

    backgroundPosition: "cover",
    height: "100vh"
  },
  paper: {
    width: "50%",
    marginTop: "4%",
    marginBottom: "4%",
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
  truckName: "",
  truckLocation: "",
  cuisineType: "",
  menuItem: "",
  image: ""
};

const AddTruck = (props) => {
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
    props.addTruck(/* newTruck */);
        // props.history.push(``); // push to dashboard
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
              Add Food Truck
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
                label="Add Truck Name"
                name="truckName"
                value={values.truckName}
                onChange={handleChange}
                autoComplete="off"
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="text"
                label="Add Location"
                name="truckLocation"
                value={values.truckLocation}
                onChange={handleChange}
                autoComplete="off"
              />

              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="text"
                label="Cuisine Type"
                name="cuisineType"
                value={values.cuisineType}
                onChange={handleChange}
                autoComplete="off"
              />

              <Button
                size="small"
                name="menuItem"
                value="values.menuItem"
                color="default"
                className={classes.paperItem}
              >
                Add Menu Item
              </Button>

              <Button
                className={`${classes.paperItem}`}
                size="large"
                variant="contained"
                type="input"
              >
                Add Truck
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
    return {
        operator: state.app.operator
    };
}

const mapDispatchToProps = () => {
    return {
        addTruck
    };
}

export default connect(mapStateToProps, mapDispatchToProps())(AddTruck);
