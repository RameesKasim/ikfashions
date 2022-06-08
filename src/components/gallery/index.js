import { React } from "react";
import Loader from "../loader";
import { makeStyles } from "@mui/styles";

const Gallery = () => {
  const classes = useStyles();
  return (
    <div className={classes.galleryWrapper}>
      <Loader />
      <div>Gallery</div>
    </div>
  );
};

const useStyles = makeStyles({
  // galleryWrapper: {
  //   minHeight: "90vh",
  // },
});

export default Gallery;
