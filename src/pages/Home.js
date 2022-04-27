import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
/* Sony Images */
import sony_x2 from "../images/Sony_XZ2_small_3.jpg";
let CatPhone = () => {
  return (
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop mb-5">
      <div class="brand-box">
        <h5>Sale</h5>
        <i>
          <img
            src={require("../images/Sony_XZ2_small_3.jpg")}
            class="w-50 img-fluid"
          />{" "}
        </i>
        <h4>
          UGX <span class="nolmal">600,000</span>
        </h4>
        <span class="text-primary">Sony Xperia XZ2</span>
      </div>
      <a class="buynow" href="#">
        Buy now
      </a>
    </div>
  );
};

let Home = () => {
  const [categories, setCategories] = useState([
    {
      sony: [
        /*  {
          img: require("../images/Sony_XZ2_small_3.jpg"),
          price: 600000,
          name: "Sony Xperia XZ2",
        }, */
        {
          img: require("../images/Sony_X_Performance_main.jpg"),
          price: 300000,
          name: "Sony X Performance",
        },
        {
          img: require("../images/sony_xz3_main_home.jpg"),
          price: 800000,
          name: "Sony Xperia XZ3",
        },
        {
          img: require("../images/sony_xz_1.jpg"),
          price: 450000,
          name: "Sony Xperia XZ1",
        },
        {
          img: require("../images/Sony_XZ2_small_3.jpg"),
          price: 400000,
          name: "Sony XZ S",
        },
        {
          img: require("../images/sony_xperia_xzs-main.jpg"),
          price: 250000,
          name: "Sony X Compact",
        },
      ],
    },
    {
      sharp: [
        {
          img: "../images/Sony_XZ2_small_3.jpg",
          price: 400000,
          name: "Sharp SH 02 J",
        },
        {
          img: "../images/Sony_XZ2_small_3.jpg",
          price: 350000,
          name: "Sharp SH 02 J",
        },
      ],
    },
  ]);
  let date = new Date();
  function changePhones() {}
  let activeClass = (element) => {
    /*     setActive(!isActive);
     */
  };
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
                  <ul class="social_icon">
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
                  Best phone dealers since 2002 operating from Naamirembe Rd
                  Next to Centenary Bank. Lions Shopping Mall Shop no. 1
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
                  <li className="active" onClick={changePhones}>
                    <button>Sony</button>
                  </li>
                  <li onClick={changePhones}>
                    <button>Kyocera</button>
                  </li>
                  <li onClick={activeClass}>
                    <button>Google</button>
                  </li>
                  <li onClick={activeClass}>
                    <button>Samsung</button>
                  </li>
                  <li onClick={activeClass}>
                    <button>LG</button>
                  </li>
                  <li onClick={activeClass}>
                    <button>Sharp</button>
                  </li>
                  <li onClick={activeClass}>
                    <button>Arrows</button>
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
              {/* <CatPhone />
              <CatPhone />
              <CatPhone />
              <CatPhone />
              <CatPhone />
              <CatPhone />*/}
              <CatPhone />
              {categories[0].sony.map((val) => {
                return (
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop mb-5">
                    <div class="brand-box">
                      {/* <h5>Sale</h5> */}
                      <i>
                        <img src={val.img} class="w-50 img-fluid" />{" "}
                      </i>
                      <h4>
                        UGX{" "}
                        <span class="nolmal">
                          {val.price.toLocaleString("en-US")}
                        </span>
                      </h4>
                      <span class="text-primary">{val.name}</span>
                    </div>
                    <a class="buynow" href="#">
                      Buy now
                    </a>
                  </div>
                );
              })}
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
            <h3>New Stock</h3>
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
                © {date.getFullYear()} All Rights Reserved. Design By
                <a href="https://html.design/"> Mu-Solomon</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*     <!-- end footer -->
       */}
      {/*     <!-- Javascript files-->
       */}{" "}
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/jquery-3.0.0.min.js"></script>
      <script src="assets/js/plugin.js"></script>
      {/*     <!-- sidebar -->
       */}{" "}
      <script src="assets/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="assets/js/custom.js"></script>
      {/*     <!-- javascript -->
       */}{" "}
      <script src="assets/js/owl.carousel.js"></script>
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
