import { React, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import vestvsWaistCoat from "../../assets/images/apperals/Vests/vest-vs-waistcoat.jpg";
import singleBreasted from "../../assets/images/apperals/Vests/singleBreasted.png";
import doubleBreasted from "../../assets/images/apperals/Vests/doubleBreasted.png";
import vestFitting from "../../assets/images/apperals/Vests/vestFitting.jpg";
import doubleBreastedVestFront from "../../assets/images/apperals/Vests/doubleBreastedVestFront.jpg";
import singleBreastedVestFront from "../../assets/images/apperals/Vests/singleBreastedVestFront.jpg";
import fitVestBack from "../../assets/images/apperals/Vests/fitVestBack.jpg";
import Loader from "../loader";

let vestData = [
  {
    title: "Single-Breasted Vest",
    image: singleBreasted,
    desc: "The single-breasted vest is a far more common variant. It usually comes in between 3 to 6 buttons. The most traditional choice is the five-button single-breasted vest.\nYour vest should have at least one button more than your suit. Thus, if you’re wearing a three-button suit, your vest should have at least four buttons.",
  },
  {
    title: "Double-Breasted Vest",
    image: doubleBreasted,
    desc: "The double-breasted vest is less common but more formal than the single-breasted. Most double-breasted vests have 4 to 8 buttons, the most common being six. \nDouble-breasted vests should always be fully buttoned. Usually, they feature peaked lapels, making them more sophisticated and stylish.",
  },
];

const Vests = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });

  const classes = useStyles();

  const renderParagraph = (paragraph, key) => {
    return (
      <Typography key={key} variant="body2">
        {paragraph}
      </Typography>
    );
  };

  return (
    <Grid container className={classes.vestssWrapper}>
      <Loader />
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Vest vs. Waistcoat
        </Typography>
      </Grid>
      <Grid item container xs={12} lg={6} sx={{ alignContent: "center" }}>
        <Typography variant="body2">
          A vest is any material you wear on your torso over another article of
          clothing and is sleeveless. Technically, a vest can be very
          informal.It can be made of any material. It can be knit, such as a
          sweater vest. In fact, it can even be worn as outerwear in cool
          weather.
        </Typography>
        <Typography variant="body2">
          A waistcoat, on the other hand, must be worn with a jacket and a tie.
          It is a dressier style of vest. It’s usually cut lower in the front;
          it may only have a few buttons, while a vest can button much of the
          way up to your torso.When referring to either of these articles of
          men’s clothing, you can call a waistcoat a vest, but not the other way
          around. All waistcoats are types of vests, but not all vests are
          waistcoats.
        </Typography>
      </Grid>
      <Grid item container xs={12} lg={6} sx={{ justifyContent: "center" }}>
        <img src={vestvsWaistCoat} className={classes.headImage} />
      </Grid>
      {vestData.map((item, key) => (
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
        </Grid>
      ))}
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          How to Fit the Suit Vest
        </Typography>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={12} md={6} lg={7} className={classes.fitTextWrapper}>
          <Typography variant="body2">
            As with all clothes, the proper fit is important for two reasons:
            comfort and appearance. A lot of men claim they hate wearing suits
            because they feel uncomfortable.What they don’t realize is the
            nature of the clothes doesn’t cause this discomfort. It’s because
            the suit fits badly. A suit vest, and indeed your entire suit,
            should feel so comfortable you could almost forget you’re wearing
            it.
          </Typography>
          <Typography variant="body2">
            A well-fitting outfit will always make a good impression. You’ll
            look organized and trim, and you’ll come across as professional. On
            the other hand, if your suit is too big, you will look disheveled
            and possibly older than you really are. Too tight, however, and you
            will look as though you’ve gained weight or have borrowed someone
            else’s clothes.
          </Typography>
          <span className={classes.hidden}>
            <Typography variant="h5">Suit Vest Length</Typography>
            <Typography variant="body2">
              The length of your suit vest is crucial. It needs to cover your
              whole waist and fall past your pant line. In addition, it needs to
              fall around 1″ below the waistline of your pants. At no time
              should your dress shirt poke out from underneath your suit vest.
              If this happens, your vest is most likely too small for you. You
              can fix this issue by moving up a size, even if you need a tailor
              to adjust the shoulders and armholes.A suit vest will often be
              longer in the front than in the back, forming points on either
              side of the opening.
            </Typography>
          </span>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          className={classes.vestFitImageWrapper}
        >
          <img src={vestFitting} style={{ width: "90%" }} />
        </Grid>
      </Grid>
      <Grid item md={12}>
        <span className={classes.show}>
          <Typography variant="h5">Suit Vest Length</Typography>
          <Typography variant="body2">
            The length of your suit vest is crucial. It needs to cover your
            whole waist and fall past your pant line. In addition, it needs to
            fall around 1″ below the waistline of your pants. At no time should
            your dress shirt poke out from underneath your suit vest. If this
            happens, your vest is most likely too small for you. You can fix
            this issue by moving up a size, even if you need a tailor to adjust
            the shoulders and armholes.A suit vest will often be longer in the
            front than in the back, forming points on either side of the
            opening.
          </Typography>
        </span>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={{ padding: "1rem 0", alignContent: "baseline" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={7}
          className={classes.fitText}
          sx={{ justifyContent: "space-evenly" }}
        >
          <Typography variant="h5">The Front Fit</Typography>
          <Typography variant="body2">
            A suit vest should be slim cut and tapered slightly at the waist.
            This creates a very tailored look, which is what you want from your
            vest. If it just hangs in a straight line with your torso, you’ll
            look baggy and unkempt. The shoulders should be snug and lie flat
            against your body. There shouldn’t be any gapping of the shoulder
            line.
          </Typography>
          <Typography variant="body2">
            The armholes should be high up against your underarms; this will
            ensure a better fit against your body. If there is any straining or
            pulling of the vest buttons, the vest is too small and needs some
            alterations. The neckline of your vest creates a V-shape and rises
            relatively high against your chest. The shape of the V should be
            narrow enough so that others can see a hint of your vest when you
            button your suit jacket. Your vest should have at least one more
            button than your suit jacket. And remember to leave your bottom
            button undone.
          </Typography>
          <Typography variant="body2">
            Generally, most suit vests will be single-breasted. However, in
            those rare instances when you are wearing a double-breasted suit
            vest, it will likely have lapels.Most commonly, you’ll find peak or
            shawl lapels on double-breasted vests. But, again, this is a
            circumstance where you should keep your jacket on at all times
            because it will be a more formal occasion.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={5}>
          <img src={singleBreastedVestFront} style={{ width: "90%" }} />
          <img src={doubleBreastedVestFront} style={{ width: "90%" }} />
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid
          item
          xs={12}
          md={6}
          lg={7}
          className={classes.fitText}
          sx={{ justifyContent: "space-evenly" }}
        >
          <Typography variant="h5">The Back Fit</Typography>
          <Typography variant="body2">
            Suit vests almost always have a buckle in the back to adjust the
            waist of the vest. This can help make the vest slimmer or give you
            some breathing room as needed.
          </Typography>
          <Typography variant="body2">
            Just don’t loosen the buckle so much that your vest looks
            baggy.There should be no gaps around the armholes or the shoulder
            straps, even in the back. A good fit will sit smoothly against the
            body.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <img src={fitVestBack} style={{ width: "90%" }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  vestssWrapper: {
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
  headImage: {
    "@media (max-width:900px)": {
      width: "80%",
    },
    "@media (min-width:900px)": {
      width: "70%",
    },
  },
  imageWrapper: {
    display: "flex",
    padding: ".5rem",
    alignItems: "baseline",
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
  vestFitImageWrapper: {
    "@media (max-width:900px)": {
      textAlign: "center",
    },
    "@media (min-width:500px) and (max-width:900px)": {
      height: "300px",
    },
  },
  fitTextWrapper: {
    "@media (min-width:500px) and (max-width:900px)": {
      height: "300px",
      overflow: "scroll",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media (min-width:900px)": {
      // alignItems: "center",
      display: "flex",
      flexDirection: "column !important",
    },
  },
  fitImageWrapper: {
    display: "flex",
    width: "90vw",
  },
  hidden: {
    "@media (min-width:500px) and (max-width:900px)": {
      display: "none",
    },
  },
  show: {
    "@media (max-width:500px)": {
      display: "none",
    },
    "@media (min-width:900px)": {
      display: "none",
    },
  },
  fitText: {
    "@media (min-width:900px)": {
      // alignItems: "center",
      display: "flex",
      flexDirection: "column !important",
    },
  },
});

export default Vests;
