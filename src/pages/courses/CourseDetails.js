import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import HeaderTwo from "../../components/HeaderTwo";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import ReviewForm from "./components/ReviewForm";
import PopularCourse from "./components/PopularCourse";
import CourseTag from "./components/CourseTag";
import Footer from "../../components/Footer";
import { StyleFun } from "./styles/course.js";
import { useParams } from "react-router-dom";
import { useClientStore } from "../../contextProviders/clientContext";
import { Observer } from "mobx-react";

import { fetchCourseDetailsById } from "./../../apis/api";

import { updateColorObj } from "../../utility";


const CourseDetails = () => {
  let { courseID } = useParams();
  //   console.log("ID :", courseID);
  //   console.log("Para ", useParams());
  useEffect(() => {
    const courseButton = document.querySelectorAll(".course-button");
    courseButton.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (button.classList.contains("active")) {
          content.className = "course-content show";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.className = "course-content";
          content.style.maxHeight = "0";
        }
      });
    });
  }, []);
  const clientStore = useClientStore();
  const [dataStatus, setDataStatus] = useState(false);
  const [courseName, setCourseName] = useState(" ");
  const [courseDesc, setCourseDesc] = useState(" ");
  const [courseOverview, setCourseOverview] = useState(" ");
  const [courseKeyBenefits, setCourseKeyBenefits] = useState(" ");
  const [courseEligibility, setCourseEligibility] = useState(" ");
  useEffect(() => {
    getCourseData();
  }, []);

  const getCourseData = async () => {
    const res = await fetchCourseDetailsById(clientStore.webHash, courseID);
    console.log("Course Data", res.response[0]);
    setDataStatus(true);
    setCourseName(res.response[0]["course_name"]);
    setCourseDesc(res.response[0]["course_detail"]);
    setCourseOverview(res.response[0]["course_overview"]);
    setCourseKeyBenefits(res.response[0]["course_key_benefits"]);
    setCourseEligibility(res.response[0]["course_eligibility"]);
  };




  const [colors, setColors] = useState({ ...clientStore.colors });
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
          <div className="main-wrapper course-details-page">
            {/* Header 2 */}
            <HeaderTwo />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Course Details" />

            <Styles>
              {/* Course Details */}
              <section className="course-details-area">
                <Container>
                  <Row>
                    <Col lg="9" md="10" sm="12" style={{ margin: "auto" }}>
                      <div className="course-details-top">
                        <div className="heading">
                          <h4> Course : {courseName}</h4>
                        </div>
                        {/* <div className="course-top-overview">
                          <div className="d-flex overviews">
                            <div className="author">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  `/assets/images/author.jpg`
                                }
                                alt=""
                              />
                              <div className="author-name">
                                <h6>Author</h6>
                                <p>Andy Robert</p>
                              </div>
                            </div>
                            <div className="category">
                              <h6>Category</h6>
                              <p>Social Science</p>
                            </div>
                            <div className="rating">
                              <h6>Rating</h6>
                              <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                  <i className="las la-star"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="las la-star"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="las la-star"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="las la-star"></i>
                                </li>
                                <li className="list-inline-item">
                                  <i className="las la-star-half-alt"></i>
                                </li>
                                <li className="list-inline-item">(4.5)</li>
                              </ul>
                            </div>
                            <div className="price">
                              <h6>Price</h6>
                              <p>$29.00</p>
                            </div>
                          </div>
                        </div> */}
                        <div className="course-details-banner">
                          <img
                            src={"https://images.unsplash.com/photo-1619089654126-4f6d1df6fb69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1063&q=80"}
                            // src={
                            //   process.env.PUBLIC_URL +
                            //   `/assets/images/details-banner.jpg`
                            // }
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="course-tab-list">
                          <Tab.Container defaultActiveKey="description">
                            <Nav className="flex-column">
                              <Nav.Item>
                                <Nav.Link eventKey="description">
                                  Description
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="overview">
                                  Overview
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="key_benefits">
                                  Key Benefits
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="eligibility">Eligibility</Nav.Link>
                              </Nav.Item>
                            </Nav>
                            <Tab.Content>
                              <Tab.Pane
                                eventKey="description"
                                className="overview-tab"
                              >
                                <div className="course-desc">
                                  <h5>Course Description</h5>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: courseDesc,
                                    }}
                                  ></p>
                                </div>
                                {/* <div className="course-feature">
                                  <h5>Course Overview</h5>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: courseOverview,
                                    }}
                                  ></p> */}
                                {/* <ul className="list-unstyled">
                                    <li>
                                      <i className="las la-arrow-right"></i>{" "}
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Voluptatum amet quo eius
                                      saepe et quis necessitatibus hic natus
                                      facere excepturi aliquid dolor ducimus.
                                    </li>
                                    <li>
                                      <i className="las la-arrow-right"></i>{" "}
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Voluptatum amet quo eius
                                      saepe et quis necessitatibus hic natus
                                      facere excepturi aliquid .
                                    </li>
                                    <li>
                                      <i className="las la-arrow-right"></i>{" "}
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Voluptatum amet quo eius
                                      saepe et quis necessitatibus hic natus
                                      facere excepturi.
                                    </li>
                                  </ul> */}
                                {/* </div> */}
                                {/* <div className="course-learn">
                                  <h5>Learning Outcome</h5>
                                  <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quae impedit eligendi
                                    perspiciatis animi maxime ab minus corporis
                                    omnis similique excepturi, quidem facere
                                    quisquam aperiam neque dolorem saepe.
                                    Laboriosam, quam aliquam odit modi harum
                                    libero culpa distinctio.
                                  </p>
                                  <ul className="list-unstyled">
                                    <li>
                                      <i className="fa fa-check"></i> Lorem
                                      ipsum dolor sit amet, consectetur
                                      adipisicing elit. Voluptatum amet quo eius
                                      saepe et quis necessitatibus hic natus
                                      facere Quae impedit eligendi perspiciatis
                                      animi maxime ab minus corporis omnis
                                      similique excepturi.
                                    </li>
                                    <li>
                                      <i className="fa fa-check"></i> Lorem
                                      ipsum dolor sit amet, consectetur
                                      adipisicing elit. Voluptatum amet quo eius
                                      saepe et quis necessitatibus hic natus
                                      facere Quae impedit eligendi perspiciatis
                                      animi maxime ab minus corporis omnis
                                      similique excepturi.
                                    </li>
                                    <li>
                                      <i className="fa fa-check"></i> Lorem
                                      ipsum dolor sit amet, consectetur
                                      adipisicing elit. Voluptatum amet quo eius
                                      saepe et quis necessitatibus hic natus
                                      facere Quae impedit eligendi perspiciatis
                                      animi maxime ab minus corporis omnis
                                      similique excepturi.
                                    </li>
                                    <li>
                                      <i className="fa fa-check"></i> Lorem
                                      ipsum dolor sit amet, consectetur
                                      adipisicing elit. Voluptatum amet quo eius
                                      saepe et quis necessitatibus hic natus
                                      facere Quae impedit eligendi perspiciatis
                                      animi maxime ab minus corporis omnis
                                      similique excepturi.
                                    </li>
                                  </ul>
                                </div>
                                <div className="course-share">
                                  <h5>Share This Course</h5>
                                  <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item">
                                      <a href={process.env.PUBLIC_URL + "/"}>
                                        <i className="fab fa-facebook-f"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href={process.env.PUBLIC_URL + "/"}>
                                        <i className="fab fa-twitter"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href={process.env.PUBLIC_URL + "/"}>
                                        <i className="fab fa-linkedin-in"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href={process.env.PUBLIC_URL + "/"}>
                                        <i className="fab fa-youtube"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href={process.env.PUBLIC_URL + "/"}>
                                        <i className="fab fa-dribbble"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div> */}
                              </Tab.Pane>
                              <Tab.Pane
                                eventKey="overview"
                                className="curriculum-tab"
                              >
                                <div className="course-curriculum">
                                  <h5>Course Overview</h5>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: courseOverview,
                                    }}
                                  ></p>
                                </div>
                                {/* <div className="course-element">
                                  <h5>Course Content</h5>
                                  <div className="course-item">
                                    <button className="course-button active">
                                      Part 1: Introduction of Javsscript{" "}
                                      <span>04 Lectures - 30 Min</span>
                                    </button>
                                    <div className="course-content show">
                                      <ul className="list-unstyled">
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 01
                                          </span>
                                          <span className="lecture-title">
                                            Javascript functional components
                                          </span>
                                          <span className="lecture-duration">
                                            02:36
                                          </span>
                                        </li>
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 02
                                          </span>
                                          <span className="lecture-title">
                                            Javascript api integration
                                          </span>
                                          <span className="lecture-duration">
                                            04:20
                                          </span>
                                        </li>
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 03
                                          </span>
                                          <span className="lecture-title">
                                            Javscript project Setup
                                          </span>
                                          <span className="lecture-duration">
                                            03:39
                                          </span>
                                        </li>
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 04
                                          </span>
                                          <span className="lecture-title">
                                            React app setup project
                                          </span>
                                          <span className="lecture-duration">
                                            01:56
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="course-item">
                                    <button className="course-button active">
                                      Part 2: Javascript Project Setup{" "}
                                      <span>03 Lectures - 43 Min</span>
                                    </button>
                                    <div className="course-content show">
                                      <ul className="list-unstyled">
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 01
                                          </span>
                                          <span className="lecture-title">
                                            Javascript functional components
                                          </span>
                                          <span className="lecture-duration">
                                            11:36
                                          </span>
                                        </li>
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 02
                                          </span>
                                          <span className="lecture-title">
                                            Javascript api integration
                                          </span>
                                          <span className="lecture-duration">
                                            19:20
                                          </span>
                                        </li>
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 03
                                          </span>
                                          <span className="lecture-title">
                                            Javscript project Setup
                                          </span>
                                          <span className="lecture-duration">
                                            10:39
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="course-item">
                                    <button className="course-button active">
                                      Part 3: React Application Setup Project{" "}
                                      <span>04 Lectures - 59 Min</span>
                                    </button>
                                    <div className="course-content show">
                                      <ul className="list-unstyled">
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 01
                                          </span>
                                          <span className="lecture-title">
                                            Javascript functional components
                                          </span>
                                          <span className="lecture-duration">
                                            24:36
                                          </span>
                                        </li>
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 02
                                          </span>
                                          <span className="lecture-title">
                                            Javascript api integration
                                          </span>
                                          <span className="lecture-duration">
                                            21:20
                                          </span>
                                        </li>
                                        <li>
                                          <span className="play-icon">
                                            <i className="las la-play"></i>{" "}
                                            Lecture: 03
                                          </span>
                                          <span className="lecture-title">
                                            Javscript project Setup
                                          </span>
                                          <span className="lecture-duration">
                                            15:39
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div> */}
                              </Tab.Pane>
                              <Tab.Pane
                                eventKey="key_benefits"
                                className="instructor-tab"
                              >
                                <h5>Course Key Benefits</h5>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: courseKeyBenefits,
                                  }}
                                ></p>
                                {/* <div className="instructor-item">
                                  <Row>
                                    <Col md="4">
                                      <div className="instructor-img">
                                        <img
                                          src={
                                            process.env.PUBLIC_URL +
                                            `/assets/images/instructor-1.jpg`
                                          }
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </Col>
                                    <Col md="8">
                                      <div className="instructor-content">
                                        <div className="instructor-box">
                                          <div className="top-content d-flex justify-content-between">
                                            <div className="instructor-name">
                                              <h6>Mark Shadow</h6>
                                              <p>Senior Lecturer</p>
                                            </div>
                                            <div className="instructor-social">
                                              <ul className="social list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-facebook-f"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-twitter"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-linkedin-in"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-youtube"></i>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="instructor-desk">
                                            <p>
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit. Quae
                                              perferendis delectus voluptate
                                              reiciendis animi nisi nemo tenetur
                                              sequi cum laudantium sit totam
                                              libero quasi ducimus accusantium
                                              numquam eaque.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                                <div className="instructor-item">
                                  <Row>
                                    <Col md="4">
                                      <div className="instructor-img">
                                        <img
                                          src={
                                            process.env.PUBLIC_URL +
                                            `/assets/images/instructor-2.jpg`
                                          }
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </Col>
                                    <Col md="8">
                                      <div className="instructor-content">
                                        <div className="instructor-box">
                                          <div className="top-content d-flex justify-content-between">
                                            <div className="instructor-name">
                                              <h6>Katrin Kay</h6>
                                              <p>Senior Lecturer</p>
                                            </div>
                                            <div className="instructor-social">
                                              <ul className="social list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-facebook-f"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-twitter"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-linkedin-in"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-youtube"></i>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="instructor-desk">
                                            <p>
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit. Quae
                                              perferendis delectus voluptate
                                              reiciendis animi nisi nemo tenetur
                                              sequi cum laudantium sit totam
                                              libero quasi ducimus accusantium
                                              numquam eaque.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                                <div className="instructor-item">
                                  <Row>
                                    <Col md="4">
                                      <div className="instructor-img">
                                        <img
                                          src={
                                            process.env.PUBLIC_URL +
                                            `/assets/images/instructor-3.jpg`
                                          }
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </Col>
                                    <Col md="8">
                                      <div className="instructor-content">
                                        <div className="instructor-box">
                                          <div className="top-content d-flex justify-content-between">
                                            <div className="instructor-name">
                                              <h6>David Show</h6>
                                              <p>Senior Lecturer</p>
                                            </div>
                                            <div className="instructor-social">
                                              <ul className="social list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-facebook-f"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-twitter"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-linkedin-in"></i>
                                                  </a>
                                                </li>
                                                <li className="list-inline-item">
                                                  <a
                                                    href={
                                                      process.env.PUBLIC_URL +
                                                      "/"
                                                    }
                                                  >
                                                    <i className="fab fa-youtube"></i>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                          <div className="instructor-desk">
                                            <p>
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit. Quae
                                              perferendis delectus voluptate
                                              reiciendis animi nisi nemo tenetur
                                              sequi cum laudantium sit totam
                                              libero quasi ducimus accusantium
                                              numquam eaque.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div> */}
                              </Tab.Pane>
                              <Tab.Pane
                                eventKey="eligibility"
                                className="review-tab"
                              >
                                <Row>
                                  <Col md="12">
                                    {/* <div className="review-comments"> */}
                                    <h5>Course Eligibility</h5>
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: courseEligibility,
                                      }}
                                    ></p>
                                    {/* <div className="comment-box d-flex">
                                        <div className="comment-image">
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              `/assets/images/testimonial-2.jpg`
                                            }
                                            alt=""
                                          />
                                        </div>
                                        <div className="comment-content">
                                          <div className="content-title d-flex justify-content-between">
                                            <div className="comment-writer">
                                              <h6>Mark Shadow</h6>
                                              <p>Mar 26, 2020 | 06:30pm</p>
                                              <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star-half-alt"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  (4.5)
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="reply-btn">
                                              <button type="button">
                                                <i className="las la-reply-all"></i>{" "}
                                                Reply
                                              </button>
                                            </div>
                                          </div>
                                          <div className="comment-desc">
                                            <p>
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit.
                                              Architecto laborum quas placeat
                                              perspiciatis est, nisi expedita
                                              consectetur sit minus illum
                                              laudantium nostrum dolore odit
                                              asperiores quisquam ad enim iusto
                                              laborum quas placeat perspiciatis
                                              saepe.
                                            </p>
                                          </div>
                                        </div>
                                      </div> */}
                                    {/* <div className="comment-box d-flex">
                                        <div className="comment-image">
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              `/assets/images/testimonial-1.jpg`
                                            }
                                            alt=""
                                          />
                                        </div>
                                        <div className="comment-content">
                                          <div className="content-title d-flex justify-content-between">
                                            <div className="comment-writer">
                                              <h6>Katrin Kay</h6>
                                              <p>Mar 26, 2020 | 06:30pm</p>
                                              <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star-half-alt"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  (4.5)
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="reply-btn">
                                              <button type="button">
                                                <i className="las la-reply-all"></i>{" "}
                                                Reply
                                              </button>
                                            </div>
                                          </div>
                                          <div className="comment-desc">
                                            <p>
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit.
                                              Architecto laborum quas placeat
                                              perspiciatis est, nisi expedita
                                              consectetur sit minus illum
                                              laudantium nostrum dolore odit
                                              asperiores quisquam ad enim iusto
                                              laborum quas placeat perspiciatis
                                              saepe.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="comment-box d-flex">
                                        <div className="comment-image">
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              `/assets/images/testimonial-2.jpg`
                                            }
                                            alt=""
                                          />
                                        </div>
                                        <div className="comment-content">
                                          <div className="content-title d-flex justify-content-between">
                                            <div className="comment-writer">
                                              <h6>David Show</h6>
                                              <p>Mar 26, 2020 | 06:30pm</p>
                                              <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  <i className="las la-star-half-alt"></i>
                                                </li>
                                                <li className="list-inline-item">
                                                  (4.5)
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="reply-btn">
                                              <button type="button">
                                                <i className="las la-reply-all"></i>{" "}
                                                Reply
                                              </button>
                                            </div>
                                          </div>
                                          <div className="comment-desc">
                                            <p>
                                              Lorem ipsum dolor sit amet
                                              consectetur adipisicing elit.
                                              Architecto laborum quas placeat
                                              perspiciatis est, nisi expedita
                                              consectetur sit minus illum
                                              laudantium nostrum dolore odit
                                              asperiores quisquam ad enim iusto
                                              laborum quas placeat perspiciatis
                                              saepe.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    {/* <div className="review-form">
                                      <h5>Submit Review</h5>
                                      <ReviewForm />
                                    </div> */}
                                  </Col>
                                </Row>
                              </Tab.Pane>
                            </Tab.Content>
                          </Tab.Container>
                        </div>
                      </div>
                    </Col>
                    {/* <Col lg="3" md="4" sm="12">
                      <div className="single-details-sidbar">
                        <Row>
                          <Col md="12">
                            <div className="course-details-feature">
                              <h5 className="title">Course Details</h5>
                              <ul className="list-unstyled feature-list">
                                <li>
                                  <i className="las la-calendar"></i> Start
                                  Date: <span>Aug 21, 2020</span>
                                </li>
                                <li>
                                  <i className="las la-clock"></i> Duration:{" "}
                                  <span>1 Year</span>
                                </li>
                                <li>
                                  <i className="las la-globe"></i> Language:{" "}
                                  <span>English</span>
                                </li>
                                <li>
                                  <i className="las la-sort-amount-up"></i>{" "}
                                  Skill Level: <span>Beginner</span>
                                </li>
                                <li>
                                  <i className="las la-graduation-cap"></i>{" "}
                                  Subject: <span>Web</span>
                                </li>
                                <li>
                                  <i className="las la-book"></i> Lectures:{" "}
                                  <span>51</span>
                                </li>
                                <li>
                                  <i className="las la-bookmark"></i> Enrolled:{" "}
                                  <span>236</span>
                                </li>
                                <li>
                                  <i className="las la-certificate"></i>{" "}
                                  Certification: <span>Yes</span>
                                </li>
                              </ul>
                              <button type="button" className="enroll-btn">
                                Enroll Course
                              </button>
                            </div>
                          </Col>
                          <Col md="12">
                            <PopularCourse />
                          </Col>
                          <Col md="12">
                            <CourseTag />
                          </Col>
                        </Row>
                      </div>
                    </Col> */}
                  </Row>
                </Container>
              </section>
            </Styles>

            {/* Footer 2 */}
            <Footer />
          </div>
        );
      }}
    </Observer>
  );
};

export default CourseDetails;
