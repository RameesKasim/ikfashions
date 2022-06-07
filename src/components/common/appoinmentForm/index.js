import { React, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Grid,
} from "@mui/material";
import {
  renderInput,
  renderPhone,
  renderSelect,
  renderDate,
  renderTime,
} from "../../formInput";
import { makeStyles } from "@mui/styles";
import "yup-phone";
import * as Yup from "yup";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { post } from "../../utils/apiController";

const AppoinmentForm = (props) => {
  const [open, setOpen] = useState(true);
  const [modelOpen, setModelOpen] = useState(false);
  const [name, setName] = useState(null);
  const classes = useStyles();
  const status = props.status;

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

  const handleClose = () => {
    setOpen(false);
    status(false);
  };

  const handleModalClose = () => {
    setModelOpen(false);
  };

  return (
    <div>
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
    </div>
  );
};

const useStyles = makeStyles({
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

export default AppoinmentForm;
