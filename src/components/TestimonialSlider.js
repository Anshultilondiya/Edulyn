import React, { useEffect, useState } from "react";
import Datas from "../data/testimonial/testimonial-slider.json";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { StyleFun } from "./styles/testimonialSlider.js";
import { useClientStore } from "./../contextProviders/clientContext";
import { Observer } from "mobx-react";
import { fetchTestimonials } from "./../apis/api";
import { buildTestimonials } from "../utility";
import { getColorObj } from './common/element/elements';
import { updateColorObj } from '../utility';

const TestimonialSlider = () => {
  const clientStore = useClientStore();
  const [dataArray, setDataArray] = useState([]);
  const [dataStatus, setDataStatus] = useState(false);
  const settings = {
    slidesPerView: 2,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    watchSlidesVisibility: true,
    pagination: {
      el: ".slider-dot.text-center",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };

  useEffect(() => {
    if (clientStore.testimonials.length === 0) {
      getTestimonial();
    } else {
      setDataArray(clientStore.testimonials);
      setDataStatus(true);
    }
  }, [dataArray]);

  const getTestimonial = async () => {
    const res = await fetchTestimonials(clientStore.webHash);
    // console.log("Testimonials", res.response);
    clientStore.testimonials = buildTestimonials(res.response);
    // console.log("Testimonials >>>", clientStore.testimonials);
    // console.log(clientStore.testimonials.length);
    setDataArray(clientStore.testimonials);
    setDataStatus(true);
  };
  const [colors, setColors] = useState({ ...getColorObj() });
  const [dataStatusCol, setDataStatusCol] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [Styles, setStyles] = useState(StyleFun(colors));

  useEffect(() => {
    updateColors();
  }, [colors, toggle, dataStatus]);

  const updateColors = () => {
    if (clientStore.webLayout["primary"] !== undefined && !dataStatusCol) {
      let obj = { ...colors }
      setColors({ ...updateColorObj(obj, clientStore.webLayout) })
      setStyles(StyleFun({ ...updateColorObj(obj, clientStore.webLayout) }))
      setDataStatusCol(true);
    }
    if (!dataStatusCol) setToggle(toggle + 1);
  };

  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Testimonial Slider */}
            <section
              className="testimonial-area"
            // style={{
            //   backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})`,
            // }}
            >
              <Container>
                <Row>
                  <Col md="12">
                    <div className="sec-title text-center">
                      <h4>{Datas.secTitle}</h4>
                    </div>
                  </Col>
                  <Col md="12" className="testimonial-slider">
                    {dataStatus ? (
                      <Swiper {...settings}>
                        {dataArray.map((data, i) => (
                          <div className="slider-item" key={i}>
                            <div className="desc">
                              <h5>{data.testimonialTitle}</h5>
                              {dataStatus ? (
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: data.testimonialDesc,
                                  }}
                                ></p>
                              ) : (
                                <p>{data.testimonialDesc}</p>
                              )}
                            </div>
                            <div className="writer">
                              {/* <img
                                src={data.authorImg}
                                className="slider-image"
                                alt={data.authorImg}
                              /> */}
                              <img
                                src={data.authorImg}
                                className="slider-image"
                                alt={data.authorImg}
                              />
                              <h6>{data.authorName}</h6>
                              {/* <p>{data.authorTitle}</p> */}
                            </div>
                          </div>
                        ))}
                      </Swiper>
                    ) : null}
                  </Col>
                </Row>
              </Container>
            </section>
          </Styles>
        );
      }}
    </Observer>
  );
};

export default TestimonialSlider;
