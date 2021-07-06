import React, { useEffect, useState, useRef } from "react";
// import Datas from "../data/about-us/about-us.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";
// import CountUp from "react-countup";
import { StyleFun } from "./styles/aboutUs.js";
import { useClientStore } from "./../contextProviders/clientContext";
import { Observer } from "mobx-react";
// import { fetchVideo } from "./../apis/api";
import { useLocation } from "react-router";
import { getColorObj } from './common/element/elements';
import { updateColorObj } from '../utility';


const AboutUs = () => {

  const clientStore = useClientStore();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // console.log(location)

  const [data, setData] = useState({});
  const [dataStatus, setDataStatus] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [Styles, setStyles] = useState(StyleFun(clientStore.colors));

  useEffect(() => {
    updateData();

  }, [toggle, dataStatus]);

  const updateData = () => {
    if (clientStore.instituteDetails["About Us"] !== undefined && !dataStatus) {
      let obj = {
        mainImage: clientStore.instituteDetails["default_img1"],
        videoBackground: "vd-bg.jpg",
        title:
          "We Have Experienced Professionals & We Do Our Best To Achieve Your Goal. Your Happiness Is Our First Priority.",
        desc1: clientStore.instituteDetails["About Us"],
      };
      setData(obj);
      setDataStatus(true);
    }
    if (!dataStatus) setToggle(toggle + 1);
  };


  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* About Us */}
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="6">
                    <div className="about-image">
                      {dataStatus ? (
                        <img src={data.mainImage} className="main-img" alt="" />
                      ) : (
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/assets/images/${data.mainImage}`
                          }
                          className="main-img"
                          alt=""
                        />
                      )}
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/pattern.png"
                        }
                        className="pattern-img"
                        alt=""
                      />
                      <div
                        className="video-player"
                        style={{
                          // backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.videoBackground})`,
                          backgroundImage: `url(https://yt3.ggpht.com/ytc/AKedOLQBuw62seqtR718dImbTQ0J1ilmg6ouCTS1nbyncQA=s900-c-k-c0x00ffffff-no-rj)`,
                        }}
                      >
                        <ModalVideo
                          channel="youtube"
                          isOpen={isOpen}
                          videoId="uXFUl0KcIkA"
                          onClose={() => setIsOpen(false)}
                        />
                        <button onClick={() => setIsOpen(true)} className="play-button">
                          <i className="las la-play"></i>
                        </button>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="about-content">
                      <h4 className="about-title">{data.title}</h4>
                      <p className="about-para">
                        {dataStatus ? (
                          <span
                            dangerouslySetInnerHTML={{ __html: data.desc1 }}
                          ></span>
                        ) : (
                          <span>
                            {data.desc1}
                            <span>{data.desc2}</span>
                          </span>
                        )}
                      </p>
                      {/* <Row>
                        <Col sm="4">
                          <div className="counter-box box1 text-center">
                            <h3>
                              <CountUp end={970} duration={5} delay={1.5} />
                              <i className="las la-plus"></i>
                            </h3>
                            <p>Happy Students</p>
                          </div>
                        </Col>
                        <Col sm="4">
                          <div className="counter-box box2 text-center">
                            <h3>
                              <CountUp end={130} duration={5} delay={1.5} />
                              <i className="las la-plus"></i>
                            </h3>
                            <p>Teachers</p>
                          </div>
                        </Col>
                        <Col sm="4">
                          <div className="counter-box box3 text-center">
                            <h3>
                              <CountUp end={340} duration={5} delay={1.5} />
                              <i className="las la-plus"></i>
                            </h3>
                            <p>Courses</p>
                          </div>
                        </Col>
                      </Row> */}
                      {location.pathname !== process.env.PUBLIC_URL + "/about" ? (<Link
                        className="readmore-btn"
                        to={process.env.PUBLIC_URL + "/about"}
                      >
                        Read More
                      </Link>) : null}
                    </div>
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

export default AboutUs;
