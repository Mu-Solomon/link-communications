import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import ScrollToTop from "react-scroll-to-top";

function capturePhoneDetails(details) {
  window.location.reload();
  localStorage.removeItem("details");
  if (details) {
    localStorage.setItem("details", JSON.stringify(details));
  }
}

class AsNavFor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div class="product-slider-single normal-slider">
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
              fade={true}
            >
              <div>
                <img src={this.props.main_img} alt="Product Image" />
              </div>
              <div>
                <img src={this.props.small_img_one} alt="Product Image" />
              </div>
              <div>
                <img src={this.props.small_img_two} alt="Product Image" />
              </div>
              <div>
                <img src={this.props.small_img_three} alt="Product Image" />
              </div>
            </Slider>
          </div>
          <div class="product-slider-single-nav normal-slider">
            <Slider
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              infinite={true}
            >
              <div class="slider-nav-img">
                <img src={this.props.main_img} alt="Product Image" />
              </div>
              <div class="slider-nav-img">
                <img src={this.props.small_img_one} alt="Product Image" />
              </div>
              <div class="slider-nav-img">
                <img src={this.props.small_img_two} alt="Product Image" />
              </div>
              <div class="slider-nav-img">
                <img src={this.props.small_img_three} alt="Product Image" />
              </div>
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

