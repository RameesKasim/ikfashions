import { React, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import slimFit from "../../assets/images/apperals/Suits/slimFit.png";
import classicFit from "../../assets/images/apperals/Suits/classicFit.png";
import modernFit from "../../assets/images/apperals/Suits/modernFit.png";
import notchLapel from "../../assets/images/apperals/Suits/notchLapel.png";
import shawlLapel from "../../assets/images/apperals/Suits/shawlLapel.png";
import peakLapel from "../../assets/images/apperals/Suits/peakLapel.png";
import singleBreasted from "../../assets/images/apperals/Suits/singleBreasted.png";
import doubleBreasted from "../../assets/images/apperals/Suits/doubleBreasted.png";
import Loader from "../loader";

let suitData = [
  {
    title: "Slim Fit Suit",
    image: slimFit,
    features: [
      {
        item: "Jacket",
        desc: "Slim fit jacket, contoured to the body, slim but has some room for comfort, fashionably shorter.",
      },
      {
        item: "Lapel",
        desc: "Marginally slimmer lapel to match shoulders and fit. ",
      },
      {
        item: "Pant",
        desc: "Slim fit pants, narrower legs, small leg opening, typically cropped.",
      },
    ],
    desc: "In the same way that a quality workout trims away the excess fat, a quality men’s slim-fit suit trims away the excess fabrics. This type of suit for men gets you a stylish, form-fitting style suit that’s narrow at the chest and waist, but not to the point of constricting blood flow. While slim fit suits and athletic builds seem like an obvious pairing, the truth is that many different male body types can pull off the slim fit look. \n That’s because the slim fit is the type of men’s suit–while true to the body’s natural contours–usually stops short of highlighting definition. The suit jackets typically provide just enough sleekness down without giving away too much of what’s really under there. This is generally more of a casual fashion-style suit, and less suited (pardon the pun) to the boardroom than it is to, say, a day at the races.",
  },
  {
    title: "Classic Fit Suit",
    image: classicFit,
    features: [
      {
        item: "Jacket",
        desc: "Classic, best suits man with a fuller build, covers your rear end, reaches the end of your fingers.",
      },
      { item: "Shoulder", desc: "Comfortable, softer" },
      {
        item: "Lapel",
        desc: "Standard collar design, suitable for all suit jackets",
      },
      { item: "Pant", desc: "Regular fit, classic and comfortable." },
    ],
    desc: "For those who don’t want to overthink the process, a classic fit suit is a way to go. This type of suit for men is comfortable in feel and unfettered in design, this suit style provides breathability without resorting to a loose or unkempt aesthetic–they don’t call it “classic” for nothing. An easy choice if you want something that’s perfect for the office Monday to Friday, but with a suit jacket that can be put with chinos for a smart casual weekend look. It’s safe to say, classic suits will never go out of style.",
  },
  {
    title: "Modern Fit Suit",
    image: modernFit,
    features: [
      { item: "Jacket", desc: "Slim fit, contoured, shorter length." },
      { item: "Shoulder", desc: "Modern, squared-off style." },
      { item: "Lapel", desc: "Slim, presents a modern look." },
      { item: "Pant", desc: "Flat front." },
    ],
    desc: "If you don’t think you can pull off the slim fit suit just yet, but want to exude a heightened sartorial sensibility, by all means, consider the modern fit suit. These types of suits for men hover squarely in the realm between slim fit and a classic fit. It thereby delivers a tight look with breathing room to spare. If you get the material and the accessories right then you can make this work for just about any occasion. Modern suit styles are made to conquer any outing, from casual to dressy.",
  },
  {
    title: "Notch Lapel",
    image: notchLapel,
    features: [
      {
        item: "Key features",
        desc: "Popular style from the 80s where the classic ‘V’ style was a mainstay.",
      },
    ],
    desc: "A mainstay on single-breasted jackets, and arguably the most common type of suit lapel, the notch lapel is defined by a visible indent at the spot where the collar meets the lapel. As the most versatile of lapel styles, the notch lapel is as fitting for the boardroom as it is for the cocktail lounge. Consider it your safest bet if you’re on the fence about which men’s lapel type to choose.",
  },
  {
    title: "Shawl Lapel",
    image: shawlLapel,
    features: [
      {
        item: "Key features",
        desc: "Rounded sides, continuous curve with no hard edges, iconic smoking jacket style.",
      },
    ],
    desc: "One look at a shawl lapel and its smooth, uninterrupted lining, and you’re already picturing an elegant black-tie affair. That’s because this type of suit lapel is more or less exclusively found on formal wear like tuxedos and fancy dinner jackets. Entailed in the shawl lapel’s aesthetic is a timeless sense of class and distinction. These lapels provide a welcoming complement to most men’s formal wear styles.",
  },
  {
    title: "Peak Lapel",
    image: peakLapel,
    features: [
      {
        item: "Key features",
        desc: "Noticeable high peaks directed to shoulders, most popular style from the 16th century.",
      },
    ],
    desc: "A stylish upgrade to the notch lapel, the peak lapel has the top lapel edges facing upward at sharp angles immediately below the collar. It’s most commonly found on double-breasted suits and thereby a frequent player at formal events. While not as immediately extravagant as the shawl lapel, this type of suit lapel nevertheless emanates sophistication and high-end style. Wear it wisely.",
  },
  {
    title: "Single Breasted Suit",
    image: singleBreasted,
    features: [
      { item: "Buttons", desc: "1, 2, or 3 max, 2 being the most common." },
      {
        item: "Lapels",
        desc: "Notch, peak or shawl lapel, notch being the most common",
      },
    ],
    desc: "Among types of men’s suits, the single-breasted suit is the most ubiquitous. The easiest way to spot one is to look for the inclusion of either one, two or three buttons along the seam, or just observe what about 99% of professional men wear to work to every day. By virtue of the single row of buttons, a single-breasted suit usually exudes a narrower and tighter appearance. These suits are most frequently paired with notch lapels. \n  There are firm codes of conduct when it comes to buttoning a single-breasted suit. For a one-button suit, you should button when standing and unbutton when sitting. For a two-button suit, you should button the top button when standing, unbutton it when sitting, and never fasten the lower button. When it’s a rare three-button suit, the top button is optional, the middle button is always fastened (whether you’re sitting or standing), and the lower button is never fastened. Single-breasted can be great looking suits across different men’s body types.",
  },
  {
    title: "Double Breasted Suit",
    image: doubleBreasted,
    features: [
      {
        item: "Buttons",
        desc: "4, 6 or 8 buttons max, 6 being the most common.",
      },
      {
        item: "Lapels",
        desc: "Peak or shawl lapels, the peak being the most common.",
      },
    ],
    desc: "In contrast to the single-breasted type of men’s suit, the double-breasted suit includes additional buttons on either side of the jacket for aesthetic purposes. The total number of buttons ranges from four to eight and typically lands at six. As a result of the extra buttons, the focal point drifts from the seam toward the sides to create the illusion of a wider frame. Whether such optical trickery is beneficial usually boils down to body type, whereas stockier men are probably better off sticking with a single-breasted suit. \n While previously relegated to formal events, the double-breasted suit is catching on among fashion-forward men, especially in Europe. The modernized suit works great with a variety of colours and most common features peak lapels on the jacket. As for the rules of buttoning a double-breasted men’s jacket, they’re quite simple: no matter how many buttons there are, always leave the bottom button unfastened and the top button(s) fastened whether sitting or standing.",
  },
];

const Suits = () => {
  const classes = useStyles();

  const renderParagraph = (paragraph, key) => {
    return (
      <Typography key={key} variant="body2">
        {paragraph}
      </Typography>
    );
  };

  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });

  return (
    <Grid container className={classes.SuitsWrapper}>
      <Loader />
      {suitData.map((item, key) => (
        <Grid
          item
          key={key}
          container
          xs={12}
          lg={6}
          sx={{ padding: "1rem 0", alignContent: "baseline" }}
        >
          <Grid item xs={12}>
            <Typography variant="h5">{`${key + 1}. ${item.title}`}</Typography>
          </Grid>
          <Grid container item xs={12} className={classes.descWRapper}>
            <Grid item xs={6} className={classes.imageWrapper}>
              <img src={item.image} />
            </Grid>
            <Grid item xs={6} className={classes.textWrapper}>
              {item.desc.split("\n").map(renderParagraph, key)}
            </Grid>
          </Grid>
          {item.features.map((feature, key) => (
            <Grid container key={key} columns={14} item xs={14}>
              <Grid
                item
                xs={item.features.length > 1 ? 3 : 4}
                sm={item.features.length > 1 ? 1 : 3}
                lg={item.features.length > 1 ? 3 : 4}
              >
                <Typography variant="body2">
                  <b>{feature.item} </b>
                </Typography>
              </Grid>
              <Grid
                item
                xs={item.features.length > 1 ? 11 : 10}
                sm={item.features.length > 1 ? 13 : 11}
                sm={item.features.length > 1 ? 11 : 10}
              >
                <Typography
                  variant="body2"
                  sx={{ paddingLeft: "20px", textIndent: "-12px" }}
                >
                  <b>: </b>
                  {feature.desc}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles({
  SuitsWrapper: {
    "@media (max-width:500px)": {
      padding: "1rem",
    },
    "@media (min-width:500px)": {
      padding: "1.5rem ",
    },
    "@media (min-width:900px)": {
      padding: "3rem",
    },
    "@media (min-width:1200px)": {
      padding: "4rem",
    },
  },
  descWRapper: {
    padding: "1rem",
    overflow: "hidden",
  },
  imageWrapper: {
    padding: ".5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "& img": {
      // width: "100%",
      "@media (max-width:500px)": {
        maxHeight: "200px",
      },
      "@media (min-width:500px)": {
        height: "290px",
      },
      "@media (min-width:900px)": {
        height: "290px",
      },
      "@media (min-width:1200px)": {
        height: "290px",
      },
    },
  },
  textWrapper: {
    overflow: "scroll",

    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media (max-width:500px)": {
      height: "200px",
    },
    "@media (min-width:500px)": {
      height: "290px",
    },
    "@media (min-width:900px)": {
      height: "290px",
    },
    "@media (min-width:1200px)": {
      height: "290px",
    },
  },
});

export default Suits;
