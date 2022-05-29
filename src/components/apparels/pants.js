import { React, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import pleatedFront from "../../assets/images/apperals/Pants/pleatedFront.png";
import flatFront from "../../assets/images/apperals/Pants/flatFront.png";
import cuffed from "../../assets/images/apperals/Pants/cuffed.png";
import Loader from "../loader";

let PantData = [
  {
    title: "Flat Front Pants",
    image: flatFront,
    features: [
      {
        item: "Key features",
        desc: "Modern streamlined suit alternative, less comfortable.",
      },
    ],
    desc: "A standard among men’s pants, flat front pants are pretty much what they sound like. That is, the fabric lies flat at the front and delivers a slim, tight fit. You can wear flat-front pants a little lower on the waistline to rock a stylish, slender silhouette. Naturally, if you’re packing some extra weight in the stomach area, then you might consider going with a roomier pant style to better conceal that hard-earned beer belly.",
  },
  {
    title: "Pleated Pants",
    image: pleatedFront,
    desc: "Pleats are creases on both sides at the front of the pants, which result from the material being folded and sewed before it’s attached to the waistband. Consequently, this suit style is looser in the middle and best worn slightly above the hip to avoid billowing out at the thighs. While pleated pants are generally more comfortable to wear, especially for larger me, you’ll still want a pair of modern suit pants that gives a close fit and relatively snug look.",
    features: [
      {
        item: "Key features",
        desc: "When you sit, your thighs naturally widen, and the pleats adapt by spreading the seam.",
      },
    ],
  },
  {
    title: "Cuffed Pants",
    image: cuffed,
    desc: "When it comes to the suit trouser styles, they’ll either be hemmed or cuffed at the bottom. Hemmed means the bottom fabric is turned up on the inside, while cuffed means the bottom fabric is turned up on the outside. Both styles are popular, though you’re more likely to see hemmed than cuffed. The general rule of thumb is that flat-front pants should be hemmed and pleated pants should be cuffed, but it’s a loose rule at best. That said, pleated pants should normally include cuffs in order to add weight, and smooth out the fabric.",
  },
];

const Pants = () => {
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
    <Grid container className={classes.pantsWrapper}>
      <Loader/>
      {PantData.map((item, key) => (
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
          {item.features &&
            item.features.map((feature, key) => (
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
  pantsWrapper: {
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
    display: "flex",
    padding: ".5rem",
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

export default Pants;