let ProductContent = (props) => {
  return (
    <div class="col-md-7">
      <div class="product-content">
        <div class="title-2">
          <h2>{props.phone_name}</h2>
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
            {/*  UGX 300K <span>350K</span> */}
            {props.actual_price} <span>{props.prev_price}</span>
          </p>
        </div>
        {/* <div class="p-size">
      <h4>Size:</h4>
      <div class="btn-group btn-group-sm">
        <button type="button" class="btn">
          
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
    */}{" "}
        <div class="p-color">
          <h4>Color:</h4>
          <div class="btn-group btn-group-sm">
            <button type="button" class="btn p_button">
              White
            </button>
            <button type="button" class="btn p_button">
              Black
            </button>
            <button type="button" class="btn p_button">
              Blue
            </button>
          </div>
        </div>
        <div class="action">
          <a class="btn p_button bold-cart" href="#">
            <i class="fa fa-shopping-cart"></i>Add to Cart
          </a>
          <a class="btn p_button bold-cart" href="tel:0757">
            <i class="fa fa-shopping-bag"></i>Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

let PrdouctDetails_B = (props) => {
  const time = new Date();
  var timeMessage = "";
  if (time.getHours() < 12) {
    timeMessage = "good morning";
  } else if (time.getHours() < 18) {
    timeMessage = "good afternoon";
  } else if (time.getHours() < 21) {
    timeMessage = "good evening";
  } else {
    timeMessage = "good night";
  }
  return (
    <div class="row product-detail-bottom">
      <div class="col-lg-12">
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#description">
              Description
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#specification">
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
              It is a <strong>Waterproof</strong> {props.name} device with{" "}
              {props.storage}. Click the Specification Tab and view full
              specification of your machine. And more so don't forget to passby
              the shop and check it out physically. Have a {timeMessage}...!
            </p>
          </div>
          <div id="specification" class="container tab-pane fade">
            <h4>Product specification</h4>
            <ul>
              <li>
                <strong>Waterproof</strong>
              </li>
              <li>{props.storage}</li>
              <li>{props.RAM}</li>
              <li>{props.size}</li>
              <li>{props.battery} mAh</li>
              <li>{props.camera} MP Camera</li>
              {props.fingerprint && <li>Fingerprint</li>}
              {props.iris && <li>With Iris Lock</li>}
            </ul>
          </div>
          <div id="reviews" class="container tab-pane fade">
            <div class="reviews-submitted">
              <div class="reviewer">
                Muyonjo Solomon - <span>01 Jan 2022</span>
              </div>
              <div class="ratting">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <p>Let me c if they are really Waterproof.</p>
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
  );
};

let RelatedItem = (props) => {
  return (
    <div class="product-item">
      <div class="product-title">
        <a href="#">{props.name}</a>
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
          <img class="related-sised" src={props.img} alt="Product Image" />
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
          <span>UGX</span> {props.price}K
        </h3>
        <a
          class="btn"
          href="/details"
          onClick={() => {
            capturePhoneDetails(props.data);
          }}
        >
          <i class="fa fa-shopping-cart"></i>Buy Now
        </a>
      </div>
    </div>
  );
};

let RelatedProducts = () => {
  return (
    <div class="product">
      <div class="section-header">
        <h1>Related Products</h1>
      </div>

      <div class="row align-items-center product-slider product-slider-3">
        <RelatedItem />
      </div>
    </div>
  );
};

let SliderBottomProduct = (props) => {
  return (
    <div class="product-item">
      <div class="product-title">
        <a href="#">{props.name}</a>
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
          <img src={props.img} alt="Product Image" class="img-fluid resised" />
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
          <span>Ugx</span> {props.price}K
        </h3>
        <a
          class="btn"
          href="/details"
          onClick={() => {
            capturePhoneDetails(props.data);
          }}
        >
          <i class="fa fa-shopping-cart"></i>View details
        </a>
      </div>
    </div>
  );
};
let Content = ({ phone }) => {
  const [state, setState] = useState([
    {
      otherPhones: [
        {
          img: require("../images/sony/Sony_X_Performance_main.jpg"),
          price: 300000,
          name: "Sony X Performance",
          data: {
            name: "Sony X Performance",
            name: "Sony Xperia Performance",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sony/Sony_X_Performance_main.jpg"),
            small_img_one: require("../images/sony/Sony_X_Performance_1.jpg"),
            small_img_two: require("../images/sony/Sony_X_Performance_2.jpg"),
            small_img_three: require("../images/sony/Sony_X_Performance_3.jpg"),
            storage: "32 GB storage",
            RAM: "3GB RAM",
            size: "5.0 inch screen size",
            battery: 2700,
            camera: 23,
            actual_price: "UGX 300,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          img: require("../images/sony/sony_xz3_main_home.jpg"),
          price: 800000,
          name: "Sony Xperia XZ3",
          data: {
            name: "Sony Xperia XZ3",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sony/sony_xz3_main_home.jpg"),
            small_img_one: require("../images/sony/sony_xz3_small_1.jpg"),
            small_img_two: require("../images/sony/sony_xz3_small_2.jpg"),
            small_img_three: require("../images/sony/sony_xz3_small_3.jpg"),
            storage: "64 GB storage",
            RAM: "4/6GB RAM",
            size: "5.0 inch screen size",
            battery: 3300,
            camera: 19,
            actual_price: "UGX 800,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          img: require("../images/sony/sony_xz_1.jpg"),
          price: 450000,
          name: "Sony Xperia XZ1",
          data: {
            name: "Sony Xperia XZ1",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sony/sony_xz_main.jpg"),
            small_img_one: require("../images/sony/sony_xz_1.jpg"),
            small_img_two: require("../images/sony/sony_xz_2.jpg"),
            small_img_three: require("../images/sony/sony_xz_3.jpg"),
            storage: "64 GB storage",
            RAM: "4/6GB RAM",
            size: "5.0 inch screen size",
            battery: 3180,
            camera: 19,
            actual_price: "UGX 450,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          img: require("../images/sony/Sony_XZ2_small_3.jpg"),
          price: 400000,
          name: "Sony XZ S",
          data: {
            name: "Sony XZS",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sony/sony_xperia_xzs-main.jpg"),
            small_img_one: require("../images/sony/sony_xperia_xzs-1jpg.jpg"),
            small_img_two: require("../images/sony/sony_xperia_xzs-2jpg.jpg"),
            small_img_three: require("../images/sony/sony_xperia_xzs-2jpg.jpg"),
            storage: "32 GB storage",
            RAM: "4GB RAM",
            size: "5.2 inch screen size",
            battery: 2900,
            camera: 19,
            actual_price: "UGX 400,000",
            prev_price: "UGX 450,000",
            fingerprint: true,
          },
        },
        {
          img: require("../images/sony/sony_xperia_xzs-main.jpg"),
          price: 250000,
          name: "Sony X Compact",
          data: {
            name: "Sony X Compact",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sony/Sony_XZ_Compact.jpg"),
            small_img_one: require("../images/sony/Sony_XZ_Compact_1.jpg"),
            small_img_two: require("../images/sony/Sony_XZ_Compact_2.jpg"),
            small_img_three: require("../images/sony/Sony_XZ_Compact_3.jpg"),
            storage: "32 GB storage",
            RAM: "3GB RAM",
            size: "4.6 inch screen size",
            battery: 2700,
            camera: 19,
            actual_price: "UGX 250,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          img: require("../images/sharp/Sharp_R1_main.jpg"),
          price: 450000,
          name: "Sharp Aquos R2 ",
          sale: true,
          data: {
            name: "Sharp Aquos R2 Compact",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sharp/Sharp_R2_Compact_main.jpg"),
            small_img_one: require("../images/sharp/Sharp_R2_Compact_1.jpg"),
            small_img_two: require("../images/sharp/Sharp_R2_Compact_2.jpg"),
            small_img_three: require("../images/sharp/Sharp_R2_Compact_3.jpg"),
            storage: "64 GB storage",
            RAM: "4GB RAM",
            size: "5.2 inch screen size",
            battery: 2500,
            camera: 22,
            actual_price: "UGX 300,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          img: require("../images/lg/LG_Style_1_main.jpg"),
          price: 450000,
          name: "LG Style 1",
          data: {
            name: "LG Style 1",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/lg/LG_Style_1_main.jpg"),
            small_img_one: require("../images/lg/LG_Style_1_main.jpg"),
            small_img_two: require("../images/lg/LG_Style_1_main.jpg"),
            small_img_three: require("../images/lg/LG_Style_1_main.jpg"),
            storage: "64 GB storage",
            RAM: "4GB RAM",
            size: "5.5 inch screen size",
            battery: 2890,
            camera: 16,
            actual_price: "UGX 450,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          img: require("../images/sharp/Sharp_704_main.webp"),
          price: 200000,
          name: "Sharp 704 SH",
          data: {
            name: "Sharp 704 SH",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sharp/Sharp_704_main.webp"),
            small_img_one: require("../images/sharp/Sharp_704_1.jpg"),
            small_img_two: require("../images/sharp/Sharp_704_1.jpg"),
            small_img_three: require("../images/sharp/Sharp_704_1.jpg"),
            storage: "32 GB Storage",
            RAM: "3 GB RAM",
            size: "5.0 inch screen size",
            battery: 2800,
            camera: 13.1,
            actual_price: "UGX 200,000",
            prev_price: "UGX 700,000",
          },
        },
        {
          img: require("../images/kyocera/Kyocera_basio_3_main.jpg"),
          price: 190000,
          name: "Pasula KYV43",
          data: {
            name: "Pasula KYV43",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/kyocera/Kyocera_basio_3_main.jpg"),
            small_img_one: require("../images/kyocera/Kyocera_basio_3_1.jpg"),
            small_img_two: require("../images/kyocera/Kyocera_basio_3_2.jpg"),
            small_img_three: require("../images/kyocera/Kyocera_basio_3_3.jpg"),
            storage: "32 GB storage",
            RAM: "3GB RAM",
            size: "5.1-6 inch screen size",
            battery: 2940,
            camera: 13,
            actual_price: "UGX 190,000",
            prev_price: "UGX 700,000",
          },
        },
        {
          name: "Google Pixel 3a",
          img: require("../images/google/google_pixel.jpg"),
          price: 550000,
          data: {
            name: "Google Pixel",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/google/google_pixel.jpg"),
            small_img_one: require("../images/google/google_pixel_1.jpg"),
            small_img_two: require("../images/google/google_pixel_2.jpg"),
            small_img_three: require("../images/google/google_pixel_4.jpg"),
            storage: "64 GB storage",
            RAM: "4GB RAM",
            size: "5.6 inch screen size",
            battery: 3000,
            camera: 12,
            actual_price: "UGX 400,000",
            prev_price: "UGX 700,000",
          },
        },
        {
          name: "Galaxy J Feel",
          img: require("../images/galaxy/galaxy_feel.jpg"),
          price: 450000,
          data: {
            name: "Galaxy J Feel",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/galaxy/galaxy_feel.jpg"),
            small_img_one: require("../images/galaxy/galaxy_feel_2.jpg"),
            small_img_two: require("../images/galaxy/galaxy_feel_3.jpg"),
            small_img_three: require("../images/galaxy/galaxy_feel_4.jpg"),
            storage: "32 GB storage",
            RAM: "3GB RAM",
            size: "4.7 inch screen size",
            battery: 3000,
            camera: 16,
            actual_price: "UGX 450,000",
            prev_price: "UGX 700,000",
          },
        },
        {
          name: "Galaxy A30",
          img: require("../images/galaxy/galaxy_V43.jpg"),
          price: 500000,
          data: {
            name: "Galaxy A30",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/galaxy/galaxy_V43.jpg"),
            small_img_one: require("../images/galaxy/galaxy_V43_1.jpg"),
            small_img_two: require("../images/galaxy/galaxy_V43_2.jpg"),
            small_img_three: require("../images/galaxy/galaxy_V43_3.jpg"),
            storage: "64 GB storage",
            RAM: "4GB RAM",
            size: "5.9 inch screen size",
            battery: 3090,
            camera: 13,
            actual_price: "UGX 500,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          name: "LG V30+",
          img: require("../images/lg/lg_main_v30+.jpg"),
          price: 700000,
          data: {
            name: "LG V30+",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/lg/lg_main_v30+.jpg"),
            small_img_one: require("../images/lg/lg_1_v30+.webp"),
            small_img_two: require("../images/lg/lg_2_v30+.jpg"),
            small_img_three: require("../images/lg/lg_3_v30+.webp"),
            storage: "64 GB storage",
            RAM: "4GB RAM",
            size: "5.0 inch screen size",
            battery: 2700,
            camera: 19,
            actual_price: "UGX 700,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          name: "LG Style 2",
          img: require("../images/lg/LG_Style_2_main.jpg"),
          price: 550000,
          data: {
            name: "LG Style 2",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/lg/LG_Style_2_main.jpg"),
            small_img_one: require("../images/lg/LG_Style_2_1.jpg"),
            small_img_two: require("../images/lg/LG_Style_2_2.jpg"),
            small_img_three: require("../images/lg/LG_Style_2_3.jpg"),
            storage: "64 GB storage",
            RAM: "4GB RAM",
            size: "5.7 inch screen size",
            battery: 3000,
            camera: 13,
            actual_price: "UGX 550,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          name: "LG Style 1",
          img: require("../images/lg/LG_Style_1_main.jpg"),
          price: 450000,
          data: {
            name: "LG Style 1",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/lg/LG_Style_1_main.jpg"),
            small_img_one: require("../images/lg/LG_Style_1_main.jpg"),
            small_img_two: require("../images/lg/LG_Style_1_main.jpg"),
            small_img_three: require("../images/lg/LG_Style_1_main.jpg"),
            storage: "64 GB storage",
            RAM: "4GB RAM",
            size: "5.5 inch screen size",
            battery: 2890,
            camera: 16,
            actual_price: "UGX 450,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
        {
          name: "LG V39",
          img: require("../images/lg/LG_V39_main.jpg"),
          price: 300000,
          data: {
            name: "LG V39",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/lg/LG_V39_main.jpg"),
            small_img_one: require("../images/lg/LG_V39_1.jpg"),
            small_img_two: require("../images/lg/LG_V39_2.jpg"),
            small_img_three: require("../images/lg/LG_V39_3.jpg"),
            storage: "64 GB storage",
            RAM: "4GB RAM",
            size: "6.0 inch screen size",
            battery: 3300,
            camera: 16,
            actual_price: "UGX 300,000",
            prev_price: "UGX 700,000",
            fingerprint: true,
          },
        },
      ],
      relatedPhones: {
        sony: [
          {
            img: require("../images/sony/Sony_XZ2_small_3.jpg"),
            price: 600000,
            name: "Sony Xperia XZ2",
            sale: true,
            data: {
              name: "Sony Xperia XZ2",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sony/Sony XZ2 .png"),
              small_img_one: require("../images/sony/Sony_XZ2_small_1.jpg"),
              small_img_two: require("../images/sony/Sony_XZ2_small_2.jpg"),
              small_img_three: require("../images/sony/Sony_XZ2_small_3.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "5.0 inch screen size",
              battery: 2700,
              camera: 19,
              actual_price: "UGX 600,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            img: require("../images/sony/Sony_X_Performance_main.jpg"),
            price: 300000,
            name: "Sony X Performance",
            data: {
              name: "Sony X Performance",
              name: "Sony Xperia Performance",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sony/Sony_X_Performance_main.jpg"),
              small_img_one: require("../images/sony/Sony_X_Performance_1.jpg"),
              small_img_two: require("../images/sony/Sony_X_Performance_2.jpg"),
              small_img_three: require("../images/sony/Sony_X_Performance_3.jpg"),
              storage: "32 GB storage",
              RAM: "3GB RAM",
              size: "5.0 inch screen size",
              battery: 2700,
              camera: 23,
              actual_price: "UGX 300,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            img: require("../images/sony/sony_xz3_main_home.jpg"),
            price: 800000,
            name: "Sony Xperia XZ3",
            data: {
              name: "Sony Xperia XZ3",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sony/sony_xz3_main_home.jpg"),
              small_img_one: require("../images/sony/sony_xz3_small_1.jpg"),
              small_img_two: require("../images/sony/sony_xz3_small_2.jpg"),
              small_img_three: require("../images/sony/sony_xz3_small_3.jpg"),
              storage: "64 GB storage",
              RAM: "4/6GB RAM",
              size: "5.0 inch screen size",
              battery: 3300,
              camera: 19,
              actual_price: "UGX 800,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            img: require("../images/sony/sony_xz_1.jpg"),
            price: 450000,
            name: "Sony Xperia XZ1",
            data: {
              name: "Sony Xperia XZ1",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sony/sony_xz_main.jpg"),
              small_img_one: require("../images/sony/sony_xz_1.jpg"),
              small_img_two: require("../images/sony/sony_xz_2.jpg"),
              small_img_three: require("../images/sony/sony_xz_3.jpg"),
              storage: "64 GB storage",
              RAM: "4/6GB RAM",
              size: "5.0 inch screen size",
              battery: 3180,
              camera: 19,
              actual_price: "UGX 450,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            img: require("../images/sony/Sony_XZ2_small_3.jpg"),
            price: 400000,
            name: "Sony XZ S",
            data: {
              name: "Sony XZS",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sony/sony_xperia_xzs-main.jpg"),
              small_img_one: require("../images/sony/sony_xperia_xzs-1jpg.jpg"),
              small_img_two: require("../images/sony/sony_xperia_xzs-2jpg.jpg"),
              small_img_three: require("../images/sony/sony_xperia_xzs-2jpg.jpg"),
              storage: "32 GB storage",
              RAM: "4GB RAM",
              size: "5.2 inch screen size",
              battery: 2900,
              camera: 19,
              actual_price: "UGX 400,000",
              prev_price: "UGX 450,000",
              fingerprint: true,
            },
          },
          {
            img: require("../images/sony/sony_xperia_xzs-main.jpg"),
            price: 250000,
            name: "Sony X Compact",
            data: {
              name: "Sony X Compact",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sony/Sony_XZ_Compact.jpg"),
              small_img_one: require("../images/sony/Sony_XZ_Compact_1.jpg"),
              small_img_two: require("../images/sony/Sony_XZ_Compact_2.jpg"),
              small_img_three: require("../images/sony/Sony_XZ_Compact_3.jpg"),
              storage: "32 GB storage",
              RAM: "3GB RAM",
              size: "4.6 inch screen size",
              battery: 2700,
              camera: 19,
              actual_price: "UGX 250,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
        ],
        Sharp: [
          {
            name: "Sharp Aquos R2 Compact",
            img: require("../images/sharp/Sharp_R2_Compact_main.jpg"),
            price: 300000,
            data: {
              name: "Sharp Aquos R2 Compact",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_R2_Compact_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_R2_Compact_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_R2_Compact_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_R2_Compact_3.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "5.2 inch screen size",
              battery: 2500,
              camera: 22,
              actual_price: "UGX 300,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "Sharp Aquos R2 ",
            img: require("../images/sharp/Sharp_R2_1_main.jpg"),
            price: 450000,
            data: {
              name: "Sharp Aquos R2",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_R2_1_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_R2_1_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_R2_1_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_R2_1_3.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "6.0 inch screen size",
              battery: 3130,
              camera: 22,
              actual_price: "UGX 450,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "Sharp 940SH ",
            img: require("../images/sharp/sharp_904sh_main.jpg"),
            price: 150000,
            data: {
              name: "Sharp 904SH",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/sharp_904sh_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_904sh_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_904sh_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_904sh_2.jpg"),
              storage: "Null",
              RAM: "Null",
              size: "3.4 inch screen size",
              battery: "Li-Pro",
              camera: 12,
              actual_price: "UGX 150,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Sharp Aquos crystal ",
            img: require("../images/sharp/Sharp_Aquos_crystal_main.png"),
            price: 150000,
            data: {
              name: "Sharp Aquos crystal",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_Aquos_crystal_main.png"),
              small_img_one: require("../images/sharp/Sharp_Aquos_crystal_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_Aquos_crystal_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_Aquos_crystal_3.jpg"),
              storage: "8 GB Storage",
              RAM: "1.5 GB RAM",
              size: "5.0 inch screen size",
              battery: 2040,
              camera: 8,
              actual_price: "UGX 150,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Sharp Aquos crystal 2",
            img: require("../images/sharp/Sharp_Aquos_crystal_2_main.jpg"),
            price: 180000,
            data: {
              name: "Sharp Aquos crystal 2",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_Aquos_crystal_2_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_Aquos_crystal_2_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_Aquos_crystal_2_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_Aquos_crystal_2_3.jpg"),
              storage: "16 GB Storage",
              RAM: "2 GB RAM",
              size: "5.2 inch screen size",
              battery: 2030,
              camera: 8,
              actual_price: "UGX 180,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Sharp Aquos R3",
            img: require("../images/sharp/Sharp_R3_main.webp"),
            price: 550000,
            data: {
              name: "Sharp Aquos R3",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_R3_main.webp"),
              small_img_one: require("../images/sharp/Sharp_R3_1.webp"),
              small_img_two: require("../images/sharp/Sharp_R3_2.webp"),
              small_img_three: require("../images/sharp/Sharp_R3_3.webp"),
              storage: "128 GB Storage",
              RAM: "6 GB RAM",
              size: "6.2 inch screen size",
              battery: 3200,
              camera: 8,
              actual_price: "UGX 550,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "Sharp 704 SH",
            img: require("../images/sharp/Sharp_704_main.webp"),
            price: 200000,
            data: {
              name: "Sharp 704 SH",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_704_main.webp"),
              small_img_one: require("../images/sharp/Sharp_704_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_704_1.jpg"),
              small_img_three: require("../images/sharp/Sharp_704_1.jpg"),
              storage: "32 GB Storage",
              RAM: "3 GB RAM",
              size: "5.0 inch screen size",
              battery: 2800,
              camera: 13.1,
              actual_price: "UGX 200,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Sharp SHV43",
            img: require("../images/sharp/Sharp_shv43_main.jpg"),
            price: 300000,
            data: {
              name: "Sharp SHV43",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_shv43_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_shv43_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_shv43_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_shv43_3.jpg"),
              storage: "32GB Storage",
              RAM: "3 GB RAM",
              size: "5.5 inch screen size",
              battery: 2700,
              camera: 12,
              actual_price: "UGX 300,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "Sharp SHV40",
            img: require("../images/sharp/Sharp_shv40_main.jpg"),
            price: 250000,
            data: {
              name: "Sharp SHV40",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_shv40_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_shv40_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_shv40_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_shv40_3.jpg"),
              storage: "32GB Storage",
              RAM: "3 GB RAM",
              size: "5 inch screen size",
              battery: 2700,
              camera: 13.1,
              actual_price: "UGX 250,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "Sharp SHV41",
            img: require("../images/sharp/Sharp_shv41_main.jpg"),
            price: 250000,
            data: {
              name: "Sharp SHV41",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_shv41_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_shv41_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_shv41_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_shv41_3.jpg"),
              storage: "32GB Storage",
              RAM: "3 GB RAM",
              size: "4.9inch screen size",
              battery: 2500,
              camera: 16.4,
              actual_price: "UGX 250,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Sharp SHV39",
            img: require("../images/sharp/Sharp_shv39_main.jpg"),
            price: 400000,
            data: {
              name: "Sharp SHV39",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_shv39_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_shv39_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_shv39_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_shv39_3.jpg"),
              storage: "64GB Storage",
              RAM: "4 GB RAM",
              size: "5.3inch screen size",
              battery: 3000,
              camera: 22.6,
              actual_price: "UGX 400,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Sharp 04H ",
            img: require("../images/sharp/Sharp_sh04h_main.jpg"),
            price: 280000,
            data: {
              name: "Sharp 04H",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/sharp/Sharp_sh04h_main.jpg"),
              small_img_one: require("../images/sharp/Sharp_sh04h_1.jpg"),
              small_img_two: require("../images/sharp/Sharp_sh04h_2.jpg"),
              small_img_three: require("../images/sharp/Sharp_sh04h_3.jpg"),
              storage: "32GB Storage",
              RAM: "3 GB RAM",
              size: "4.9 inch screen size",
              battery: 3000,
              camera: 22.6,
              actual_price: "UGX 280,000",
              prev_price: "UGX 700,000",
            },
          },
        ],
        kyocera: [
          {
            name: "Pasula KYV43",
            img: require("../images/kyocera/Kyocera_basio_3_main.jpg"),
            price: 190000,
            data: {
              name: "Pasula KYV43",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Kyocera_basio_3_main.jpg"),
              small_img_one: require("../images/kyocera/Kyocera_basio_3_1.jpg"),
              small_img_two: require("../images/kyocera/Kyocera_basio_3_2.jpg"),
              small_img_three: require("../images/kyocera/Kyocera_basio_3_3.jpg"),
              storage: "32 GB storage",
              RAM: "3GB RAM",
              size: "5.1-6 inch screen size",
              battery: 2940,
              camera: 13,
              actual_price: "UGX 190,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Kampeyini KYV42",
            img: require("../images/kyocera/Kampeyini_main.jpg"),
            price: 150000,
            data: {
              name: "Kampeyini KYV42",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Kampeyini_main.jpg"),
              small_img_one: require("../images/kyocera/Kampeyini_1.jpg"),
              small_img_two: require("../images/kyocera/Kampeyini_2.jpg"),
              small_img_three: require("../images/kyocera/Kampeyini_3.jpg"),
              storage: "16 GB storage",
              RAM: "2GB RAM",
              size: "5.0 inch screen size",
              battery: 3000,
              camera: 13,
              actual_price: "UGX 150,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Basio KYV42",
            img: require("../images/kyocera/Kyocera_basio_2_main(copy).jpg"),
            price: 150000,
            data: {
              name: "Basio KYV42",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Kyocera_basio_2_main(copy).jpg"),
              small_img_one: require("../images/kyocera/Kyocera_basio_2_1.jpg"),
              small_img_two: require("../images/kyocera/Kyocera_basio_2_2.jpg"),
              small_img_three: require("../images/kyocera/Kyocera_basio_2_3.jpg"),
              storage: "16 GB storage",
              RAM: "2GB RAM",
              size: "5.0 inch screen size",
              battery: 2600,
              camera: 13,
              actual_price: "UGX 150,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Digno 602KC",
            img: require("../images/kyocera/Digno_main.jpg"),
            price: 150000,
            data: {
              name: "Digno 602KC",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Digno_main.jpg"),
              small_img_one: require("../images/kyocera/Digno_1.jpg"),
              small_img_two: require("../images/kyocera/Digno_2.jpg"),
              small_img_three: require("../images/kyocera/Digno_3.jpg"),
              storage: "8 GB storage",
              RAM: "1.5GB RAM",
              size: "4.50 inch screen size",
              battery: 2300,
              camera: 5,
              actual_price: "UGX 150,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Kyocera Kyv44 ",
            img: require("../images/kyocera/Kyv44_main.jpg"),
            price: 230000,
            data: {
              name: "Kyocera Kyv44 ",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Kyv44_main.jpg"),
              small_img_one: require("../images/kyocera/Kyv44_1.jpg"),
              small_img_two: require("../images/kyocera/Kyv44_2.jpg"),
              small_img_three: require("../images/kyocera/Kyv44_3.jpg"),
              storage: "32 GB storage",
              RAM: "3GB RAM",
              size: "5.0 inch screen size",
              battery: 2600,
              camera: 13,
              actual_price: "UGX 230,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Android One S6",
            img: require("../images/kyocera/Kyocera_android_one_S6.jpg"),
            price: 180000,
            data: {
              name: "Android One S6 ",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Kyocera_android_one_S6.jpg"),
              small_img_one: require("../images/kyocera/Kyocera_android_one_S6_1.jpg"),
              small_img_two: require("../images/kyocera/Kyocera_android_one_S6_2.jpg"),
              small_img_three: require("../images/kyocera/Kyocera_android_one_S6_2.jpg"),
              storage: "32 GB storage",
              RAM: "3GB RAM",
              size: "5.84 inch screen size",
              battery: 3050,
              camera: 16,
              actual_price: "UGX 180,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "Urbano KYV45",
            img: require("../images/kyocera/Urbano_main(copy).jpg"),
            price: 350000,
            data: {
              name: "Urbano KYV45",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Urbano_main(copy).jpg"),
              small_img_one: require("../images/kyocera/Urbano_1.jpg"),
              small_img_two: require("../images/kyocera/Urbano_2.jpg"),
              small_img_three: require("../images/kyocera/Urbano_3.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "5.7 inch screen size",
              battery: 2800,
              camera: 16,
              actual_price: "UGX 350,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "Torque KYV46",
            img: require("../images/kyocera/Torque_main.jpg"),
            price: 350000,
            data: {
              name: "Torque KYV46",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Torque_main.jpg"),
              small_img_one: require("../images/kyocera/Torque_1.jpg"),
              small_img_two: require("../images/kyocera/Torque_2.jpg"),
              small_img_three: require("../images/kyocera/Torque_3.jpg"),
              storage: "64 GB storage",
              RAM: "4 RAM",
              size: "5 inch screen size",
              battery: 1500,
              camera: 23.8,
              actual_price: "UGX 350,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Kyocera Hydro C5170",
            img: require("../images/kyocera/Kyocera_hydro_main.jpg"),
            price: 250000,
            data: {
              name: "Kyocera Hydro C5170",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Kyocera_hydro_main.jpg"),
              small_img_one: require("../images/kyocera/Kyocera_hydro_1.jpg"),
              small_img_two: require("../images/kyocera/Kyocera_hydro_2.jpg"),
              small_img_three: require("../images/kyocera/Kyocera_hydro_3.jpg"),
              storage: "8 GB storage",
              RAM: "512M RAM",
              size: "3.5 inch screen size",
              battery: 1500,
              camera: 3,
              actual_price: "UGX 250,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Kyocera Rafre KYV40",
            img: require("../images/kyocera/Kyocera_Rafre_KYV40_main.jpg"),
            price: 180000,
            data: {
              name: "Kyocera Rafre KYV40",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/kyocera/Kyocera_Rafre_KYV40_main.jpg"),
              small_img_one: require("../images/kyocera/Kyocera_Rafre_KYV40_1.jpg"),
              small_img_two: require("../images/kyocera/Kyocera_Rafre_KYV40_2.jpg"),
              small_img_three: require("../images/kyocera/Kyocera_Rafre_KYV40_3.jpg"),
              storage: "16 GB storage",
              RAM: "2GB RAM",
              size: "5 inch screen size",
              battery: 3000,
              camera: 13,
              actual_price: "UGX 180,000",
              prev_price: "UGX 700,000",
            },
          },
        ],
        google: [
          {
            name: "Google Pixel 3a",
            img: require("../images/google/google_pixel.jpg"),
            price: 550000,
            data: {
              name: "Google Pixel",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/google/google_pixel.jpg"),
              small_img_one: require("../images/google/google_pixel_1.jpg"),
              small_img_two: require("../images/google/google_pixel_2.jpg"),
              small_img_three: require("../images/google/google_pixel_4.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "5.6 inch screen size",
              battery: 3000,
              camera: 12,
              actual_price: "UGX 400,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Galaxy J Feel",
            img: require("../images/galaxy/galaxy_feel.jpg"),
            price: 450000,
            data: {
              name: "Galaxy J Feel",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/galaxy/galaxy_feel.jpg"),
              small_img_one: require("../images/galaxy/galaxy_feel_2.jpg"),
              small_img_two: require("../images/galaxy/galaxy_feel_3.jpg"),
              small_img_three: require("../images/galaxy/galaxy_feel_4.jpg"),
              storage: "32 GB storage",
              RAM: "3GB RAM",
              size: "4.7 inch screen size",
              battery: 3000,
              camera: 16,
              actual_price: "UGX 450,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Galaxy A30",
            img: require("../images/galaxy/galaxy_V43.jpg"),
            price: 500000,
            data: {
              name: "Galaxy A30",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/galaxy/galaxy_V43.jpg"),
              small_img_one: require("../images/galaxy/galaxy_V43_1.jpg"),
              small_img_two: require("../images/galaxy/galaxy_V43_2.jpg"),
              small_img_three: require("../images/galaxy/galaxy_V43_3.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "5.9 inch screen size",
              battery: 3090,
              camera: 13,
              actual_price: "UGX 500,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "LG V30+",
            img: require("../images/lg/lg_main_v30+.jpg"),
            price: 700000,
            data: {
              name: "LG V30+",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/lg/lg_main_v30+.jpg"),
              small_img_one: require("../images/lg/lg_1_v30+.webp"),
              small_img_two: require("../images/lg/lg_2_v30+.jpg"),
              small_img_three: require("../images/lg/lg_3_v30+.webp"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "5.0 inch screen size",
              battery: 2700,
              camera: 19,
              actual_price: "UGX 700,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "LG Style 2",
            img: require("../images/lg/LG_Style_2_main.jpg"),
            price: 550000,
            data: {
              name: "LG Style 2",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/lg/LG_Style_2_main.jpg"),
              small_img_one: require("../images/lg/LG_Style_2_1.jpg"),
              small_img_two: require("../images/lg/LG_Style_2_2.jpg"),
              small_img_three: require("../images/lg/LG_Style_2_3.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "5.7 inch screen size",
              battery: 3000,
              camera: 13,
              actual_price: "UGX 550,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "LG Style 1",
            img: require("../images/lg/LG_Style_1_main.jpg"),
            price: 450000,
            data: {
              name: "LG Style 1",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/lg/LG_Style_1_main.jpg"),
              small_img_one: require("../images/lg/LG_Style_1_main.jpg"),
              small_img_two: require("../images/lg/LG_Style_1_main.jpg"),
              small_img_three: require("../images/lg/LG_Style_1_main.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "5.5 inch screen size",
              battery: 2890,
              camera: 16,
              actual_price: "UGX 450,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "LG V39",
            img: require("../images/lg/LG_V39_main.jpg"),
            price: 300000,
            data: {
              name: "LG V39",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/lg/LG_V39_main.jpg"),
              small_img_one: require("../images/lg/LG_V39_1.jpg"),
              small_img_two: require("../images/lg/LG_V39_2.jpg"),
              small_img_three: require("../images/lg/LG_V39_3.jpg"),
              storage: "64 GB storage",
              RAM: "4GB RAM",
              size: "6.0 inch screen size",
              battery: 3300,
              camera: 16,
              actual_price: "UGX 300,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
        ],
        arrows: [
          {
            name: "Arrows F-05J",
            img: require("../images/arrows/ARROWS_F-05_main.jpg"),
            price: 200000,
            data: {
              name: "Arrows F-05J",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/arrows/ARROWS_F-05_main.jpg"),
              small_img_one: require("../images/arrows/ARROWS_F-05_1.jpg"),
              small_img_two: require("../images/arrows/ARROWS_F-05_2.jpg"),
              small_img_three: require("../images/arrows/ARROWS_F-05_3.jpg"),
              storage: "16 GB storage",
              RAM: "2GB RAM",
              size: "5.0 inch screen size",
              battery: 2580,
              camera: 13,
              actual_price: "UGX 200,000",
              prev_price: "UGX 700,000",
            },
          },
          {
            name: "Arrows Kaliba F-01K",
            img: require("../images/arrows/ARROWS_F-01K_main.jpg"),
            price: 250000,
            data: {
              name: "Arrows Kaliba F-01K",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/arrows/ARROWS_F-01K_main.jpg"),
              small_img_one: require("../images/arrows/ARROWS_F-01K_1.jpg"),
              small_img_two: require("../images/arrows/ARROWS_F-01K_2.jpg"),
              small_img_three: require("../images/arrows/ARROWS_F-01K_3.jpg"),
              storage: "32 GB storage",
              RAM: "4GB RAM",
              size: "5.2 inch screen size",
              battery: 2580,
              camera: 23,
              actual_price: "UGX 250,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
              iris: true,
            },
          },
          {
            name: "Arrows F-02L",
            img: require("../images/arrows/ARROWS_F-41A_main.jpg"),
            price: 300000,
            data: {
              name: "Arrows F-02L",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/arrows/ARROWS_F-41A_main.jpg"),
              small_img_one: require("../images/arrows/ARROWS_F-41A_1.jpg"),
              small_img_two: require("../images/arrows/ARROWS_F-41A_1.jpg"),
              small_img_three: require("../images/arrows/ARROWS_F-41A_1.jpg"),
              storage: "32 GB storage",
              RAM: "3GB RAM",
              size: "5.6 inch screen size",
              battery: 2780,
              camera: 13,
              actual_price: "UGX 300,000",
              prev_price: "UGX 700,000",
              fingerprint: true,
            },
          },
          {
            name: "Arrows F-01J",
            img: require("../images/arrows/ARROWS_F-01J_main.jpg"),
            price: 280000,
            data: {
              name: "Arrows F-01J",
              // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
              main_img: require("../images/arrows/ARROWS_F-01J_main.jpg"),
              small_img_one: require("../images/arrows/ARROWS_F-01J_1.jpg"),
              small_img_two: require("../images/arrows/ARROWS_F-01J_2.jpg"),
              small_img_three: require("../images/arrows/ARROWS_F-01J_3.jpg"),
              storage: "32 GB storage",
              RAM: "3GB RAM",
              size: "5.5 inch screen size",
              battery: 2850,
              camera: 23,
              actual_price: "UGX 280,000",
              prev_price: "UGX 700,000",
              iris: true,
            },
          },
        ],
      },
    },
  ]);

  let date = new Date();
  var $relatedPhones;
  if (phone.name.includes("Sharp")) {
    $relatedPhones = state[0].relatedPhones.Sharp;
  } else if (phone.name.includes("Sony")) {
    $relatedPhones = state[0].relatedPhones.sony;
  } else if (phone.name.includes("Arrows")) {
    $relatedPhones = state[0].relatedPhones.arrows;
  } else if (phone.name.includes("Kyocera")) {
    $relatedPhones = state[0].relatedPhones.kyocera;
  } else if (
    phone.name.includes("Google") ||
    phone.name.includes("Samsung") | phone.name.includes("LG")
  ) {
    $relatedPhones = state[0].relatedPhones.google;
  } else if (phone.name.includes("Sharp")) {
    $relatedPhones = state[0].relatedPhones.Sharp;
  } else {
    $relatedPhones = state[0].relatedPhones.google;
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  var settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        <ScrollToTop />
        <div class="header">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo">
                      <Link to="/">
                        <img
                          src="assets/images/logo.png"
                          alt="#home_img"
                          id="top"
                          onclick={() => {
                            window.location.reload();
                          }}
                        />
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
                            onclick={() => {
                              window.location.reload();
                            }}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about"
                            onclick={() => {
                              window.location.reload();
                            }}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/brand"
                            onclick={() => {
                              window.location.reload();
                            }}
                          >
                            Brand
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/special"
                            onclick={() => {
                              window.location.reload();
                            }}
                          >
                            Specials
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            onclick={() => {
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

      {/* <!-- Breadcrumb Start --> */}
      {/*  <div class="breadcrumb-wrap">
      <div class="container-fluid">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Products</a></li>
          <li class="breadcrumb-item active">Product Detail</li>
        </ul>
      </div>
    </div> */}
      {/* <!-- Breadcrumb End --> */}

      <div class="product-detail">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <div class="product-detail-top">
                <div class="row align-items-center">
                  <div class="col-md-5">
                    {/* <div class="product-slider-single normal-slider">
                      <img src={phone.main_img} alt="Product Image" />
                      <img src={phone.small_img_one} alt="Product Image" />
                      <img src={phone.small_img_two} alt="Product Image" />
                      <img src={phone.small_img_three} alt="Product Image" />
                    </div>
                    <div class="product-slider-single-nav normal-slider">
                      <div class="slider-nav-img">
                        <img src={phone.main_img} alt="Product Image" />
                      </div>
                      <div class="slider-nav-img">
                        <img src={phone.small_img_one} alt="Product Image" />
                      </div>
                      <div class="slider-nav-img">
                        <img src={phone.small_img_two} alt="Product Image" />
                      </div>
                      <div class="slider-nav-img">
                        <img src={phone.small_img_three} alt="Product Image" />
                      </div>
                    </div> */}
                    <AsNavFor
                      main_img={phone.main_img}
                      small_img_one={phone.small_img_one}
                      small_img_two={phone.small_img_two}
                      small_img_three={phone.small_img_three}
                    />
                  </div>
                  <ProductContent
                    phone_name={phone.name}
                    actual_price={phone.actual_price}
                    prev_price={phone.prev_price}
                  />
                </div>
              </div>

              <PrdouctDetails_B
                name={phone.name}
                storage={phone.storage}
                RAM={phone.RAM}
                battery={phone.battery}
                camera={phone.camera}
                size={phone.size}
                fingerprint={phone.fingerprint}
                iris={phone.iris}
              />

              <div class="product">
                <div class="section-header">
                  <h1 id="related-head">Related Products</h1>
                </div>

                <div class="align-items-center product-slider product-slider-3">
                  <Slider {...settings2}>
                    {$relatedPhones.map((val, key) => {
                      return (
                        <RelatedItem
                          name={val.name}
                          price={val.price.toLocaleString("en-US").slice(0, 3)}
                          data={val.data}
                          img={val.img}
                        />
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <div class="col-lg-4 sidebar">
              {/*  <div class="sidebar-widget category">
                <h2 class="title-2">Category</h2>
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
              */}{" "}
              <div class="sidebar-widget brands">
                <h2 class="title-2">Our Brands</h2>
                <ul>
                  <li>
                    <a href="/#categories">Sharp </a>
                    <span>(45)</span>
                  </li>
                  <li>
                    <a href="/#categories">Kyocera </a>
                    <span>(34)</span>
                  </li>
                  <li>
                    <a href="/#categories">Google </a>
                    <span>(1)</span>
                  </li>
                  <li>
                    <a href="/#categories">Samsung</a>
                    <span>(74)</span>
                  </li>
                  <li>
                    <a href="/#categories">Sony </a>
                    <span>(89)</span>
                  </li>
                  <li>
                    <a href="/#categories">Arrows</a>
                    <span>(28)</span>
                  </li>
                  <li>
                    <a href="/#categories">LG</a>
                    <span>(28)</span>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget widget-slider">
                <div class="sidebar-slider normal-slider">
                  <Slider {...settings}>
                    {/* <SliderBottomProduct name="Urbano KYV45" price={450000} /> */}
                    {state[0].otherPhones.map((val, key) => {
                      return (
                        <SliderBottomProduct
                          name={val.name}
                          price={val.price.toLocaleString("en-US").slice(0, 3)}
                          img={val.img}
                          data={val.data}
                        />
                      );
                    })}
                    {/* <SliderBottomProduct />
                  <SliderBottomProduct />
                  <SliderBottomProduct /> */}
                  </Slider>
                </div>
              </div>
              {/*   <div class="sidebar-widget brands">
                <h2 class="title-2">Our Brands</h2>
                <ul>
                  <li>
                    <a href="#">Sharp </a>
                    <span>(45)</span>
                  </li>
                  <li>
                    <a href="#">Kyocera </a>
                    <span>(34)</span>
                  </li>
                  <li>
                    <a href="#">Google </a>
                    <span>(1)</span>
                  </li>
                  <li>
                    <a href="#">Samsung</a>
                    <span>(74)</span>
                  </li>
                  <li>
                    <a href="#">Sony </a>
                    <span>(89)</span>
                  </li>
                  <li>
                    <a href="#">Arrows</a>
                    <span>(28)</span>
                  </li>
                  <li>
                    <a href="#">LG</a>
                    <span>(28)</span>
                  </li>
                </ul>
              </div>
             */}{" "}
              <div class="sidebar-widget tag">
                <h2 class="title-2">Tags Cloud</h2>
                <a href="#">RAM</a>
                <a href="#">128GB Storage</a>
                <a href="#">MP Camera</a>
                <a href="#">Fingerprint</a>
                <a href="#">Waterproof</a>
                <a href="#">Iris Lock</a>
              </div>
            </div>
          </div>
        </div>
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
                        <Link
                          to="/"
                          onclick={() => {
                            window.location.reload();
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          onclick={() => {
                            window.location.reload();
                          }}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/brand"
                          onclick={() => {
                            window.location.reload();
                          }}
                        >
                          Brand
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/special"
                          onclick={() => {
                            window.location.reload();
                          }}
                        >
                          Specials
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          onclick={() => {
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
      <div class="body-color">
        <Content phone={JSON.parse(localStorage.getItem("details"))} />
      </div>
    </React.Fragment>
  );
};
export default Details;
