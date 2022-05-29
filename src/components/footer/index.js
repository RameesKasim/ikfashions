import { React } from "react";
import { Grid, AppBar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import GoogleMap from "../map";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Footer = () => {
  const classes = useStyles();
  const center = { lat: 25.235684772269686, lng: 55.30036204674662 };
  const zoom = 12;

  return (
    <AppBar position="sticky" color="primary">
      <Grid container spacing={3} className={classes.footerWrapper}>
        <Grid item container xs={5} sm={7}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h3">IKFASHONS</Typography>
            <Typography variant="body1">Address1</Typography>
            <Typography variant="body1">Address2</Typography>
            <Typography variant="body1">contact</Typography>
            <a href="info@ikfashiondesigns.com">
              <Typography variant="body1">info@ikfashiondesigns.com</Typography>
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={6}></Grid>
        </Grid>
        <Grid item xs={6} sm={5}>
          {/* <LoadScript googleMapsApiKey="AIzaSyAcoXOQh_Ep4GUieGmPIpr6SEN8KW2ROOE">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              center={center}
              zoom={10}
            ></GoogleMap>
          </LoadScript> */}
          <iframe
            className={classes.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5217.162153685334!2d55.29335694361748!3d25.2336452182422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42db20d99d41%3A0xf93035af01a85798!2sThe%20Dubai%20Frame!5e0!3m2!1sen!2sae!4v1653371199163!5m2!1sen!2sae"
          ></iframe>
        </Grid>
      </Grid>
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
  mapFrame: {
    "@media (max-width:500px)": {
      padding: "0",
      height: "200px",
      width: "90%",
    },
    "@media (min-width:500px)": {
      padding: "1rem ",
      width: "85%",
      height: "300px",
    },
    "@media (min-width:900px)": {
      padding: "2rem ",
      width: "80%",
    },
  },
});

export default Footer;
