import React from "react";

let Home = () => {
  return (
    <React.Fragment>
      {/*  <!-- loader  --> */}
      {/* <div class="loader_bg">
        <div class="loader">
          <img src="assets/images/loading.gif" alt="" />
        </div>
      </div> */}
      {/*     <!-- end loader -->
       */}
      {/*     <!-- header -->
       */}{" "}
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
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="brand.html">Brand</a>
                        </li>
                        <li>
                          <a href="special.html">Specials</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
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
                <div class="location_assets/icon_bottum">
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
                    distracted by the readable content <br />
                    of a page when looking at its layout. The point of using
                    Lorem Ipsum is that
                  </p>
                  <a class="buynow" href="#">
                    Buy Now
                  </a>
                  <ul class="social_assets/icon">
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
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="second-slide"
                src="assets/images/banner.jpg"
                alt="Second slide"
              />
              <div class="container">
                <div class="carousel-caption relative">
                  <span>All New Phones </span>
                  <h1>up to 25% Flat Sale</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content <br />
                    of a page when looking at its layout. The point of using
                    Lorem Ipsum is that
                  </p>
                  <a class="buynow" href="#">
                    Buy Now
                  </a>
                  <ul class="social_assets/icon">
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
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="third-slide"
                src="assets/images/banner.jpg"
                alt="Third slide"
              />
              <div class="container">
                <div class="carousel-caption relative">
                  <span>All New Phones </span>
                  <h1>up to 25% Flat Sale</h1>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content <br />
                    of a page when looking at its layout. The point of using
                    Lorem Ipsum is that
                  </p>
                  <a class="buynow" href="#">
                    Buy Now
                  </a>
                  <ul class="social_assets/icon">
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
                <h3>About Us</h3>
                <span>Our Mobile Shop</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of It is a long established fact that a reader will
                  be distracted by the readable content of a page when looking
                  at its layout. The point of It is a long established fact that
                  a reader will be distracted by the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*     <!-- end about -->
       */}
      {/*     <!-- brand -->
       */}{" "}
      <div class="brand_">
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
                  <img src="assets/images/1.png" alt="img" />
                  <h3>
                    UGX<strong class="red"> 400,000</strong>
                  </h3>
                  <span>Kyocera KYV42</span>
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
                <div class="brand__box">
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
                <div class="brand__box">
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
                <div class="brand__box">
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
                <div class="brand__box">
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
      </div>
      {/*     <!-- end brand -->
       */}
      {/*   <!-- Categories-->
       */}{" "}
      <div class="Categories">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>Categories</h2>
                <ul class="categiri">
                  <li class="active">
                    <a href="#">Sony</a>
                  </li>
                  <li>
                    <a href="#">Kyocera</a>
                  </li>
                  <li>
                    <a href="#shoes">Google</a>
                  </li>
                  <li>
                    <a href="#">Samsung</a>
                  </li>
                  <li>
                    <a href="#jewellery">LG</a>
                  </li>
                  <li>
                    <a href="#">Sharp</a>
                  </li>
                  <li>
                    <a href="#kids">Arrows</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*         <!-- news brand -->
           */}{" "}
          <div id="brand" class="brand-bg">
            <h3>New brands</h3>
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
                <div class="brand-box">
                  <h5>Sale</h5>
                  <i>
                    <img src="assets/icon/p1.png" />{" "}
                  </i>
                  <h4>
                    Price $<span class="nolmal">100</span>
                  </h4>
                </div>
                <a class="buynow" href="#">
                  Buy now
                </a>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
                <div class="brand-box">
                  <i>
                    <img src="assets/icon/p2.png" />
                  </i>
                  <h4>
                    Price $<span class="nolmal">100</span>
                  </h4>
                </div>
                <a class="buynow" href="#">
                  Buy now
                </a>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="brand-box">
                  <i>
                    <img src="assets/icon/p1.png" />
                  </i>
                  <h4>
                    Price $<span class="nolmal">100</span>
                  </h4>
                </div>
                <a class="buynow" href="#">
                  Buy now
                </a>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="brand-box">
                  <i>
                    <img src="assets/icon/p4.png" />
                  </i>
                  <h4>
                    Price $<span class="nolmal">100</span>
                  </h4>
                </div>
                <a class="buynow" href="#">
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <a class="seemore" href="#">
            See more
          </a>
          {/*         <!-- end news brand -->
           */}
          {/*         <!-- news shoes -->
           */}{" "}
          <div id="shoes" class="shoes-bg">
            <h3>New shoes</h3>
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
                <div class="shoes-box">
                  <h5>Sale</h5>
                  <i>
                    <img src="assets/icon/s1.png" />{" "}
                  </i>
                  <h4>
                    Price $<span class="nolmal">100</span>
                  </h4>
                </div>
                <a class="buynow" href="#">
                  Buy now
                </a>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
                <div class="shoes-box">
                  <i>
                    <img src="assets/icon/s2.png" />
                  </i>
                  <h4>
                    Price $<span class="nolmal">100</span>
                  </h4>
                </div>
                <a class="buynow" href="#">
                  Buy now
                </a>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="shoes-box">
                  <i>
                    <img src="assets/icon/s3.png" />
                  </i>
                  <h4>
                    Price $<span class="nolmal">100</span>
                  </h4>
                </div>
                <a class="buynow" href="#">
                  Buy now
                </a>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="shoes-box">
                  <i>
                    <img src="assets/icon/s4.png" />
                  </i>
                  <h4>
                    Price $<span class="nolmal">100</span>
                  </h4>
                </div>
                <a class="buynow" href="#">
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <a class="seemore" href="#">
            See more
          </a>
        </div>
      </div>
      {/*     <!-- clients -->
       */}{" "}
      <div class="clients">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>what say our clients</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clients_red">
        <div class="container">
          <div
            id="testimonial_slider"
            class="carousel slide"
            data-ride="carousel"
          >
            {/*           <!-- Indicators -->
             */}{" "}
            <ul class="carousel-indicators">
              <li
                data-target="#testimonial_slider"
                data-slide-to="0"
                class=""
              ></li>
              <li
                data-target="#testimonial_slider"
                data-slide-to="1"
                class="active"
              ></li>
              <li
                data-target="#testimonial_slider"
                data-slide-to="2"
                class=""
              ></li>
            </ul>
            {/*           <!-- The slideshow -->
             */}{" "}
            <div class="carousel-inner">
              <div class="carousel-item">
                <div class="testomonial_section">
                  <div class="full center"></div>
                  <div class="full testimonial_cont text_align_center cross_layout">
                    <div class="cross_inner">
                      <h3>
                        Due markes
                        <br />
                        <strong class="ornage_color">Rental</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit ess
                      </p>
                      <div class="full text_align_center margin_top_30">
                        <img src="assets/icon/testimonial_qoute.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item active">
                <div class="testomonial_section">
                  <div class="full center"></div>
                  <div class="full testimonial_cont text_align_center cross_layout">
                    <div class="cross_inner">
                      <h3>
                        Due markes
                        <br />
                        <strong class="ornage_color">Rental</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit ess
                      </p>
                      <div class="full text_align_center margin_top_30">
                        <img src="assets/icon/testimonial_qoute.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div class="testomonial_section">
                  <div class="full center"></div>
                  <div class="full testimonial_cont text_align_center cross_layout">
                    <div class="cross_inner">
                      <h3>
                        Due markes
                        <br />
                        <strong class="ornage_color">Rental</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit ess
                      </p>
                      <div class="full text_align_center margin_top_30">
                        <img src="assets/icon/testimonial_qoute.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*     <!-- end clients -->
       */}
      {/*  <!-- contact -->
       */}{" "}
      <div class="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Contact us</h2>
              </div>
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
                  <div class="col-md-12">
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
                  <div class="col-md-12">
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
              <div class="col-md-12">
                <div class="footer-box">
                  <div class="headinga">
                    <h3>Address</h3>
                    <span>
                      Healing Center, 176 W Streetname,New York, NY 10014, US
                    </span>
                    <p>
                      (+71) 8522369417 <br />
                      demo@gmail.com
                    </p>
                  </div>
                  <ul class="location_assets/icon">
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
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>

                      <li>
                        <a href="#">Brand </a>
                      </li>
                      <li>
                        <a href="#">Specials </a>
                      </li>
                      <li>
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
                <a href="https://html.design/">Free Html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*     <!-- end footer -->
       */}
      {/*     <!-- Javascript files-->
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
      {/* <script>
      $(document).ready(function () {
        $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none",
        });

        $(".zoom").hover(
          function () {
            $(this).addClass("transition");
          },
          function () {
            $(this).removeClass("transition");
          }
        );
      });
    </script> */}
    </React.Fragment>
  );
};

export default Home;
