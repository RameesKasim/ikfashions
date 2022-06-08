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
import {
  FacebookOutlined,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";

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
    <AppBar position="sticky" sx={{ backgroundColor: "rgb(0, 30, 60)" }}>
      <Grid container spacing={3} className={classes.footerWrapper}>
        <Grid item container xs={5} sm={7}>
          <Typography variant="h6" sx={{ width: "100%" }}>
            GIVE YOUR SUGGESTIONS
          </Typography>
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
              <Form className={classes.formWrapper}>
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
                      fullWidth
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
        <Grid item xs={6} sm={5} sx={{ alignItems: "center" }}>
          <iframe
            className={classes.mapFrame}
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473.64614780525767!2d55.276382624561954!3d25.24545973685825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43d0308dfb03%3A0xff648f06cb9128e2!2sWasl%20Port%20Views%20Building%209!5e0!3m2!1sen!2sae!4v1654505627397!5m2!1sen!2sae"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Paper className={classes.footerPaper}>
          <Grid container columns={12}>
            <Grid item container xs={12} sm={12} md={8}>
              <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
                <span>
                  <BusinessIcon sx={{ paddingRight: ".8rem" }} />
                </span>
                <span>
                  <Typography
                    variant="h6"
                    style={{
                      color: "white",
                      textAlign: "left",
                      padding: "1",
                      margin: "0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    IKFASHIONS
                    <br />
                    Wasl Port View 9, <br />
                    Shop 9, Al Mina Road,
                    <br /> Dubai
                  </Typography>
                </span>
              </Grid>
              <Grid item xs={6} className={classes.centerGrid} display="flex">
                <span>
                  <a href="">
                    <Typography variant="body2" className={classes.icon}>
                      <Phone sx={{ paddingRight: ".5rem" }} fontSize="small" />
                      {" +971 52 6476647 "}
                    </Typography>
                  </a>
                  <a href="mailto:info@ikfashiondesigns.com">
                    <Typography variant="body2" className={classes.icon}>
                      <MailOutlineIcon
                        sx={{ paddingRight: ".5rem" }}
                        fontSize="small"
                      />
                      info@ikfashiondesigns.com
                    </Typography>
                  </a>
                </span>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={4}
              className={classes.centerGrid}
              display="flex"
              flexDirection="column"
            >
              <span className={classes.centerGrid}>
                <a href="">
                  <Typography variant="h6" className={classes.icon}>
                    <FacebookOutlined
                      sx={{ paddingRight: ".5rem" }}
                      fontSize="small"
                    />
                  </Typography>
                </a>
                <a href="">
                  <Typography variant="h6" className={classes.icon}>
                    <Instagram
                      sx={{ paddingRight: ".5rem" }}
                      fontSize="small"
                    />
                  </Typography>
                </a>
                <a href="">
                  <Typography variant="h6" className={classes.icon}>
                    <Twitter sx={{ paddingRight: ".5rem" }} fontSize="small" />
                  </Typography>
                </a>
              </span>
              <span className={classes.subText}>
                Get connected with us on social networks
              </span>
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
      color: "white !important",
      margin: ".5rem 0",
    },
    "& textarea": {
      padding: "1rem",
      margin: "1rem 0 ",
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
    backgroundColor: "rgb(44 95 146) !important",
    boxShadow: "  1px 1px 1px 1px rgba(0, 1, 1, .2)  !important",
    margin: "2px 0 !important",
    width: "100%",
    color: "white !important",
    "@media (max-width:500px)": {
      padding: "2rem ",
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
    justifyContent: "center",
    "@media (max-width:500px)": {
      marginTop: ".4rem !important",
    },
  },
  formWrapper: {
    "@media (max-width:500px)": {
      overflow: "scroll",
      height: "200px",
    },
  },
  icon: {
    padding: "0",
    margin: "0 .5rem",
    color: "white",
    display: "flex",
    alignItems: "center",
  },
  subText: {
    textAlign: "center",
    "@media (max-width:500px)": {
      fontSize: ".6rem",
    },
    "@media (min-width:500px)": {
      fontSize: ".8rem",
    },
  },
});

export default Footer;
