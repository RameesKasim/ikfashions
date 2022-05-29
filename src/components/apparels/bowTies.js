import { React, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import batWing from "../../assets/images/apperals/BowTies/batwing.jpg";
import butterfly from "../../assets/images/apperals/BowTies/butterfly.jpg";
import clipOn from "../../assets/images/apperals/BowTies/clipOn.jpg";
import diamondPoint from "../../assets/images/apperals/BowTies/diamondPoint.jpg";
import jumboButterfly from "../../assets/images/apperals/BowTies/jumboButterfly.jpg";
import preTied from "../../assets/images/apperals/BowTies/preTied.jpg";
import selfTied from "../../assets/images/apperals/BowTies/selfTied.jpg";
import slimDiamondPoint from "../../assets/images/apperals/BowTies/slimDiamondPoint.jpg";
import tieingBowTie from "../../assets/images/apperals/BowTies/tieingBowTie.jpg";
import fittingBowTie from "../../assets/images/apperals/BowTies/fittingBowTie.gif";
import Loader from "../loader";

let bowTieTypesData = [
  {
    title: "The Clip-On Bow Ties",
    image: clipOn,
    desc: "The lack of frustration with a clip-on bow tie is why sales continue to be high for this particular product.No matter the level of the user, these bow ties are easy to clip on, and they stay put, even after hours of dancing and mingling. Where they fall short are the available styles and the material. There is also the lack of a personal challenge, but that’s another story.\n The most important thing to remember about clip-on bow ties is that they will always come off-center or adjust in weird ways.Suits bought directly from a store without any fittings are made as a one-size fit, just like bow ties. So even if it never comes off, adjusting it through the night may become more hassle than it’s worth. ",
  },
  {
    title: "The Pre-tied Bow Ties",
    image: preTied,
    desc: "Classing it up a little bit from the clip-on is the pre-tied. The fun thing about this type is that it has the same effortless features as the previous type but is better suited to wear with suits. That means less adjusting and better quality all around. Beyond the obvious advantages of industry adoption, pre-tied bow ties also work well as a backup when time is running low\n That means less adjusting and better quality all around. Beyond the obvious advantages of industry adoption, pre-tied bow ties also work well as a backup when time is running low. They are pretty close in quality to the top-of-the-line self-ties, and from time to time, surprise customers by keeping up with trends.",
  },
  {
    title: "The Self-Tie Bow Ties",
    image: selfTied,
    desc: "And then there is the cream of the crop, the most professional: the self-tie bow tie. This type includes all of the top brand names, fabrics, colors, and even experimental designs. It’s usually referred to as freestyle, meaning you get to tie the bow yourself. This is where the beauty lies. It’s usually referred to as freestyle, meaning you get to tie the bow yourself. This is where the beauty lies.\n On the downside, there are no magic tricks to getting one of these on. So don’t show carelessness when tying it; put some motion and love instead. This style is the preferred purchase of serious suit wearers, with everything else considered a downgrade.  ",
  },
];

let bowTieShapeData = [
  {
    title: "The Butterfly",
    image: butterfly,
    desc: "The standard style is, of course, the butterfly, also known as the thistle shape. It’s the most common choice and is suitable for every occasion. \n It’s great for beginners and those not certain that a bow tie will suit them well.",
  },
  {
    title: "The Batwing",
    image: batWing,
    desc: "They are the smallest of all types. It means that the end will be only slightly larger than the center (the knot).\n Batwing bow ties provide a clean and symmetrical look. Suitable for a slimmer gentleman, even on casual events. ",
  },
  {
    title: "Big Butterfly",
    image: jumboButterfly,
    desc: "Known as Jumbo, the Big Butterfly is a similar yet larger variant of the regular butterfly.\n It’s wearable for larger as well as taller men. They are preferred at formal events or weddings.",
  },
  {
    title: "Diamond Point",
    image: diamondPoint,
    desc: "Both ends on the diamond point bow ties stick beyond the front edge, forming a pointed edge. As a result, the ends are visibly asymmetrical, however still stylish and glamorous.",
  },
  {
    title: "Slim Diamond Point",
    image: slimDiamondPoint,
    desc: "Asymmetrical, just as the regular diamond point. The slim version has a look that is similar to the batwing type. The tips are only slightly larger than the center.",
  },
];

let steps = [
  "Start by putting the tie around your neck with both ends even.",
  "Pull one side longer than the other by about an inch and a half.",
  "Bring the long side to the side of your neck, across the short side.",
  "Continue to pull up and around the short end until you’ve created a loose knot.",
  "Fold the short end into a bow shape by folding it over itself. The fold should be exactly in the middle of the two points of the collar.",
  "Drape the long end over the front, fold, and pass it back through the loop.",
  "Pull halfway through to form the back part of the bow.",
  "Tighten and adjust the knot by pulling on both ends at the same time. Now take a good look in the mirror. How stylish is that!",
];

const BowTies = () => {
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
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Bow Ties Types
        </Typography>
        <Typography variant="body2">
          Often overlooked and underappreciated, a bow tie can be a good
          alternative to a regular tie. Wearing a wrong tie can swoop in and
          take over an otherwise excellent suit or tuxedo. Based on the
          production model of the bow tie, there are three different styles you
          can choose from Clip-on Bow Tie, Pre-Tied Bow Tie, and the Self-Tied
          Bow Tie.
        </Typography>
      </Grid>
      {bowTieTypesData.map((item, key) => (
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
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Bow Tie Shapes
        </Typography>
        <Typography variant="body2">
          Please do your suit a great favor by always coordinating
          colors/patterns long before worrying about the bow tie’s shape.
          Nevertheless, it is normal for every person to find one shape more
          suitable than others. So far, in modern society, men in suits have
          been introduced to the butterfly, batwing, big (jumbo) butterfly,
          diamond point, and the slim diamond point. When looking at one’s
          collar, many aspects need to be taken into consideration to ensure
          comfort, practicality, and style.
        </Typography>
      </Grid>
      {bowTieShapeData.map((item, key) => (
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
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            How to Tie the Bow Tie
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="body2">
            Just like tying a regular tie, it’s a skill that every true
            gentleman must know. Here’s a step-by-step guide on how to tie a bow
            tie:
          </Typography>
          <Typography variant="body2">
            {steps.map((step, key) => (
              <div key={key}>
                {key + 1}.{step}
              </div>
            ))}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.tieingImageWrapper}>
          <img src={tieingBowTie} style={{ width: "90%" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Remember to spend a little time practicing how to tie your bow ties
            before the occasion. There’s nothing worse than being in a rush and
            trying to get a new suit and tie just right at the last minute.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            How to Fit the Bow Tie
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ textAlign: "center" }}>
          <img src={fittingBowTie} className={classes.fittingImage} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="body2">
            The perfect bow does take practice to tie. It might be easy,
            however, it still requires repetition.That said, don’t be tempted to
            use a pre-tied bow for a formal event. People will spot it a mile
            away, and it’s considered a huge fashion faux pas. A fixed-size bow
            tie is useful as it keeps the bow proportional to the size of your
            neck. For the best fit, buy a bow tie that is the same size as your
            shirt collar. Alternatively, you can push the boat out and have a
            tailor to measure your neck.Bow ties look best with well-fitted
            shirts and suits. Bulkier jackets, in combination with a bow tie,
            can look rumpled and untidy. For wing-collared shirts, be sure to
            tuck the collar wings behind the bow tie. This follows formal dress
            rules but is also a practical strategy for keeping your tie firmly
            in place.
          </Typography>
        </Grid>
      </Grid>
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
    "& h2": {
      margin: "1rem 0",
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
  fittingImage: {
    "@media (max-width:900px)": {
      width: "80%",
    },
  },
  tieingImageWrapper: {
    "@media (max-width:900px)": {
      textAlign: "center",
    },
  },
});

export default BowTies;
