import React from "react";
import { Link } from "react-router-dom";
function capturePhoneDetails(details) {
  window.location.reload();
  localStorage.removeItem("details");
  if (details) {
    localStorage.setItem("details", JSON.stringify(details));
  }
}
let Content = ({ phone }) => {
  let date = new Date();

  return (
    <React.Fragment>
      <header>
        {/*   <div class="loader_bg">
          <div class="loader">
            <img src="assets/images/loading.gif" alt="" />
          </div>
        </div> */}
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

      {/*     <div class="breadcrumb-wrap">
        <div class="container-fluid">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">New Brands</a>
            </li>
            <li class="breadcrumb-item active">Product Detail</li>
          </ul>
        </div>
      </div>
 */}
      <div class="brand_color">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>{phone.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="ornage_color">Coming soon...</h3>
      <div class="product-detail">
        {/*  <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <div class="product-detail-top">
                <div class="row align-items-center">
                  <div class="col-md-5">
                    <div class="product-slider-single normal-slider">
                      <img src="lib/img/product-1.jpg" alt="Product Image" />
                      <img src="lib/img/product-3.jpg" alt="Product Image" />
                      <img src="lib/img/product-5.jpg" alt="Product Image" />
                      <img src="lib/img/product-7.jpg" alt="Product Image" />
                      <img src="lib/img/product-9.jpg" alt="Product Image" />
                      <img src="lib/img/product-10.jpg" alt="Product Image" />
                    </div>
                    <div class="product-slider-single-nav normal-slider">
                      <div class="slider-nav-img">
                        <img src="lib/img/product-1.jpg" alt="Product Image" />
                      </div>
                      <div class="slider-nav-img">
                        <img src="lib/img/product-3.jpg" alt="Product Image" />
                      </div>
                      <div class="slider-nav-img">
                        <img src="lib/img/product-5.jpg" alt="Product Image" />
                      </div>
                      <div class="slider-nav-img">
                        <img src="lib/img/product-7.jpg" alt="Product Image" />
                      </div>
                      <div class="slider-nav-img">
                        <img src="lib/img/product-9.jpg" alt="Product Image" />
                      </div>
                      <div class="slider-nav-img">
                        <img src="lib/img/product-10.jpg" alt="Product Image" />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="product-content">
                      <div class="title">
                        <h2>Product Name</h2>
                      </div>
                      <div class="ratting">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <div class="price">
                        <h4>Price:</h4>
                        <p>
                          $99 <span>$149</span>
                        </p>
                      </div>
                      <div class="quantity">
                        <h4>Quantity:</h4>
                        <div class="qty">
                          <button class="btn-minus">
                            <i class="fa fa-minus"></i>
                          </button>
                          <input type="text" value="1" />
                          <button class="btn-plus">
                            <i class="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div class="p-size">
                        <h4>Size:</h4>
                        <div class="btn-group btn-group-sm">
                          <button type="button" class="btn">
                            S
                          </button>
                          <button type="button" class="btn">
                            M
                          </button>
                          <button type="button" class="btn">
                            L
                          </button>
                          <button type="button" class="btn">
                            XL
                          </button>
                        </div>
                      </div>
                      <div class="p-color">
                        <h4>Color:</h4>
                        <div class="btn-group btn-group-sm">
                          <button type="button" class="btn">
                            White
                          </button>
                          <button type="button" class="btn">
                            Black
                          </button>
                          <button type="button" class="btn">
                            Blue
                          </button>
                        </div>
                      </div>
                      <div class="action">
                        <a class="btn" href="#">
                          <i class="fa fa-shopping-cart"></i>Add to Cart
                        </a>
                        <a class="btn" href="#">
                          <i class="fa fa-shopping-bag"></i>Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row product-detail-bottom">
                <div class="col-lg-12">
                  <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="pill"
                        href="#description"
                      >
                        Description
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="pill"
                        href="#specification"
                      >
                        Specification
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" data-toggle="pill" href="#reviews">
                        Reviews (1)
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div id="description" class="container tab-pane active">
                      <h4>Product description</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In condimentum quam ac mi viverra dictum. In efficitur
                        ipsum diam, at dignissim lorem tempor in. Vivamus tempor
                        hendrerit finibus. Nulla tristique viverra nisl, sit
                        amet bibendum ante suscipit non. Praesent in faucibus
                        tellus, sed gravida lacus. Vivamus eu diam eros. Aliquam
                        et sapien eget arcu rhoncus scelerisque. Suspendisse sit
                        amet neque neque. Praesent suscipit et magna eu iaculis.
                        Donec arcu libero, commodo ac est a, malesuada finibus
                        dolor. Aenean in ex eu velit semper fermentum. In leo
                        dui, aliquet sit amet eleifend sit amet, varius in
                        turpis. Maecenas fermentum ut ligula at consectetur.
                        Nullam et tortor leo.
                      </p>
                    </div>
                    <div id="specification" class="container tab-pane fade">
                      <h4>Product specification</h4>
                      <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                    <div id="reviews" class="container tab-pane fade">
                      <div class="reviews-submitted">
                        <div class="reviewer">
                          Phasellus Gravida - <span>01 Jan 2020</span>
                        </div>
                        <div class="ratting">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam.
                        </p>
                      </div>
                      <div class="reviews-submit">
                        <h4>Give your Review:</h4>
                        <div class="ratting">
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="row form">
                          <div class="col-sm-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div class="col-sm-6">
                            <input type="email" placeholder="Email" />
                          </div>
                          <div class="col-sm-12">
                            <textarea placeholder="Review"></textarea>
                          </div>
                          <div class="col-sm-12">
                            <button>Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="product">
                <div class="section-header">
                  <h1>Related Products</h1>
                </div>

                <div class="row align-items-center product-slider product-slider-3">
                  <div class="col-lg-3">
                    <div class="product-item">
                      <div class="product-title">
                        <a href="#">Product Name</a>
                        <div class="ratting">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <div class="product-image">
                        <a href="product-detail.html">
                          <img
                            src="lib/img/product-10.jpg"
                            alt="Product Image"
                          />
                        </a>
                        <div class="product-action">
                          <a href="#">
                            <i class="fa fa-cart-plus"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-heart"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div class="product-price">
                        <h3>
                          <span>$</span>99
                        </h3>
                        <a class="btn" href="">
                          <i class="fa fa-shopping-cart"></i>Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="product-item">
                      <div class="product-title">
                        <a href="#">Product Name</a>
                        <div class="ratting">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <div class="product-image">
                        <a href="product-detail.html">
                          <img
                            src="lib/img/product-8.jpg"
                            alt="Product Image"
                          />
                        </a>
                        <div class="product-action">
                          <a href="#">
                            <i class="fa fa-cart-plus"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-heart"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div class="product-price">
                        <h3>
                          <span>$</span>99
                        </h3>
                        <a class="btn" href="">
                          <i class="fa fa-shopping-cart"></i>Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="product-item">
                      <div class="product-title">
                        <a href="#">Product Name</a>
                        <div class="ratting">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <div class="product-image">
                        <a href="product-detail.html">
                          <img
                            src="lib/img/product-6.jpg"
                            alt="Product Image"
                          />
                        </a>
                        <div class="product-action">
                          <a href="#">
                            <i class="fa fa-cart-plus"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-heart"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div class="product-price">
                        <h3>
                          <span>$</span>99
                        </h3>
                        <a class="btn" href="">
                          <i class="fa fa-shopping-cart"></i>Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="product-item">
                      <div class="product-title">
                        <a href="#">Product Name</a>
                        <div class="ratting">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <div class="product-image">
                        <a href="product-detail.html">
                          <img
                            src="lib/img/product-4.jpg"
                            alt="Product Image"
                          />
                        </a>
                        <div class="product-action">
                          <a href="#">
                            <i class="fa fa-cart-plus"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-heart"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div class="product-price">
                        <h3>
                          <span>$</span>99
                        </h3>
                        <a class="btn" href="">
                          <i class="fa fa-shopping-cart"></i>Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="product-item">
                      <div class="product-title">
                        <a href="#">Product Name</a>
                        <div class="ratting">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <div class="product-image">
                        <a href="product-detail.html">
                          <img
                            src="lib/img/product-2.jpg"
                            alt="Product Image"
                          />
                        </a>
                        <div class="product-action">
                          <a href="#">
                            <i class="fa fa-cart-plus"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-heart"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                      <div class="product-price">
                        <h3>
                          <span>$</span>99
                        </h3>
                        <a class="btn" href="">
                          <i class="fa fa-shopping-cart"></i>Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div> 
      </div>
            </div>
            <div class="col-lg-4 sidebar">
              <div class="sidebar-widget category">
                <h2 class="title">Category</h2>
                <nav class="navbar bg-light">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <i class="fa fa-female"></i>Fashion & Beauty
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <i class="fa fa-child"></i>Kids & Babies Clothes
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <i class="fa fa-tshirt"></i>Men & Women Clothes
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <i class="fa fa-mobile-alt"></i>Gadgets & Accessories
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <i class="fa fa-microchip"></i>Electronics & Accessories
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="sidebar-widget widget-slider">
                <div class="sidebar-slider normal-slider">
                  <div class="product-item">
                    <div class="product-title">
                      <a href="#">Product Name</a>
                      <div class="ratting">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="product-image">
                      <a href="product-detail.html">
                        <img src="lib/img/product-7.jpg" alt="Product Image" />
                      </a>
                      <div class="product-action">
                        <a href="#">
                          <i class="fa fa-cart-plus"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-price">
                      <h3>
                        <span>$</span>99
                      </h3>
                      <a class="btn" href="">
                        <i class="fa fa-shopping-cart"></i>Buy Now
                      </a>
                    </div>
                  </div>
                  <div class="product-item">
                    <div class="product-title">
                      <a href="#">Product Name</a>
                      <div class="ratting">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="product-image">
                      <a href="product-detail.html">
                        <img src="lib/img/product-8.jpg" alt="Product Image" />
                      </a>
                      <div class="product-action">
                        <a href="#">
                          <i class="fa fa-cart-plus"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-price">
                      <h3>
                        <span>$</span>99
                      </h3>
                      <a class="btn" href="">
                        <i class="fa fa-shopping-cart"></i>Buy Now
                      </a>
                    </div>
                  </div>
                  <div class="product-item">
                    <div class="product-title">
                      <a href="#">Product Name</a>
                      <div class="ratting">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                    </div>
                    <div class="product-image">
                      <a href="product-detail.html">
                        <img src="lib/img/product-9.jpg" alt="Product Image" />
                      </a>
                      <div class="product-action">
                        <a href="#">
                          <i class="fa fa-cart-plus"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="#">
                          <i class="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <div class="product-price">
                      <h3>
                        <span>$</span>99
                      </h3>
                      <a class="btn" href="#">
                        <i class="fa fa-shopping-cart"></i>Buy Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="sidebar-widget brands">
                <h2 class="title">Our Brands</h2>
                <ul>
                  <li>
                    <a href="#">Nulla </a>
                    <span>(45)</span>
                  </li>
                  <li>
                    <a href="#">Curabitur </a>
                    <span>(34)</span>
                  </li>
                  <li>
                    <a href="#">Nunc </a>
                    <span>(67)</span>
                  </li>
                  <li>
                    <a href="#">Ullamcorper</a>
                    <span>(74)</span>
                  </li>
                  <li>
                    <a href="#">Fusce </a>
                    <span>(89)</span>
                  </li>
                  <li>
                    <a href="#">Sagittis</a>
                    <span>(28)</span>
                  </li>
                </ul>
              </div>

              <div class="sidebar-widget tag">
                <h2 class="title">Tags Cloud</h2>
                <a href="#">Lorem ipsum</a>
                <a href="#">Vivamus</a>
                <a href="#">Phasellus</a>
                <a href="#">pulvinar</a>
                <a href="#">Curabitur</a>
                <a href="#">Fusce</a>
                <a href="#">Sem quis</a>
                <a href="#">Mollis metus</a>
                <a href="#">Sit amet</a>
                <a href="#">Vel posuere</a>
                <a href="#">orci luctus</a>
                <a href="#">Nam lorem</a>
              </div>
            </div>
            {/*                     <!-- Side Bar End -->
          </div>
        </div> */}
      </div>

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
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/slick/slick.min.js"></script>

      <script src="lib/js/main.js"></script>
    </React.Fragment>
  );
};

let Details = () => {
  return (
    <React.Fragment>
      <Content phone={JSON.parse(localStorage.getItem("details"))} />
    </React.Fragment>
  );
};
export default Details;
