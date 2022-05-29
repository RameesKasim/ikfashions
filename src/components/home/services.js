import { React } from "react";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "react-responsive";
import { Box, Grid, Paper, Typography } from "@mui/material";
import imageOne from "../../assets/images/gridImageOne.jpg";
import imageTwo from "../../assets/images/gridImageTwo.jpg";
import imageThree from "../../assets/images/gridImageThree.jpg";
import imageFour from "../../assets/images/gridImageFour.jpg";
import imageFive from "../../assets/images/gridImageFive.jpg";
import imageSix from "../../assets/images/gridImageSix.jpg";
import imageSeven from "../../assets/images/gridImageSeven.jpg";
import imageEight from "../../assets/images/gridImageEight.jpg";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

let serviceData = [
  { title: "Lengthening Services", image: imageOne },
  { title: "Body Measurements", image: imageTwo },
  { title: "Restoration", image: imageThree },
  { title: "Сutting-out", image: imageFour },
  { title: "Resize", image: imageFive },
  { title: "Repair", image: imageSix },
  { title: "Shortening Services", image: imageSeven },
  { title: "Let Out Services", image: imageEight },
];

const Services = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const classes = useStyles();

  return (
    <Box className={classes.serviceWrapper}>
      <Box sx={{ m: 1 }}>
        <Typography variant="h2" className="service-header">
          {" "}
          Our Craftsmanship
        </Typography>
        <Typography variant="body1">
          Our professionally trained and experienced tailors carve the outfit
          that is best fit for the body type and physique.
        </Typography>
      </Box>
      {isMobile ? (
        <Slider autoplay={3000}>
          {serviceData.map((item, key) => (
            <div key={key}>
              <img
                src={item.image}
                style={{ width: "80%", aspectRatio: "1/1" }}
              />
              <Typography variant="h4">{item.title}</Typography>
            </div>
          ))}
        </Slider>
      ) : (
        <Grid container spacing={2}>
          {serviceData.map((item, key) => (
            <Grid
              item
              key={key}
              sm={6}
              md={6}
              lg={3}
              className={classes.service}
            >
              <div className={classes.imageWrapper}>
                <img src={item.image} className={classes.serviceImage} />
              </div>
              <Typography variant="h4">{item.title}</Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  serviceWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "@media (max-width:500px)": {
      margin: "3rem 3rem",
    },
    "@media (min-width:500px)": {
      margin: "3rem 6rem",
    },
  },
  service: {
    cursor: "pointer",
    // maxHeight: "18rem",
    overflow: "hidden !important",
    "&:hover": {
      "& img": {
        transform: "scale(1.1)",
      },
      color: "#888888",
    },
  },
  serviceImage: {
    width: "80%",
    transition: "0.5s all ease-in-out",
    aspectRatio: "1/1",
  },
  imageWrapper: {
    overflow: "hidden",
    "@media (min-width:500px)": {
      // height: "200px",
      padding: "2rem 3rem",
    },
    "@media (min-width:900px)": {
      padding: "2rem 3rem",
    },
    "@media (min-width:1200px)": {
      padding: "2rem 3rem",
    },
  },
});

export default Services;
