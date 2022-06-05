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
  DialogContentText,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import sliderImageOne from "../../assets/images/sliderOne.jpg";
import sliderImageTwo from "../../assets/images/sliderTwo.jpg";
import {
  renderInput,
  renderPhone,
  renderSelect,
  renderDate,
  renderTime,
} from "../formInput";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { post } from "../utils/apiController";

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
  const [modelOpen, setModelOpen] = useState(false);
  const [name, setName] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleModalClose = () => {
    setModelOpen(false);
  };

  const handleSubmit = async (values, actions) => {
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("apparel", values.apparel);
    formData.append("date", values.date);
    formData.append("time", values.time);

    await post(`addApoinment`, formData)
      .then((res) => {
        handleClose();
        setName(values.name);
        setModelOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <Dialog
        open={open}
        disableEscapeKeyDown={true}
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle>Appointment Booking </DialogTitle>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            apparel: "",
            date: new Date(),
            time: "",
          }}
          validationSchema={appoinmentSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values, actions);
            actions.setSubmitting(true);
          }}
        >
          {(errors, props) => (
            <Form>
              <DialogContent>
                <Grid container>
                  <Grid item container xs={12}>
                    <Grid
                      item
                      container
                      xs={12}
                      md={6}
                      className={classes.formWrapper}
                    >
                      <Grid
                        item
                        xs={12}
                        container
                        className={classes.formWrapper}
                      >
                        <Grid item xs={4}>
                          <div>Name :</div>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            name="name"
                            type="text"
                            variant="outlined"
                            className={classes.formControl}
                            component={renderInput}
                          />
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                        <ErrorMessage
                          component="span"
                          className="error"
                          name="name"
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      md={6}
                      className={classes.formWrapper}
                    >
                      <Grid
                        item
                        xs={12}
                        container
                        className={classes.formWrapper}
                      >
                        <Grid item xs={4}>
                          <div>Email :</div>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            name="email"
                            type="text"
                            variant="outlined"
                            className={classes.formControl}
                            component={renderInput}
                          />
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                        <ErrorMessage
                          component="span"
                          className="error"
                          name="email"
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      md={6}
                      className={classes.formWrapper}
                    >
                      <Grid
                        item
                        container
                        xs={12}
                        className={classes.formWrapper}
                      >
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
                      </Grid>
                      <Grid item xs={12}>
                        <ErrorMessage
                          component="span"
                          className="error"
                          name="phone"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item container xs={12}>
                    <Grid
                      item
                      container
                      xs={12}
                      md={6}
                      className={classes.formWrapper}
                    >
                      <Grid
                        item
                        xs={12}
                        container
                        className={classes.formWrapper}
                      >
                        <Grid item xs={4}>
                          <div>Date :</div>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            name="date"
                            className={classes.formControlSelect}
                            component={renderDate}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      md={6}
                      className={classes.formWrapper}
                    >
                      <Grid
                        item
                        xs={12}
                        container
                        className={classes.formWrapper}
                      >
                        <Grid item xs={4}>
                          <div>Time :</div>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            name="time"
                            className={classes.formControlSelect}
                            component={renderTime}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      md={6}
                      className={classes.formWrapper}
                    >
                      <Grid
                        item
                        container
                        xs={12}
                        className={classes.formWrapper}
                      >
                        <Grid item xs={4}>
                          <div>Apparel Type :</div>
                        </Grid>
                        <Grid item xs={8}>
                          <Field
                            name="apparel"
                            label="Apparel Type"
                            type="text"
                            className={classes.formControlSelect}
                            component={renderSelect}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <DialogActions>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="outlined" type="submit">
                    Book Appointment
                  </Button>
                </DialogActions>
              </DialogContent>
            </Form>
          )}
        </Formik>
      </Dialog>
      <Dialog
        open={modelOpen}
        disableEscapeKeyDown={true}
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleModalClose();
          }
        }}
      >
        <DialogContent>
          <DialogContentText>
            Thanks {name} for booking appointment. <br />
            Our tailor will contact you soon
          </DialogContentText>
          <DialogActions>
            <Button variant="outlined" onClick={handleModalClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </DialogContent>
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
    "& .MuiInputBase-root": {
      borderRadius: "10px !important",
    },
    "& fieldset": {
      border: "0px !important",
    },
  },
});

export default Slide;
