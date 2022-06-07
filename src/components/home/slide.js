import { React } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import sliderImageOne from "../../assets/images/sliderOne.jpg";
import sliderImageTwo from "../../assets/images/sliderTwo.jpg";

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
          </Box>
        </div>
      </Slider>
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
    top: "40%",
    alignItems: "center",
  },
});

export default Slide;
