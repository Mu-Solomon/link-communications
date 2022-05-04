import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./Home";
import About from "./about";
import Brand from "./brand";
import Contact from "./contact";
import Special from "./special";
import Details from "./details";
import Slider from "react-slick";

let RouterPage = () => {
  return (
    <div>
      {/* <div class="loader_bg">
        <div class="loader">
          <img src="assets/images/loading.gif" alt="" />
        </div>
      </div> */}
      <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/special" element={<Special />} />
            <Route path="/details" element={<Details />} />
          </Routes>
      </Router>
    </div>
  );
};
export default RouterPage;
