import { React, useEffect, useState } from "react";
import { Box, CircularProgress, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Loader = () => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  });

  return (
    <Modal open={open}>
      <Box className={classes.loaderWrapper}>
        <CircularProgress />
      </Box>
    </Modal>
  );
};

const useStyles = makeStyles({
  loaderWrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Loader;
