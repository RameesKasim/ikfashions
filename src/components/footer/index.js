import { React } from "react";
import { Grid, AppBar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="primary">
      <Grid container spacing={3} className={classes.footerWrapper}>
        <Grid item container xs={5} sm={7}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h3">IKFASHONS</Typography>
            <Typography variant="h3">Wasl Port View 9, Shop 9</Typography>
            <Typography variant="h3"> Al Mina Road, Dubai</Typography>
            <Typography variant="h3">Dubai</Typography>
            <a href="info@ikfashiondesigns.com">
              <Typography variant="body1">info@ikfashiondesigns.com</Typography>
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={6}></Grid>
        </Grid>
        <Grid item xs={6} sm={5}>
          <iframe
            className={classes.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7428019909457!2d55.27517411501047!3d25.24558638387372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb3fafdf6ac06473c!2zMjXCsDE0JzQ0LjEiTiA1NcKwMTYnMzguNSJF!5e0!3m2!1sen!2sae!4v1653928914447!5m2!1sen!2sae"
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
