import React from "react";
import { Link } from "react-router-dom";

let About = () => {
  let date = new Date();

  return (
    <React.Fragment>
      {/*     <!-- loader  -->
       */}
      {/*  <div class="loader_bg">
          <div class="loader">
            <img src="assets/images/loading.gif" alt="#" />
          </div>
        </div> */}
      {/*  <!-- end loader -->
    <!-- header --> */}
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
                      <Link
                        to="/"
                        onClick={() => {
                          window.location.reload();
                        }}
                      >
                        <img src="assets/images/logo.png" alt="#home_img" />
                      </Link>
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
                          <Link
                            to="/"
                            onClick={() => {
                              window.location.reload();
                            }}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            onClick={() => {
                              window.location.reload();
                            }}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/brand"
                            onClick={() => {
                              window.location.reload();
                            }}
                          >
                            Brand
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/special"
                            onClick={() => {
                              window.location.reload();
                            }}
                          >
                            Specials
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            onClick={() => {
                              window.location.reload();
                            }}
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li class="last">
                          <a href="#">
                            <img
                              src="assets/images/search_icon.png"
                              alt="icon"
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
        {/*         <!-- end header inner -->
         */}{" "}
      </header>
      {/*     <!-- end header -->
       */}
      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>About</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*     <!-- about -->
       */}{" "}
      <div class="about">
        <div class="container">
          <div class="row">
            <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
              <div class="about_img">
                <figure>
                  <img src="assets/images/about.png" alt="img" />
                </figure>
              </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
              <div class="about_box">
                <span>Our Mobile Shop</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of It is a long established fact that a reader will
                  be distracted by the readable content of a page when looking
                  at its layout. The point of It is a long established fact that
                  a reader will be distracted by the{" "}
                </p>
              </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
              <div class="about_box_ ">
                <span>Our Mobile Shop</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of It is a long established fact that a reader will
                  be distracted by the readable content of a page when looking
                  at its layout. The point of It is a long established fact that
                  a reader will be distracted by the{" "}
                </p>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
              <div class="about_img">
                <figure>
                  <img src="assets/images/about.png" alt="img" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*     </div>
       */}
      {/*     <!-- end about -->
       */}
      {/*     <!-- footer -->
       */}{" "}
      <footer>
        <div id="contact" class="footer">
          <div class="container">
            <div class="row pdn-top-30">
              <div class="col-md-12">
                <div class="footer-box">
                  <div class="headinga">
                    <h3>Address</h3>
                    <span>
                      Lions Shopping Arcade, LSC 01, Namirembe Rd. Next to
                      Centenary Bank Kampala, Uganda .
                    </span>
                    <p>
                      +256 757 837184 <br />
                      mutsbrian@gmail.com
                    </p>
                  </div>
                  <ul class="location_icon">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="menu-bottom">
                    <ul class="link">
                      <li class="active">
                        <Link
                          to="/"
                          onClick={() => {
                            window.location.reload();
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          onClick={() => {
                            window.location.reload();
                          }}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/brand"
                          onClick={() => {
                            window.location.reload();
                          }}
                        >
                          Brand
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/special"
                          onClick={() => {
                            window.location.reload();
                          }}
                        >
                          Specials
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          onClick={() => {
                            window.location.reload();
                          }}
                        >
                          Contact Us
                        </Link>
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
                © {date.getFullYear()} All Rights Reserved. Design By
                <a href="https://html.design/"> Mu-Solomon</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*     <!-- end footer -->
       */}
      {/*   <!-- Javascript files-->
       */}{" "}
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/plugin.js"></script>
      {/*     <!-- sidebar -->
       */}{" "}
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
      {/*     <!-- javascript -->
       */}{" "}
      <script src="js/owl.carousel.js"></script>
      <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
      <script>
        {/*  $(document).ready(function() {
            $(".fancybox").fancybox({
                openEffect: "none",
                closeEffect: "none"
            });

            $(".zoom").hover(function() {

                $(this).addClass('transition');
            }, function() {

                $(this).removeClass('transition');
            });
        }); */}
      </script>
      {/*       </body>
       */}{" "}
    </React.Fragment>
  );
};
export default About;
