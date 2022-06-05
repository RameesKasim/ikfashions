import { React, useState } from "react";
import {
  Grid,
  AppBar,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { renderInput } from "../formInput";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { post } from "../utils/apiController";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BusinessIcon from "@mui/icons-material/Business";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  const classes = useStyles();
  const [modelOpen, setModelOpen] = useState(false);
  const [name, setName] = useState(null);

  const suggestionSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string()
      .required("Email  required")
      .email("Enter a valid email address"),
  });

  const handleSubmit = async (values, actions) => {
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("suggestion", values.suggestion);

    await post(`suggestions`, formData)
      .then((res) => {
        setName(values.name);
        setModelOpen(true);
        actions.resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleModalClose = () => {
    setModelOpen(false);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Grid container spacing={3} className={classes.footerWrapper}>
        <Grid item container xs={5} sm={7}>
          <Typography variant="h3">GIVE YOUR SUGGESTIONS</Typography>
          <Formik
            initialValues={{
              name: "",
              email: "",
              suggestion: "",
            }}
            validationSchema={suggestionSchema}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions);
              actions.setSubmitting(true);
            }}
          >
            {(errors, props) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="name"
                      type="text"
                      label="Name"
                      variant="filled"
                      className={classes.formControl}
                      component={renderInput}
                    />
                    <ErrorMessage
                      component="span"
                      className="error"
                      name="name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="email"
                      type="text"
                      label="Email"
                      variant="filled"
                      className={classes.formControl}
                      component={renderInput}
                    />
                    <ErrorMessage
                      component="span"
                      className="error"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="suggestion"
                      type="text"
                      multiline
                      rows="2"
                      fullwidth
                      label="Your Suggestion"
                      variant="filled"
                      className={classes.formControl}
                      component={renderInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="outlined" color="secondary" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={6} sm={5}>
          <iframe
            title="Map"
            className={classes.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7428019909457!2d55.27517411501047!3d25.24558638387372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3fafdf6ac06473c!2zMjXCsDE0JzQ0LjEiTiA1NcKwMTYnMzguNSJF!5e0!3m2!1sen!2sae!4v1653928914447!5m2!1sen!2sae"
          ></iframe>
        </Grid>
      </Grid>
      <Grid container>
        <Paper className={classes.footerPaper}>
          <Grid container columns={12}>
            <Grid item container xs={12} sm={12} md={8}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <span>
                  <BusinessIcon sx={{ paddingRight: ".8rem" }} />
                </span>
                <span>
                  <Typography
                    variant="body2"
                    style={{
                      color: "white",
                      textAlign: "left",
                      padding: "1",
                      margin: "0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    IKFASHONS
                    <br />
                    Wasl Port View 9, <br />
                    Shop 9, Al Mina Road,
                    <br /> Dubai
                  </Typography>
                </span>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                className={classes.centerGrid}
              ></Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={4}
              className={classes.centerGrid}
              sx={{ justifyContent: "right" }}
            >
              <a href="info@ikfashiondesigns.com">
                <Typography
                  variant="body2"
                  style={{
                    color: "white",
                  }}
                >
                  <MailOutlineIcon
                    sx={{ paddingRight: ".5rem" }}
                    fontSize="small"
                  />
                </Typography>
              </a>
              <a href="info@ikfashiondesigns.com">
                <Typography
                  variant="body2"
                  style={{
                    color: "white",
                  }}
                >
                  <FacebookOutlined
                    sx={{ paddingRight: ".5rem" }}
                    fontSize="small"
                  />
                </Typography>
              </a>
              <a href="">
                <Typography
                  variant="body2"
                  style={{
                    color: "white",
                  }}
                >
                  <Instagram sx={{ paddingRight: ".5rem" }} fontSize="small" />
                </Typography>
              </a>
              <a href="">
                <Typography
                  variant="body2"
                  style={{
                    color: "white",
                  }}
                >
                  <Twitter sx={{ paddingRight: ".5rem" }} fontSize="small" />
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
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
            Thanks {name} for for your <br />
            valuable suggestions will contact you soon
          </DialogContentText>
          <DialogActions>
            <Button variant="outlined" onClick={handleModalClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

const useStyles = makeStyles({
  footerWrapper: {
    // backgroundColor: "#acb9be",
    textAlign: "center",
    justifyContent: "center",
    "@media (max-width:500px)": {
      padding: "2rem 0",
    },
    "@media (min-width:500px)": {
      padding: "2rem 3rem",
    },
    "@media (min-width:900px)": {
      padding: "2rem 3rem",
    },
    "@media (min-width:1200px)": {
      padding: "2rem 3rem",
    },
    "& p": {
      padding: " .5rem 0",
      color: "white",
      textDecoration: "none",
    },
  },
  formControl: {
    margin: "10px 0 !important",
    minWidth: "160",
    display: "block",

    "&  .MuiInputBase-root": {
      padding: "0rem",
    },
    "& textarea": {
      padding: "1rem",
    },
    "& .MuiFilledInput-root": {
      maxWidth: "100% !important",
    },
  },
  mapFrame: {
    "@media (max-width:500px)": {
      padding: "0",
      height: "200px",
      width: "90%",
    },
    "@media (min-width:500px)": {
      padding: "1rem ",
      width: "85%",
      height: "250px",
    },
    "@media (min-width:900px)": {
      padding: "2rem ",
      width: "80%",
    },
  },
  footerPaper: {
    backgroundColor: "rgb(6 28 50) !important",
    boxShadow: "  1px 1px 1px 1px rgba(0, 1, 1, .2)  !important",
    margin: "2px 0 !important",
    width: "100%",
    color: "white !important",
    "@media (max-width:500px)": {
      padding: "2rem 3rem 2rem 3rem",
    },
    "@media (min-width:500px)": {
      padding: "2rem 3rem 2rem 3rem",
    },
    "@media (min-width:900px)": {
      padding: "2rem 3rem 2rem 3rem",
    },
    "@media (min-width:1200px)": {
      padding: "2rem 3rem 2rem 3rem",
    },
  },
  centerGrid: {
    display: "flex",
    alignItems: "center",
  },
});

export default Footer;
