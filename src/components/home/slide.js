import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import sliderImageOne from "../../assets/images/sliderOne.jpg";
import sliderImageTwo from "../../assets/images/sliderTwo.jpg";
import { renderInput, renderPhone, renderSelect } from "../formInput";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import "yup-phone";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const appoinmentSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string()
      .required("Email  required")
      .email("Enter a valid email address"),
    phone: Yup.string()
      .required("Phone required ")
      .phone("", "", "Enter a valid phone number"),
  });

  return (
    <Box sx={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Slider {...settings}>
        <div className={classes.sliderWrapper}>
          <img
            className={classes.sliderImage}
            src={sliderImageOne}
            alt="Tailor CUtting"
          />
          <Box className={classes.textWrapper}>
            <Typography variant="h1">Freedom to design</Typography>
            <Typography variant="h3">Best bespoke tailors in Dubai</Typography>
            <Button
              className={classes.button}
              onClick={() => {
                setOpen(true);
              }}
              variant="contained"
            >
              Make appointment
            </Button>
          </Box>
        </div>
        <div className={classes.sliderWrapper}>
          <img
            src={sliderImageTwo}
            className={classes.sliderImage}
            alt="Tailor CUtting"
          />
          <Box className={classes.textWrapper}>
            <Typography variant="h1">Create your own style</Typography>
            <Typography variant="h3">
              Choose from a myriad fabrics and styles
            </Typography>
            <Button
              className={classes.button}
              onClick={() => {
                setOpen(true);
              }}
              variant="contained"
            >
              Make appointment
            </Button>
          </Box>
        </div>
      </Slider>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              apparelType: "",
            }}
            validationSchema={appoinmentSchema}
            onSubmit={(values, actions) => {
              // handleLogin(values.username, values.password);
              actions.setSubmitting(false);
            }}
          >
            {(errors, props) => (
              <Form>
                <Grid container className={classes.formWrapper}>
                  <Grid item xs={4}>
                    <div>Name :</div>
                  </Grid>
                  <Grid item xs={8}>
                    <Field
                      name="name"
                      type="text"
                      className={classes.formControl}
                      component={renderInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ErrorMessage
                      component="span"
                      className="error"
                      name="name"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div>Phone :</div>
                  </Grid>

                  <Grid item xs={8}>
                    <Field
                      name="phone"
                      type="text"
                      className={classes.formControlPhone}
                      component={renderPhone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ErrorMessage
                      component="span"
                      className="error"
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div>Email :</div>
                  </Grid>
                  <Grid item xs={8}>
                    <Field
                      name="email"
                      type="text"
                      className={classes.formControl}
                      component={renderInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ErrorMessage
                      component="span"
                      className="error"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div>Apparel Type :</div>
                  </Grid>
                  <Grid item xs={8}>
                    <Field
                      name="apparel"
                      className={classes.formControlSelect}
                      component={renderSelect}
                    ></Field>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const useStyles = makeStyles({
  sliderWrapper: {
    position: "relative",
  },
  sliderImage: {
    width: "100vw",
    //
    "@media (max-width:500px)": {
      height: "40vh",
    },
    "@media (min-width:500px)": {
      height: "80vh",
    },
    "@media (min-width:960px)": {
      height: "100vh",
    },
  },
  textWrapper: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    zIndex: "20",
    top: "50%",
    alignItems: "center",
  },
  button: {
    opacity: ".5",
    fontWeight: "bold !important",
    margin: "1% !important",
    color: "white !important",
    textTransform: " capitalize !important",
  },
  formWrapper: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  formControl: {
    margin: "10px 0 !important",
    minWidth: "160",
    display: "block",

    "&  .MuiInputBase-root": {
      borderRadius: "10px",
    },
    "&  .MuiButtonBase-root": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "0px",
      height: "fit-content",
      boxShadow: "none",
      "&:hover": {
        border: "0px",
        background: "none",
      },
      "&:active": {
        background: "none",
        cursor: "default",
        transition: "none",
        textTransform: "none",
        boxShadow: "none",
        backgroundColor: "white",
      },
    },
  },
  formControlPhone: {
    display: "flex",
    margin: "10px 0 !important",
    width: "99% !important",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    borderRadius: "10px !important",
    background: "#ffffff00 !important",
    height: "56px",

    "&  .form-control": {
      width: "100% !important",
      background: "#ffffff00 !important",
      border: "0px solid rgba(0, 0, 0, 0.23) !important",
    },
  },
  formControlSelect: {
    width: "99% !important",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    margin: "24px 0 !important",
    borderRadius: "10px !important",
  },
});

export default Slide;
