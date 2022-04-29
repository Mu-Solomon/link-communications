import React from "react";
import { Link } from "react-router-dom";

let Brand = () => {
  let date = new Date();

  return (
    <React.Fragment>
      {/*     <!-- loader  -->
       */}{" "}
      {/* <div class="loader_bg">
        <div class="loader">
          <img src="assets/images/loading.gif" alt="#" />
        </div>
      </div> */}
      {/*     <!-- end loader -->
       */}
      {/*  <!-- header -->
       */}{" "}
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
                      <Link to="/">
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
       */}{" "}
      {/*      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Our Brand</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
 */}
      <div class="brand_ mt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Our Brand</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="brand_bg">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                <div class="brand__box">
                  <img
                    src="http://thelinkcommunication.com/static/media/kyv42_main_image.66eb5a34.jpg"
                    alt="img"
                  />
                  <h3>
                    UGX<strong class="red"> 150,000</strong>
                  </h3>
                  <span>Kampeyini KYV42</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                <div class="brand__box">
                  <img
                    src="http://thelinkcommunication.com/static/media/Arrows_small_1.b4722a11.webp"
                    alt="img"
                  />
                  <h3>
                    UGX <strong class="red">250,000</strong>
                  </h3>
                  <span>Arrows Kaliba F01K</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                <div class="brand__box">
                  <img
                    src="http://thelinkcommunication.com/static/media/sharp%20v43_small_1.53f44245.jpg"
                    alt="img"
                  />
                  <h3>
                    UGX<strong class="red">200,000</strong>
                  </h3>
                  <span>Sharp Champion</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="brand__box">
                  <img
                    src="http://thelinkcommunication.com/static/media/sharp_alarm_main.34ec67cd.jpg"
                    alt="img"
                  />
                  <h3>
                    UGX <strong class="red">200,0000</strong>
                  </h3>
                  <span>Sharp Alarm</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                <div class="brand__box">
                  <img
                    src="http://thelinkcommunication.com/static/media/Sharp_R2_Compact_1.496f8a0d.jpg"
                    alt="img"
                  />
                  <h3>
                    UGX <strong class="red">300,000</strong>
                  </h3>
                  <span>Sharp R2</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                <div class="brand__box">
                  <img
                    src="http://thelinkcommunication.com/static/media/LG_Style_1_main.dfb89dd4.jpg"
                    alt="img"
                  />
                  <h3>
                    UGX <strong class="red">450,000</strong>
                  </h3>
                  <span>LG Style 1</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-md-12">
                <a class="read-more">See More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*     <!-- brand -->
       */}{" "}
      {/* <div class="brand_">
        <div class="container"></div>
        <div class="brand-bg">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                <div class="brand-box">
                  <img src="assets/images/1.png" alt="img" />
                  <h3>
                    $<strong class="red">100</strong>
                  </h3>
                  <span>Mobile Phone</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                <div class="brand_box">
                  <img src="assets/images/2.png" alt="img" />
                  <h3>
                    $<strong class="red">100</strong>
                  </h3>
                  <span>Mobile Phone</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                <div class="brand_box">
                  <img src="assets/images/3.png" alt="img" />
                  <h3>
                    $<strong class="red">100</strong>
                  </h3>
                  <span>Mobile Phone</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="brand_box">
                  <img src="assets/images/4.png" alt="img" />
                  <h3>
                    $<strong class="red">100</strong>
                  </h3>
                  <span>Mobile Phone</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                <div class="brand_box">
                  <img src="assets/images/5.png" alt="img" />
                  <h3>
                    $<strong class="red">100</strong>
                  </h3>
                  <span>Mobile Phone</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn">
                <div class="brand_box">
                  <img src="assets/images/6.png" alt="img" />
                  <h3>
                    $<strong class="red">100</strong>
                  </h3>
                  <span>Mobile Phone</span>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                  <i>
                    <img src="assets/images/star.png" />
                  </i>
                </div>
              </div>
              <div class="col-md-12">
                <a class="read-more">See More</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*     <!-- end brand -->
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
      {/* <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
    <script src="js/plugin.js"></script>
    <!-- sidebar -->
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/custom.js"></script>
    <!-- javascript -->
    <script src="js/owl.carousel.js"></script>
    <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
    <script>
        $(document).ready(function() {
            $(".fancybox").fancybox({
                openEffect: "none",
                closeEffect: "none"
            });

            $(".zoom").hover(function() {

                $(this).addClass('transition');
            }, function() {

                $(this).removeClass('transition');
            });
        });
    </script> */}
      {/* </body>*/}
      {/* </div>
       */}{" "}
    </React.Fragment>
  );
};

export default Brand;
