import React, { useState } from "react";
import { Link } from "react-router-dom";

let Special = () => {
  let date = new Date();
  var time = new Date();
  var timeMessage = "";
  if (time.getHours() < 12) {
    timeMessage = " morning";
  } else if (time.getHours() < 18) {
    timeMessage = " afternoon";
  } else if (time.getHours() < 21) {
    timeMessage = " evening";
  } else {
    timeMessage = " night";
  }
  const [state, setState] = useState([
    {
      quote:
        "Ask and it shall be given to you, knock and it will be opened unto thee, Seek and you'll find.",
      author: "Jesus",
    },
    {
      quote:
        "Ever Tried. Ever failed. No matter. Try again. Fail again. Fail better.",
      author: "Samuel Beckett",
    },
    {
      quote: "Someday is not a day of the week.",
      author: "Denise Brennan-Nelson",
    },
    {
      quote:
        "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times. ",
      author: "Bruce Lee ",
    },
    {
      quote:
        "Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it. Impossible is not a fact. It's an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing. ",
      author: " Muhammad Ali",
    },
    {
      quote: "Quality is not an act, it is a habit. ",
      author: "Aristotle",
    },
    {
      quote: " Never go to bed mad. Stay up and fight. ",
      author: "Phyllis Diller",
    },
    {
      quote: "Once we accept our limits, we go beyond them.",
      author: "Albert Einstein ",
    },
    {
      quote:
        "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
      author: "Maya Angelou",
    },
    {
      quote: "The harder I work, the luckier I get.",
      author: "Gary Player",
    },
    {
      quote:
        "The only limit to our realization of tomorrow, will be our doubts of today. ",
      author: " Franklin D. Roosevelt",
    },
    {
      quote: " We first make our habits, then our habits make us.",
      author: "  John Dryden",
    },
    {
      quote:
        "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them. ",
      author: "William Shakespeare",
    },
    {
      quote: " Light tomorrow with today.",
      author: "Elizabeth Barrett Browning",
    },
    {
      quote:
        " The very boiling water that hardens the egg, softens the potato.",
      author: " Pr. Caleb Mbabali",
    },
    {
      quote:
        " If you cannot fly then run, if you cant run then walk if you cannot walk then crow but whatever you do, do it moving forward!!",
      author: " Martin Luther King ",
    },
    {
      quote:
        " Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
      author: "Eric Raymond ",
    },
    {
      quote:
        "Even if you're on the right track, you'll get run over if you just sit there.",
      author: "Will Rogers",
    },
    {
      quote:
        "I know, somehow, that only when it is dark enough can you see the stars.",
      author: "Martin Luther King Jr. ",
    },
    {
      quote: " Whether you think you can or think you can't, you're right.",
      author: " Henry Ford ",
    },
    {
      quote: "You only live once, but if you do it right, once is enough. ",
      author: "Mae West ",
    },
    {
      quote: "Don't watch the clock. Do what it does. Keep going. ",
      author: " Sam Levenson",
    },
    {
      quote:
        " Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "  Mahatma Gandhi",
    },
    {
      quote:
        "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step. ",
      author: " Lao Tzu ",
    },
    {
      quote: ' Nothing is impossible, the word itself says "I\'m possible"!',
      author: " Audrey Hepburn",
    },
    {
      quote: " Tough times never last, but tough people do.",
      author: "Dr. Robert Schuller ",
    },
    {
      quote: " You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky ",
    },
    {
      quote:
        "A person without an organised system of thoughts is always at the mercy of a person who has one ",
      author: "Edward Col ",
    },
    {
      quote:
        " Sadly, what we are finding in our company is that one of our best thinkers have never seen the University gate.",
      author: "Sir Robert Johns ",
    },
    {
      quote:
        " Every tree shade you see was planted by someone! Everything you see was someone's decision",
      author: " Ev. Katushabe",
    },
    {
      quote: " Time is the wisest councilor of all time!",
      author: "...Greek  ",
    },
    {
      quote: ` If you want to know the value of one year ask the student who failed a class because of one subject
    If you want to know the value of a month ask the mother who gave birth to a premature baby
    If you want to know the value of one hour ask a lover who's waiting to meet
    If you want to know the value of one minute ask a peerson who missed a train
    If you want to know the value of one second ask a person who just escaped death in a car accident.
    If you want to know the value of a 100th of a second ask the athelete who won a silver medal in the olympics `,
      author: "unknown",
    },
  ]);
  let storeLength = state.length;
  let int = Math.floor(Math.random() * storeLength);
  let intQuote = state[int].quote;
  let intAuthor = state[int].author;
  return (
    <React.Fragment>
      {/*   <div class="loader_bg">
        <div class="loader">
          <img src="assets/images/loading.gif" alt="" />
        </div>
      </div> */}
      <header>
        {/*         <!-- header inner -->
         */}{" "}
        <div class="header" id="top">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo">
                      <a href="/">
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
                  <a class="buynow" href="/#brand">
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
                    Japanese Waterproof and screen guard free smartphones <br />{" "}
                    now available in Uganda. at the lowest <br /> price possible
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
      <section class="py-5">
        <div class="container">
          {/*         <!-- FOR DEMO PURPOSE -->
           */}{" "}
          <div class="row">
            <div class="col-lg-6 mx-auto">
              <header class="text-center pb-5">
                <h1 class="h2">Nothing special today but here's a quote.</h1>
                <p>
                  {timeMessage.toUpperCase()} Inspiration by
                  <br />{" "}
                  <a href="/" class="font-italic text-info">
                    Link Communication Centre
                  </a>
                </p>
              </header>
            </div>
          </div>
          {/*<!-- END --> */}
          <div class="row">
            <div class="col-lg-6 mx-auto">
              {/*  <!-- CUSTOM BLOCKQUOTE --> */}
              <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
                <div class="blockquote-custom-icon bg-info shadow-sm">
                  <i class="fa fa-quote-left text-white"></i>
                </div>
                <p class="mb-0 mt-2 font-italic">
                  {intQuote}
                  <a href="#" class="text-info"></a>
                  ."
                </p>
                <footer class="blockquote-footer pt-4 mt-4 border-top">
                  {intAuthor} <cite title="Source Title">fcc</cite>
                </footer>
              </blockquote>
              {/* <!-- END --> */}
            </div>
          </div>
        </div>
      </section>
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
                <a
                  href="https://www.facebook.com/profile.php?id=100054084329441"
                  target="_parent"
                >
                  {" "}
                  Mu-Solomon
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Special;
