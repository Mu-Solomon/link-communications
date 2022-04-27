import React from "react";
import { Link } from "react-router-dom";

let Contact = () => {
  return (
    <React.Fragment>
      <header>
        {/*       <!-- header inner -->
         */}{" "}
        <div class="header">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo">
                      <a href="index.html">
                        <img src="assets/images/logo.png" alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div class="menu-area">
                  <div class="limit-box">
                    <nav class="main-menu">
                      <ul class="menu-area-main">
                        <li class="active">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/brand">Brand</Link>
                        </li>
                        <li>
                          <Link to="/special">Specials</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact Us</Link>
                        </li>
                        <li class="last">
                          <a href="#">
                            <img
                              src="assets/images/search_icon.png"
                              alt="assets/icon"
                            />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="col-md-6 offset-md-6">
                <div class="location_icon_bottum">
                  <ul>
                    <li>
                      <img src="assets/icon/call.png" />
                      +256 757 837184
                    </li>
                    <li>
                      <img src="assets/icon/email.png" />
                      mutsbrian@gmail.com
                    </li>
                    <li>
                      <img src="assets/icon/loc.png" />
                      Location
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*       <!-- end header inner -->
         */}{" "}
      </header>
      {/*     <!-- end header -->
       */}{" "}
      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*     <!-- contact -->
       */}{" "}
      <div class="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <form class="main_form">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="form-control"
                      placeholder="Your name"
                      type="text"
                      name="Your Name"
                    />
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="form-control"
                      placeholder="Email"
                      type="text"
                      name="Email"
                    />
                  </div>
                  <div class=" col-md-12">
                    <input
                      class="form-control"
                      placeholder="Phone"
                      type="text"
                      name="Phone"
                    />
                  </div>
                  <div class="col-md-12">
                    <textarea class="textarea" placeholder="Message"></textarea>
                  </div>
                  <div class=" col-md-12">
                    <button class="send">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*     <!-- end contact -->
       */}
      {/*     <!-- footer -->
       */}{" "}
      <footer>
        <div id="contact" class="footer">
          <div class="container">
            <div class="row pdn-top-30">
              <div class="col-md-12 ">
                <div class="footer-box">
                  <div class="headinga">
                    <h3>Address</h3>
                    <span>
                      Healing Center, 176 W Streetname,New York, NY 10014, US
                    </span>
                    <p>
                      (+71) 8522369417
                      <br />
                      demo@gmail.com
                    </p>
                  </div>
                  <ul class="location_icon">
                    <li>
                      {" "}
                      <a href="#">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="menu-bottom">
                    <ul class="link">
                      <li>
                        {" "}
                        <a href="#">Home</a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">About</a>
                      </li>

                      <li>
                        {" "}
                        <a href="#">Brand </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">Specials </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#"> Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
              <p>
                © 2019 All Rights Reserved. Design By
                <a href="https://html.design/"> Free Html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Contact;
