import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
/* Sony Images */
let CatPhone = () => {
  return (
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop mb-5">
      <div class="brand-box">
        <h5>Sale</h5>
        <i>
          <img
            src={require("../images/sony/Sony_XZ2_small_3.jpg")}
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

function capturePhoneDetails(details) {
  localStorage.removeItem("details");
  if (details) {
    localStorage.setItem("details", JSON.stringify(details));
  }
}

let Home = (props) => {
  const [categories, setCategories] = useState([
    {
      catType: [
        {
          img: require("../images/sony/Sony_XZ2_small_3.jpg"),
          price: 600000,
          name: "Sony Xperia XZ2",
          sale: true,
          data: {
            name: "Sony Xperia XZ2",
          },
        },
        {
          img: require("../images/sony/Sony_X_Performance_main.jpg"),
          price: 300000,
          name: "Sony X Performance",
          data: {
            name: "Sony X Performance",
          },
        },
        {
          img: require("../images/sony/sony_xz3_main_home.jpg"),
          price: 800000,
          name: "Sony Xperia XZ3",
        },
        {
          img: require("../images/sony/sony_xz_1.jpg"),
          price: 450000,
          name: "Sony Xperia XZ1",
        },
        {
          img: require("../images/sony/Sony_XZ2_small_3.jpg"),
          price: 400000,
          name: "Sony XZ S",
        },
        {
          img: require("../images/sony/sony_xperia_xzs-main.jpg"),
          price: 250000,
          name: "Sony X Compact",
        },
      ],
    },
    {
      newStock: [
        {
          img: require("../images/sharp/Sharp_R1_main.jpg"),
          price: 450000,
          name: "Sharp Aquos R2 ",
          sale: true,
        },
        {
          img: require("../images/lg/LG_Style_1_main.jpg"),
          price: 450000,
          name: "LG Style 1",
        },
        {
          img: require("../images/sharp/Sharp_704_main.webp"),
          price: 200000,
          name: "Sharp 704 SH",
        },
        {
          img: require("../images/kyocera/Kyocera_basio_3_main.jpg"),
          price: 190000,
          name: "Pasula KYV43",
        },
      ],
    },
  ]);
  let date = new Date();
  var Categore = categories[0].catType;
  var new_Stock = {
    newStock: [
      {
        img: require("../images/sharp/Sharp_R1_main.jpg"),
        price: 450000,
        name: "Sharp Aquos R2 ",
        sale: true,
      },
      {
        img: require("../images/lg/LG_Style_1_main.jpg"),
        price: 450000,
        name: "LG Style 1",
      },
      {
        img: require("../images/sharp/Sharp_704_main.webp"),
        price: 200000,
        name: "Sharp 704 SH",
      },
      {
        img: require("../images/kyocera/Kyocera_basio_3_main.jpg"),
        price: 190000,
        name: "Pasula KYV43",
      },
    ],
  };
  let clonedState = categories.map((item) => {
    return { ...item };
  });
  function changePhones(val) {
    var buttons = document.getElementsByClassName("catLink");
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].className = buttons[j].className.replace(" active", "");
    }
    val.currentTarget.className += " active";
    switch (val.target.innerHTML) {
      case "Sony":
        /* clonedState[0].catType =  */
        setCategories([
          {
            catType: [
              {
                img: require("../images/sony/Sony_XZ2_small_3.jpg"),
                price: 600000,
                name: "Sony Xperia XZ2",
                sale: true,
              },
              {
                img: require("../images/sony/Sony_X_Performance_main.jpg"),
                price: 300000,
                name: "Sony X Performance",
              },
              {
                img: require("../images/sony/sony_xz3_main_home.jpg"),
                price: 800000,
                name: "Sony Xperia XZ3",
              },
              {
                img: require("../images/sony/sony_xz_1.jpg"),
                price: 450000,
                name: "Sony Xperia XZ1",
              },
              {
                img: require("../images/sony/Sony_XZ2_small_3.jpg"),
                price: 400000,
                name: "Sony XZ S",
              },
              {
                img: require("../images/sony/sony_xperia_xzs-main.jpg"),
                price: 250000,
                name: "Sony X Compact",
              },
            ],
          },
          ...categories,
        ]);
        break;
      case "Sharp":
        setCategories([
          {
            catType: [
              {
                img: require("../images/sharp/Sharp_R2_Compact_main.jpg"),
                price: 300000,
                name: "Aquos R2 Compact",
                sale: true,
              },
              {
                img: require("../images/sharp/sharp_904sh_main.jpg"),
                price: 150000,
                name: "Sharp 940SH ",
              },
              {
                img: require("../images/sharp/Sharp_Aquos_crystal_2_main.jpg"),
                price: 180000,
                name: "Sharp Aquos crystal 2",
              },
              {
                img: require("../images/sharp/Sharp_shv40_main.jpg"),
                price: 250000,
                name: "Sharp SHV40",
              },
              {
                img: require("../images/sharp/Sharp_shv39_main.jpg"),
                price: 400000,
                name: "Sharp SHV39",
              },
              {
                img: require("../images/sharp/Sharp_R1_main.jpg"),
                price: 450000,
                name: "Sharp Aquos R2 ",
              },
              {
                img: require("../images/sharp/Sharp_Aquos_crystal_main.jpg"),
                price: 150000,
                name: "Sharp Aquos crystal ",
              },
              {
                img: require("../images/sharp/Sharp_R3_main.webp"),
                price: 550000,
                name: "Sharp Aquos R3",
              },
              {
                img: require("../images/sharp/Sharp_shv43_main.jpg"),
                price: 300000,
                name: "Sharp SHV43",
              },
              {
                img: require("../images/sharp/Sharp_shv41_main.jpg"),
                price: 250000,
                name: "Sharp SHV41",
              },
              {
                img: require("../images/sharp/Sharp_sh04h_main.jpg"),
                price: 280000,
                name: "Sharp 04H ",
              },
              {
                img: require("../images/sharp/Sharp_704_main.webp"),
                price: 200000,
                name: "Sharp 704 SH",
              },
            ],
          },
        ]);
        break;
      case "Kyocera":
        setCategories([
          {
            catType: [
              {
                img: require("../images/kyocera/Kyocera_basio_3_main.jpg"),
                price: 190000,
                name: "Pasula KYV43",
                sale: true,
              },
              {
                img: require("../images/kyocera/Kyocera_basio_2_main.jpg"),
                price: 150000,
                name: "Basio KYV42",
              },
              {
                img: require("../images/kyocera/Kyv44_main.jpg"),
                price: 230000,
                name: "Kyocera Kyv44 ",
              },
              {
                img: require("../images/kyocera/Kyocera_basio_2_main.jpg"),
                price: 350000,
                name: "Basio KYV42",
              },
              {
                img: require("../images/kyocera/Urbano_main.jpg"),
                price: 350000,
                name: "Urbano KYV45",
              },
              {
                img: require("../images/kyocera/Kampeyini_main.jpg"),
                price: 150000,
                name: "Kampeyini KYV42",
              },
              {
                img: require("../images/kyocera/Digno_main.jpg"),
                price: 150000,
                name: "Digno 602KC",
              },
              {
                img: require("../images/kyocera/Kyocera_android_one_S6.jpg"),
                price: 180000,
                name: "Android One S6",
              },
              {
                img: require("../images/kyocera/Torque_main.jpg"),
                price: 350000,
                name: "Torque KYV46",
              },
              {
                img: require("../images/kyocera/Kyocera_Rafre_KYV40_main.jpg"),
                price: 180000,
                name: "Kyocera Rafre KYV40",
              },
            ],
          },
        ]);
        break;
      case "Google":
        setCategories([
          {
            catType: [
              {
                img: require("../images/google/google_pixel.jpg"),
                price: 550000,
                name: "Google Pixel 3a",
                sale: true,
              },
            ],
          },
        ]);
        break;
      case "Samsung":
        setCategories([
          {
            catType: [
              {
                img: require("../images/galaxy/galaxy_feel.jpg"),
                price: 450000,
                name: "Galaxy J Feel",
                sale: true,
              },
              {
                img: require("../images/galaxy/galaxy_A30.jpg"),
                price: 500000,
                name: "Galaxy A30",
              },
            ],
          },
        ]);
        break;
      case "LG":
        setCategories([
          {
            catType: [
              {
                img: require("../images/lg/lg_1_v30+.webp"),
                price: 700000,
                name: "LG V30+",
                sale: true,
              },
              {
                img: require("../images/lg/LG_Style_1_main.jpg"),
                price: 450000,
                name: "LG Style 1",
              },
              {
                img: require("../images/lg/LG_Style_2_main.jpg"),
                price: 550000,
                name: "LG Style 2",
              },
              {
                img: require("../images/lg/LG_V39_main.jpg"),
                price: 300000,
                name: "LG V39",
              },
            ],
          },
        ]);
        break;
      case "Arrows":
        setCategories([
          {
            catType: [
              {
                img: require("../images/arrows/ARROWS_F-05_main.jpg"),
                price: 200000,
                name: "Arrows F-05J",
                sale: true,
              },
              {
                img: require("../images/arrows/ARROWS_MO2_main.jpg"),
                price: 300000,
                name: "Arrows F-02L",
              },
              {
                img: require("../images/arrows/ARROWS_F-01H_main.jpg"),
                price: 200000,
                name: "Arrows F-01H",
              },
              {
                img: require("../images/arrows/ARROWS_F-01K_main.jpg"),
                price: 250000,
                name: "Arrows Kaliba F-01K",
              },
              {
                img: require("../images/arrows/ARROWS_F-01J_main.jpg"),
                price: 280000,
                name: "Arrows F-01J",
              },
              {
                img: require("../images/arrows/ARROWS_F-04K_main.jpg"),
                price: 300000,
                name: "Arrows F-04K",
              },
              {
                img: require("../images/arrows/ARROWS_F-04G_main.jpg"),
                price: 250000,
                name: "Arrows F-04G",
              },
            ],
          },
        ]);
        break;
      default:
        break;
    }
  }

  let activeClass = (element) => {
    /*     setActive(!isActive);     */
  };
  localStorage.removeItem("details");
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
                  <a class="buynow" href="#categories">
                    Buy Now
                  </a>
                  <ul class="social_icon">
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
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
                  <a class="buynow" href="#categories">
                    Buy Now
                  </a>
                  <ul class="social_icon">
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
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
                  <a class="buynow" href="#categories">
                    Buy Now
                  </a>
                  <ul class="social_icon">
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/Link2014" target="_parent">
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
                <Link to="/details">
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
                </Link>
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
                <h2 id="categories">Categories</h2>
                <ul class="categiri">
                  <li
                    id="defaultCat"
                    className="catLink active"
                    onClick={(val) => changePhones(val)}
                  >
                    <button>Sony</button>
                  </li>

                  <li className="catLink" onClick={(val) => changePhones(val)}>
                    <button>Kyocera</button>
                  </li>
                  <li className="catLink" onClick={(val) => changePhones(val)}>
                    <button>Google</button>
                  </li>
                  <li className="catLink" onClick={(val) => changePhones(val)}>
                    <button>Samsung</button>
                  </li>
                  <li className="catLink" onClick={(val) => changePhones(val)}>
                    <button>LG</button>
                  </li>
                  <li className="catLink" onClick={(val) => changePhones(val)}>
                    <button>Sharp</button>
                  </li>
                  <li className="catLink" onClick={(val) => changePhones(val)}>
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
              {Categore.map((val) => {
                return (
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop mb-5 category-content">
                    <div class="brand-box">
                      {val.sale ? <h5>Sale</h5> : ""}
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
                    <Link
                      class="buynow"
                      to="/details"
                      onClick={() => {
                        capturePhoneDetails(val.data);
                      }}
                    >
                      Buy now
                    </Link>
                  </div>
                );
              }).slice(0, 8)}
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
              {new_Stock.newStock.map((val) => {
                return (
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop mb-4">
                    <div class="shoes-box">
                      {val.sale ? <h5>Sale</h5> : ""}
                      <i>
                        <img src={val.img} />{" "}
                      </i>
                      <h4>
                        UGX <span class="nolmal">{val.price}</span>
                      </h4>
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
                        Solomon M
                        <br />
                        <strong class="ornage_color">Customer</strong>
                      </h3>
                      <p>
                        They are true, I've spent with mine 3years now and it
                        seldom falls in water at times. Very nice phones.!
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
                        Mark Tabula
                        <br />
                        <strong class="ornage_color">Rental</strong>
                      </h3>
                      <p>
                        I'm happy with the delivery team. They registered my
                        Google and Whatsapp acounts freely. (-_-)
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
                        Nickmarsial
                        <br />
                        <strong class="ornage_color">Visitor</strong>
                      </h3>
                      <p>
                        This opportunity is awesomely taken to thank the #mgt of
                        Link communincation to provide effective and
                        wholehearted services to the people of Uganda.!
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
              <form
                class="main_form"
                action="https://formspree.io/f/mdobpwnn"
                method="POST"
              >
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="form-control"
                      placeholder="Your name"
                      type="text"
                      name="Your Name"
                      required
                    />
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <input
                      class="form-control"
                      placeholder="Email"
                      type="text"
                      name="Email"
                      required
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
                    <input
                      type="text"
                      class="textarea"
                      name="Message"
                      placeholder="Message"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <button class="send" type="submit">
                      Send
                    </button>
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
                      <a href="https://facebook.com/Link2014" target="_parent">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Link2014" target="_parent">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/Link2014" target="_parent">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="menu-bottom">
                    <ul class="link">
                      <li class="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        onclick={() => {
                          window.location.reload(true);
                        }}
                      >
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
                <a href="https://mu-solomon.com/Link2014" target="_parent">
                  {" "}
                  Mu-Solomon
                </a>
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
      <script>
        {/* 
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
      }); */}
      </script>
    </React.Fragment>
  );
};

export default Home;
