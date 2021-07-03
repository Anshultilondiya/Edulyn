import React, { useEffect, useState } from "react";
import Datas from "../data/hero/hero-slider.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { Styles } from "./styles/heroSlider.js";
import { useClientStore } from "./../contextProviders/clientContext";
import { Observer } from "mobx-react";

// Importing API

import { fetchSlider } from "./../apis/api";

// importing utility functions

import { buildSliderObject } from "./../utility";

const HeroSlider = () => {
  const clientStore = useClientStore();
  const settings = {
    slidesPerView: 1,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    effect: "fade",
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
    renderPrevButton: () => (
      <div className="swiper-btn slider-button-prev">
        <i className="flaticon-arrow-left-th"></i>
      </div>
    ),
    renderNextButton: () => (
      <div className="swiper-btn slider-button-next">
        <i className="flaticon-arrow-right-th"></i>
      </div>
    ),
  };

  const [dataArrary, setDataArray] = useState([]);
  const [dataState, setDataState] = useState(false);

  useEffect(() => {
    if (clientStore.sliderData.length === 0) {
      getSliderData();
    } else {
      setDataArray(clientStore.sliderData);
      setDataState(true);
    }
    // if (clientStore.sliderData.length === 0) {
    //   setDataArray(Datas);
    //   getSliderData();
    // }
    // sliderDataUpdate();
    // console.log("HERO", clientStore.sliderData);
  }, []);

  const getSliderData = async () => {
    try {
      const res = await fetchSlider(clientStore.webHash);
      //   console.log(res.response);
      clientStore.sliderData = res.response.map((el) => {
        return buildSliderObject(el);
      });
      // clientStore.silderData = temp;
      setDataArray(clientStore.sliderData);
      setDataState(true);
      // console.log("From API", clientStore.sliderData[0].title);
    } catch (error) {
      console.log(error);
    }
  };

  // const sliderDataUpdate = () => {
  //   if (clientStore.sliderData !== []) {
  //     let temp = clientStore.sliderData;
  //     setDataArray(temp);
  //   } else {
  //     setDataArray(Datas);
  //   }
  // };
  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Hero Slider */}
            <section className="hero-slider-area">
              <Swiper {...settings}>
                {dataArrary.map((data, i) => (
                  <div className="slider-item" key={i}>
                    <div className="image-container">
                      {dataState ? (
                        <div
                          // id="grad"
                          style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            style={{ zIndex: "-1" }}
                            src={data.backgroundImage}
                            className="slider-image"
                            alt={data.backgroundImage}
                            width="70%"
                            height="70%"
                          />
                        </div>
                      ) : (
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/images/${data.backgroundImage}`
                          }
                          className="slider-image"
                          alt={data.backgroundImage}
                        />
                      )}
                    </div>
                    {/* <div className="slider-table">
                      <div className="slider-tablecell">
                        <Container>
                          <Row>
                            <Col md="12">
                              <div className={data.uniqClass}>
                                <div className="slider-title">
                                  <p>{data.title}</p>
                                </div>
                                <div className="slider-desc">
                                  <h1>{data.desc}</h1>
                                </div>
                                <div className="slider-btn">
                                  <Link
                                    className="slider-btn1"
                                    to={
                                      process.env.PUBLIC_URL +
                                      `/${data.btnOneLink}`
                                    }
                                  >
                                    Our Courses
                                  </Link>
                                  <Link
                                    className="slider-btn2"
                                    to={
                                      process.env.PUBLIC_URL +
                                      `/${data.btnTwoLink}`
                                    }
                                  >
                                    Contact Us
                                  </Link>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </div> */}
                  </div>
                ))}
              </Swiper>
            </section>
          </Styles>
        );
      }}
    </Observer>
  );
};

export default HeroSlider;
