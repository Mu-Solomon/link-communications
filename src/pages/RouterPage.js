import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./about";
import Brand from "./brand";
import Contact from "./contact";
import Special from "./special";

let RouterPage = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/special" element={<Special />} />
        </Routes>
      </Router>
    </div>
  );
};
export default RouterPage;
