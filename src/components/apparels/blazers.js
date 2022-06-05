import { React, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import unstructured from "../../assets/images/apperals/Blazers/unstructured.png";
import patchPocket from "../../assets/images/apperals/Blazers/patchPocket.png";
import singleVent from "../../assets/images/apperals/Blazers/singleVent.png";
import sideVent from "../../assets/images/apperals/Blazers/sideVent.png";
import noVent from "../../assets/images/apperals/Blazers/noVent.png";
import Loader from "../loader";

let blazerData = [
  {
    title: "Unstructured Blazers",
    image: unstructured,
    features: [
      {
        item: "Key features",
        desc: "No interior padding, better for casual and semi-formal events.",
      },
    ],
    desc: "Frequently composed of a single layer of material, the unstructured blazer makes for ideal spring or summertime wear because it takes the weight off the body. That said, men should proceed with caution because there can be a fine line between casual suits for men and downright unkempt. The idea is to find an unstructured blazer that captures your sartorial style and fun-loving spirit in equal measure. Keep it loose, but not too loose. \nSome men think interior padding and stylish blazers are invariably part of the same package. However, the men’s unstructured blazer is here to change such preconceived notions. By removing the interior padding, the unstructured blazer breaks free from conformity and constraint to deliver a soft fit and somewhat laid back aesthetic.",
  },
  {
    title: "Patch Pocket Blazer",
    image: patchPocket,

    desc: "A patch pocket is one that’s been made from a separate piece of cloth and then sewn on to the outside of your sports jacket or blazer. Like the unstructured blazer, patch pockets are a great way to join casual style with personal flair. A quick pointer: if you’re going with patch pockets, it should be all the exterior pockets that are patched and not just one or two. Also, make sure everything matches up in terms of colour or pattern. These modern, casual blazers for men can provide the perfect complement to an understated yet fashionable autumn or winter outfit.",
  },
  {
    title: "Single Vent Blazer",
    image: singleVent,
    desc: "The vent is that small slit you notice on the backside of a blazer or jacket. When the vent is cut up the middle, it’s known as a centre vent. With a centre vent, the suit jacket tends to part slightly when your hands are in your pockets, sometimes exposing your back. Otherwise, the centre vent should remain closed when you’re wearing the jacket. If the vent is parted when you’re hands aren’t in your pockets, it means your jacket is the wrong fit.",
  },
  {
    title: "Side Vent Blazer",
    image: sideVent,
    desc: "As the name implies, side vents cut the slit on both sides to keep the jacket from parting or bunching when you put your hands in your pockets or take a seat. The wide middle flap not only keeps your back covered but prevents creasing and retains a slimmer appearance.",
  },
  {
    title: "No Vent Blazer",
    image: noVent,
    desc: "Popular in Italy, the no vent style suit offers elegant style and a custom fit. However, without any vents, the jacket itself is more prone to creasing or bunching when you put your hands in your pockets or sit down. This style is best suited to tuxedoes.",
  },
];

const Blazers = () => {
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
    <Grid container className={classes.blazersWrapper}>
      <Loader />
      {blazerData.map((item, key) => (
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
              <img alt={item.title} src={item.image} />
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
  blazersWrapper: {
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

export default Blazers;
