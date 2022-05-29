import { React, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import classicFit from "../../assets/images/apperals/Shirts/classicFit.jpg";
import moderFit from "../../assets/images/apperals/Shirts/modernFit.jpg";
import slimFit from "../../assets/images/apperals/Shirts/slimFit.jpg";
import skinnyFit from "../../assets/images/apperals/Shirts/skinnyFit.jpg";
import bandCollar from "../../assets/images/apperals/Shirts/bandCollar.jpg";
import clubCollar from "../../assets/images/apperals/Shirts/clubCollar.jpg";
import cutawayCollar from "../../assets/images/apperals/Shirts/cutawayCollar.jpg";
import longButtonDownCollar from "../../assets/images/apperals/Shirts/longButtonDownCollar.jpg";
import semiSpreadCollar from "../../assets/images/apperals/Shirts/semiSpreadCollar.jpg";
import shortButtonDownCollar from "../../assets/images/apperals/Shirts/shortButtonDownCollar.jpg";
import spreadCollar from "../../assets/images/apperals/Shirts/spreadCollar.jpg";
import straightPointCollar from "../../assets/images/apperals/Shirts/straightPointCollar.jpg";
import wingtipCollar from "../../assets/images/apperals/Shirts/wingtipCollar.jpg";
import Loader from "../loader";

let shirTFItsData = [
  {
    title: "Classic Fit Shirts",
    image: classicFit,
    desc: "The classic fit dress shirt is the type that has a timeless presence. It is, indeed, one of the most traditional dress shirt styles on the market.\nIt is ultimately a shirt with a bit of a boxier shape to it, slightly looser around the arms and body.\nThe classic fit allows the wearer to move about freely, without feeling or looking as restricted as they might be when wearing a more streamlined shirt.\nGranted, this style can be a bit much for thinner frames. However, it does work well for those needing a bit more room around their midsection.\nAlthough this style is still the first choice for many, there has been a recent shift in how individuals, particularly younger men, like their dress shirts to fit.\nBecause it has become more acceptable for men to wear dress shirts without a jacket overtop, the need for a more fitted look has become widely popular. Thus, introducing our next style.",
  },
  {
    title: "Modern-Fit Shirts",
    image: moderFit,
    desc: "A modern-fit dress shirt is a style that sits somewhere in the middle of the classic and slim fit. It provides an in-between look of tight and roomy.\nThis look ultimately keeps the comfort of the classic fit but brings in the more tapered look of the slim fit option mentioned above.\nThe modern-fit option allows the ability to still stylishly wear it without a jacket while also ensuring it doesn’t look like the shirt is billowing out where it shouldn’t be.",
  },
  {
    title: "Slim Fit Shirts",
    image: slimFit,
    desc: "Slim-fit dress shirts are arguably the most popular fit for a dress shirt nowadays.\nThat’s because they provide a much more tailored look than classic and modern shirts.\nThe style of this shirt is considered trendier as it provides a sleeker, more distinguished look. It is mainly a result of the limited need for an excess amount of fabric.\nConsidering this fit is on the slimmer end of dress shirts, this style would be most appropriate for individuals whose physiques would fall on the slimmer side, too.",
  },
  {
    title: "Skinny Fit Shirts",
    image: skinnyFit,
    desc: "The skinny-fit dress shirt style provides a very slim cut around the chest and shoulders. As a result of this, it is a trendy choice amongst younger or thinner men.\n Similar to the slim fit option, this one even more so perpetuates the idea that you’ll need to be rather thin to feel comfortable while wearing it.",
  },
];

let collarStyleData = [
  {
    title: "Straight Point Collar",
    image: straightPointCollar,
    desc: "A straight point collar is the most classic collar style. With its elongated collar length, this option is said to cause a slimming effect. It is particularly useful for individuals with rounder faces or shorter necks.",
  },
  {
    title: "Semi-Spread Collar",
    image: semiSpreadCollar,
    desc: "The semi-spread collar is similar to the previous style but has a more casual look to it.\n This option is less stiff and is said to be suitable for tall men with longer necks.",
  },
  {
    title: "The Cutaway Colla",
    image: cutawayCollar,
    desc: "The cutaway collar is one of the slightly shorter collars. This style includes a reduced collar length and wider ends\nIt’s not necessarily your best option for tie-wearing but rather provides a more casual look.",
  },
  {
    title: "The Spread Collar",
    image: spreadCollar,
    desc: "The spread collar is another casual option, but with a more modern and elegant look. This style is characterized by having a far more unified length and width than those previously mentioned.\nThe spread collar has a more proportioned point length. Therefore, it makes it a universal style that is commonly chosen by men with elongated faces.",
  },
  {
    title: "The Long Button-Down Collar",
    image: longButtonDownCollar,
    desc: "The long button-down collar is exactly what it sounds like and thus provides us with the least formal look so far.\nThis style varies from the ones previously mentioned, as it has buttons at the bottom of the collar points that connect them to the shirt itself.\nThis style is popular amongst younger men and individuals who are going for a less formal business look overall. However, they are still able to maintain the classy appearance they desire.",
  },
  {
    title: "The Short Button-Down Collar",
    image: shortButtonDownCollar,
    desc: "The short button-down collar is very similar to the long button-down collar but simply smaller.\nThese two styles are very similar; however, the shortened length of this collar provides an even more youthful and casual look.",
  },
  {
    title: "The Club Collar",
    image: clubCollar,
    desc: "The club collar could be considered the most elite style, as it was initially designed for school uniforms. This collar was created to establish a separate look for students to wear.\nThis way, individuals could still look well put together in their uniforms while also keeping comfortable and practical.\nThe club collar is characterized as being versatile due to its shortened length while still maintaining the look of professionalism.",
  },
  {
    title: "The Band Collar",
    image: bandCollar,
    desc: "The band collar is the most casual style. It is, quite simply, a band that sits about 3 centimeters from the base of a dress shirt.\nThis collar style includes a single button that is done up just above the collar bone.\nAlthough this style would still undeniably be a classy option, it does, however, not allow for the use of a tie.",
  },
  {
    title: "The Wingtip Collar",
    image: wingtipCollar,
    desc: "The wingtip collar may be the last collar style, but it is certainly not the least.Also referred to as the tuxedo style shirt, this is the most formal option. In fact, this style was created with the single purpose of being worn with a bow tie.\nThis collar is likely the easiest to differentiate from the rest as it has very small points that are only placed in the front.This style is mainly worn with a tuxedo or tailcoat and therefore created not for a particular shape or individual but rather a specific look.",
  },
];

const Shirts = () => {
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
    <Grid container className={classes.shirtsWrapper}>
      <Loader />
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h2"> Shirt Fit Types</Typography>
        <Typography variant="body2">
          There is certainly an upside to having many different options when it
          comes to the dress shirt cut.
        </Typography>
        <Typography variant="body2">
          However, this also means that the idea of choosing which one works
          best for you can be somewhat of an overwhelming task.
        </Typography>
      </Grid>
      {shirTFItsData.map((item, key) => (
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
            <Grid item xs={6} sm={5} className={classes.imageWrapper}>
              <img src={item.image} className={classes.shirtImage} />
            </Grid>
            <Grid item xs={6} className={classes.textWrapper}>
              {item.desc.split("\n").map(renderParagraph, key)}
            </Grid>
          </Grid>
        </Grid>
      ))}
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h2"> Shirt Collar Styles</Typography>
        <Typography variant="body2">
          The collar is the piece of fabric that surrounds the neck of the
          shirt. Its job is to frame the face of the wearer properly.
        </Typography>
        <Typography variant="body2">
          Because just as every shirt has a unique fit that works best for
          different individuals, the collars are just as important.
        </Typography>
        <Typography variant="body2">
          When looking at one’s collar, many aspects need to be taken into
          consideration to ensure comfort, practicality, and style.
        </Typography>
      </Grid>
      {collarStyleData.map((item, key) => (
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
              <img src={item.image} className={classes.collarImage} />
            </Grid>
            <Grid item xs={6} className={classes.textWrapper}>
              {item.desc.split("\n").map(renderParagraph, key)}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles({
  shirtsWrapper: {
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
    alignItems: "baseline",
    justifyContent: "center",
    textAlign: "center",
  },
  shirtImage: {
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
  collarImage: {
    "@media (max-width:500px)": {
      width: "99%",
    },
    "@media (min-width:500px)": {
      height: "250px",
    },
    "@media (min-width:900px)": {
      height: "250px",
    },
    "@media (min-width:1200px)": {
      height: "250px",
    },
  },
  textWrapper: {
    overflow: "scroll",
    display: "flex",
    flexDirection: "column !important",
    alignContent: "baseline",

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

export default Shirts;
