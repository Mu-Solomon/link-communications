import React from "react";
import { Link } from "react-router-dom";

let Special = () => {
  return (
    <React.Fragment>
      <header>
        {/*         <!-- header inner -->
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
                            <img src="assets/images/search_icon.png" alt="icon" />
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
                      (+71)9876543109
                    </li>
                    <li>
                      <img src="assets/icon/email.png" />
                      demo@gmail.com
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
        {/*         <!-- end header inner -->
         */}{" "}
      </header>
      {/*     <!-- end header -->
       */}{" "}
      <section class="slider_section">
        <div
          id="myCarousel"
          class="carousel slide banner-main"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="first-slide"
                src="assets/images/banner.jpg"
                alt="First slide"
              />
              <div class="container">
                <div class="carousel-caption relative">
                  <span>All New Phones </span>
                  <h1>up to 25% Flat Sale</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content
                    <br /> of a page when looking at its layout. The point of
                    using Lorem Ipsum is that
                  </p>
                  <a class="buynow" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="second-slide"
                src="assets/images/banner1.png"
                alt="Second slide"
              />
              <div class="container">
                <div class="carousel-caption relative">
                  <span>All New Phones </span>
                  <h1>up to 50% Flat Sale</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content
                    <br /> of a page when looking at its layout. The point of
                    using Lorem Ipsum is that
                  </p>
                  <a class="buynow" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <i class="fa fa-angle-left"></i>
          </a>
          <a
            class="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <i class="fa fa-angle-right"></i>
          </a>
        </div>
      </section>
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
export default Special;