import { React, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Loader = () => {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  });

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [open]);

  return (
    <div style={{ display: open ? "flex" : "none" }}>
      <Box className={classes.loaderWrapper}>
        <CircularProgress />
      </Box>
    </div>
  );
};

const useStyles = makeStyles({
  loaderWrapper: {
    width: "100vw",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Loader;
