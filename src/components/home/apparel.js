import { React } from "react";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "react-responsive";
import { Box, Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import shirtImage from "../../assets/images/apperals/shirtImage.jpg";
import blazerImage from "../../assets/images/apperals/blazerImage.jpg";
import pantImage from "../../assets/images/apperals/pantImage.jpg";
import bowTieImage from "../../assets/images/apperals/bowTiesImage.jpg";
import suitImage from "../../assets/images/apperals/suitImage.jpg";
import waistcoatImage from "../../assets/images/apperals/waistcoatImage.jpg";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const apparelData = [
  { title: "SUITS", image: suitImage, id: "suits" },
  { title: "SHIRTS", image: shirtImage, id: "shirts" },
  { title: "BLAZERS", image: blazerImage, id: "blazers" },
  { title: "VESTS", image: waistcoatImage, id: "vests" },
  { title: "PANTS", image: pantImage, id: "pants" },
  { title: "BOW TIES", image: bowTieImage, id: "bowties" },
];

const Apparel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const classes = useStyles();

  return (
    <Box className={classes.apparelWrapper}>
      {isMobile ? (
        <Slider autoplay={3000}>
          {apparelData.map((item, key) => (
            <div key={key}>
              <div className={classes.apparelMobile}>
                <img
                  src={item.image}
                  style={{ width: "100%", height: "500px" }}
                />
                <div className={classes.textWrapperMobile}>
                  <Typography variant="h3">{item.title}</Typography>
                  <Link to={`/apparels/${item.id}`}>
                    <Button
                      size="large"
                      className={classes.btn}
                      variant="outlined"
                    >
                      VIEW DETAILS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <Grid
          container
          spacing={3}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          {apparelData.map((item, key) => (
            <Grid
              key={key}
              item
              xs={10}
              sm={5}
              md={5}
              lg={4}
              className={classes.apparel}
            >
              <div className={classes.imageWrapper}>
                <img src={item.image} className={classes.apperalImage} />
              </div>
              <div className={classes.textWrapper}>
                <Typography variant="h3">{item.title}</Typography>
                <Link to={`/apparels/${item.id}`}>
                  <Button
                    size="large"
                    className={classes.btn}
                    variant="outlined"
                  >
                    VIEW DETAILS
                  </Button>
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  apparelWrapper: {
    background: "#f6f6f6",
    overflow: "hidden",
    "@media (max-width:500px)": {
      padding: "3rem 3rem",
      margin: "1rem 0",
    },
    "@media (min-width:900px)": {
      margin: "3rem 0",
      padding: "3rem 3rem",
    },
  },
  apparel: {
    cursor: "pointer",
    overflow: "hidden !important",
    position: "relative",
  },
  apparelMobile: {
    position: "relative",
    cursor: "pointer",
  },
  imageWrapper: {
    height: "500px",
    overflow: "hidden",
  },
  apperalImage: {
    width: "100%",
    height: "500px",
    transition: "1.9s all ease-in-out",
    padding: ".5rem",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  textWrapperMobile: {
    position: "absolute",
    left: "10%",
    bottom: "25%",
    "& h3": {
      fontWeight: "bold",
      color: "black",
      marginBottom: "2px",
    },
    "& button": {
      margin: ".5rem 0",
      position: "relative",
      transition: "color 0.25s ease",
      "&:hover": {
        border: "1px solid white",
        color: "white",
        background: "#888888",
      },
      "&::after": {
        position: "absolute",
        content: "",
        top: "0",
        left: "0",
        width: "0",
        height: "100%",
        backgroundColor: "#888888",
        transformOrigin: "left",
        transition: "width 0.25s ease",
        zIndex: "-1",
      },
      "&:hover::after": {
        width: "100%",
      },
    },
  },
  textWrapper: {
    position: "absolute",
    left: "15%",
    bottom: "0",
    "& h3": {
      color: "#888888",
      marginBottom: "10px",
    },
    "& button": {
      margin: "2rem 0",
      position: "relative",
      transition: "color 0.25s ease",
      "&:hover": {
        border: "1px solid white",
        color: "white",
        background: "#888888",
      },
      "&::after": {
        position: "absolute",
        content: "",
        top: "0",
        left: "0",
        width: "0",
        height: "100%",
        backgroundColor: "#888888",
        transformOrigin: "left",
        transition: "width 0.25s ease",
        zIndex: "-1",
      },
      "&:hover::after": {
        width: "100%",
      },
    },
  },
});

export default Apparel;
