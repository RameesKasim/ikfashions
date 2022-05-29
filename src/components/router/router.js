import { React, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home";
import Blazers from "../apparels/blazers";
import Shirts from "../apparels/shirts";
import Pants from "../apparels/pants";
import Suits from "../apparels/suits";
import BowTies from "../apparels/bowTies";
import Vests from "../apparels/vests";
import NavBar from "../navBar";
import Footer from "../footer";
import Gallery from "../gallery";

const Router = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/apparels/suits" element={<Suits />} />
          <Route path="/apparels/pants" element={<Pants />} />
          <Route path="/apparels/blazers" element={<Blazers />} />
          <Route path="/apparels/shirts" element={<Shirts />} />
          <Route path="/apparels/bowties" element={<BowTies />} />
          <Route path="/apparels/vests" element={<Vests />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;
