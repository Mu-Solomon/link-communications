import React, { useState } from "react";
import { Link } from "react-router-dom";

import example from "../images/google/google_pixel_2.jpg";

import Slider from "react-slick";
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

let BrandPhone = (props) => {
  return (
    <div class={props.class}>
      <div class="brand__box">
        <img src={props.img} alt="brand-img" />
        <h3>
          UGX<strong class="red"> {props.price}</strong>
        </h3>
        <span>{props.name}</span>
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
  );
};

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
    },
    {
      newStock: [
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
      ],
    },
    {
      brandPhones: [
        {
          img: require("../images/kyocera/Kampeyini_main.jpg"),
          class: "col-xl-4 col-lg-4 col-md-4 col-sm-6 margin",
          price: 150000,
          name: "Kampeyini KYV42",
          sale: true,
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
          img: require("../images/arrows/ARROWS_F-01K_main.jpg"),
          class: "col-xl-4 col-lg-4 col-md-4 col-sm-6 margin",
          price: 250000,
          name: "Arrows Kaliba F01K",
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
          img: require("../images/sharp/Sharp_shv43_main.jpg"),
          class: "col-xl-4 col-lg-4 col-md-4 col-sm-6 margin",
          price: 200000,
          name: "Sharp Champion",
          data: {
            name: "Sharp Champion",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sharp/Sharp_shv43_main.jpg"),
            small_img_one: require("../images/sharp/Sharp_shv43_1.jpg"),
            small_img_two: require("../images/sharp/Sharp_shv43_2.jpg"),
            small_img_three: "",
            storage: "32 GB storage",
            RAM: "3GB RAM",
            size: "5.0 inch display",
            battery: 2580,
            camera: 13,
            actual_price: "UGX 200,000",
            prev_price: "UGX 350,000",
            fingerprint: true,
          },
        },
        {
          img: require("../images/sharp/sharp_alarm_main.jpg"),
          class: "col-xl-4 col-lg-4 col-md-4 col-sm-6",
          price: 200000,
          name: "Sharp Alarm",
          data: {
            name: "Sharp Alarm",
            // D:/DOCUMENTS/PROJECTS/link_com/src/imgs/promotion/kampeyini_home.jpg
            main_img: require("../images/sharp/sharp_alarm_main.jpg"),
            small_img_one: require("../images/sharp/sharp_alarm_small_2.jpg"),
            small_img_two: require("../images/sharp/sharp_alarm_main.jpg"),
            small_img_three: "",
            storage: "32 GB storage",
            RAM: "3GB RAM",
            size: "5.0 inch display",
            battery: 2580,
            camera: 13,
            actual_price: "UGX 200,000",
            prev_price: "UGX 350,000",
          },
        },
        {
          img: require("../images/sharp/Sharp_R2_Compact_main.jpg"),
          class: "col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn",
          price: 300000,
          name: "Sharp R2",
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
          class: "col-xl-4 col-lg-4 col-md-4 col-sm-6 mrgn",
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
      ],
    },
    { brandType: "Sony" },
  ]);
  let date = new Date();
  var Categore = categories[0].catType;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  let newStock_ = categories[1].newStock;
  let BrandPhones = categories[2].brandPhones;
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
          },

          {
            newStock: [...categories[1].newStock],
          },
          {
            brandPhones: [...categories[2].brandPhones],
          },
          {
            brandType: val.target.innerHTML,
          },
        ]);
        break;
      case "Sharp":
        setCategories([
          {
            catType: [
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
          },

          {
            newStock: [...categories[1].newStock],
          },
          {
            brandPhones: [...categories[2].brandPhones],
          },
          {
            brandType: val.target.innerHTML,
          },
        ]);
        break;
      case "Kyocera":
        setCategories([
          {
            catType: [
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
          },

          {
            newStock: [...categories[1].newStock],
          },
          {
            brandPhones: [...categories[2].brandPhones],
          },
          {
            brandType: val.target.innerHTML,
          },
        ]);
        break;
      case "Google":
        setCategories([
          {
            catType: [
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
            ],
          },
          {
            newStock: [...categories[1].newStock],
          },
          {
            brandPhones: [...categories[2].brandPhones],
          },
          {
            brandType: val.target.innerHTML,
          },
        ]);
        break;
      case "Samsung":
        setCategories([
          {
            catType: [
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
            ],
          },
          {
            newStock: [...categories[1].newStock],
          },
          {
            brandPhones: [...categories[2].brandPhones],
          },
          {
            brandType: val.target.innerHTML,
          },
        ]);
        break;
      case "LG":
        setCategories([
          {
            catType: [
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
          },
          {
            newStock: [...categories[1].newStock],
          },
          {
            brandPhones: [...categories[2].brandPhones],
          },
          {
            brandType: val.target.innerHTML,
          },
        ]);
        break;
      case "Arrows":
        setCategories([
          {
            catType: [
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
          {
            newStock: [...categories[1].newStock],
          },
          {
            brandPhones: [...categories[2].brandPhones],
          },
          {
            brandType: val.target.innerHTML,
          },
        ]);
        break;
      default:
        break;
    }
  }
  console.log(categories[0].brandType);
  let activeClass = (element) => {
    /*     setActive(!isActive);     */
  };
  localStorage.removeItem("details");

  return (
    <React.Fragment>
      {/*  <!-- loader  --> */}
      <div class="loader_bg">
        <div class="loader">
          <img src="assets/images/loading.gif" alt="" />
        </div>
      </div>
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
                      <a
                        href="/"
                        onclick={() => {
                          window.location.reload();
                        }}
                      >
                        <img src="assets/images/logo.png" alt="#home_img" />
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
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/brand">Brand</a>
                        </li>
                        <li>
                          <a href="/special">Specials</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
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
                    Japanese Waterproof and screen guard free smartphones <br />{" "}
                    now available in Uganda. at the lowest <br /> price possible
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
                src="assets/images/banner1.png"
                alt="Second slide"
              />
              <div class="container">
                <div class="carousel-caption relative">
                  <span>All New Phones </span>
                  <h1>up to 25% Flat Sale</h1>
                  <p>
                    Japanes Waterproof and screen guard free smartphones <br />{" "}
                    now available in Uganda. at the lowest <br /> price possible
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
                    Japanes Waterproof and screen guard free smartphones <br />{" "}
                    now available in Uganda. at the lowest <br /> price possible
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
              {BrandPhones.map((val, key) => {
                return (
                  <div class={val.class}>
                    <a
                      href="/details#top"
                      onClick={() => {
                        capturePhoneDetails(val.data);
                      }}
                    >
                      <div class="brand__box">
                        <img src={val.img} alt="brand-img" />
                        <h3>
                          UGX <strong class="red">{val.price}</strong>
                        </h3>
                        <span>{val.name}</span>
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
                        <i>
                          <img src="assets/images/star.png" />
                        </i>
                      </div>
                    </a>
                  </div>
                );
              })}

              <div class="col-md-12">
                <a class="read-more" href="/brand">
                  See More
                </a>
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
            <h3>{categories[3].brandType} brands</h3>
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
                    <a
                      class="buynow"
                      href="/details#top"
                      onClick={() => {
                        capturePhoneDetails(val.data);
                      }}
                    >
                      Buy now
                    </a>
                  </div>
                );
              }).slice(0, 8)}
            </div>
          </div>
          <a class="seemore" href="/brand#sharp">
            See more
          </a>
          {/*         <!-- end news brand -->
           */}
          {/*         <!-- news shoes -->
           */}{" "}
          <div id="shoes" class="shoes-bg">
            <h3>New Stock</h3>
            <div class="row">
              {newStock_.map((val) => {
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
                    <a
                      class="buynow"
                      href="/details#top"
                      onClick={() => {
                        capturePhoneDetails(val.data);
                      }}
                    >
                      Buy now
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <a class="seemore" href="/brand">
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
            {/* <ul class="carousel-indicators">
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
            </ul> */}
            {/*      <!-- The slideshow -->
             */}{" "}
            <div class="carousel-inner">
              <Slider {...settings}>
                <div class="carousel-item">
                  <div class="testomonial_section">
                    <div class="full center"></div>
                    <div class="full testimonial_cont text_align_center cross_layout">
                      <div class="cross_inner">
                        <img
                          src={require("../images/profile/solomon.jpg")}
                          class="prof-img img-fluid"
                        />
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
                        <img
                          src={require("../images/profile/mark.jpg")}
                          class="prof-img img-fluid"
                        />
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
                        <img
                          src={require("../images/profile/trump.jpg")}
                          class="prof-img img-fluid"
                        />
                        <h3>
                          Nickmarsial
                          <br />
                          <strong class="ornage_color">Visitor</strong>
                        </h3>
                        <p>
                          This opportunity is awesomely taken to thank the #mgt
                          of Link communincation to provide effective and
                          wholehearted services to the people of Uganda.!
                        </p>
                        <div class="full text_align_center margin_top_30">
                          <img src="assets/icon/testimonial_qoute.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
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
                action="https://formspree.io/f/mlezarqd"
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
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      placeholder="Phone"
                      type="text"
                      name="Phone"
                      pattern="[07][0-9]{9}"
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
                      <a
                        href="https://facebook.com/Linkcomm2014"
                        target="_parent"
                      >
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/Linkcomm2014"
                        target="_parent"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/Linkcomm2014"
                        target="_parent"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="menu-bottom">
                    <ul class="link">
                      <li class="active">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/brand">Brand</a>
                      </li>
                      <li>
                        <a href="/special">Specials</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
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
                <a href="https://www.facebook.com/profile.php?id=100054084329441" target="_parent">
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
      {/* <script src="assets/js/jquery.min.js"></script>
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
      {/*
      <script src="assets/js/owl.carousel.js"></script>
      <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
      <script> */}
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
      }); 
      </script>*/}
    </React.Fragment>
  );
};

export default Home;
