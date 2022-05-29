import { React, Fragment, useEffect } from "react";
import Slide from "./slide";
import Services from "./services";
import Apparel from "./apparel";
import Loader from "../loader";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  });

  return (
    <Fragment>
      <Loader />
      <Slide />
      <Apparel />
      <Services />
    </Fragment>
  );
};

export default Home;
