import React, { useEffect, useState } from "react";
import Datas from "../data/course/filter.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./styles/courseFilter.js";
import { fetchTopCourses } from "./../apis/api";

import { useClientStore } from "./../contextProviders/clientContext";
import { Observer } from "mobx-react";
import { buildCourse } from "../utility";

function CourseFilter() {
  const clientStore = useClientStore();
  const [dataArray, setDataArray] = useState(Datas.dataList);
  const [dataStatus, setDataStatus] = useState(false);

  // useEffect(() => {
  //   const buttons = document.querySelector(".filter-btn-list").children;
  //   const items = document.querySelector(".filter-items").children;

  //   for (let i = 0; i < buttons.length; i++) {
  //     buttons[i].addEventListener("click", function () {
  //       for (let j = 0; j < buttons.length; j++) {
  //         buttons[j].classList.remove("active");
  //       }

  //       this.classList.add("active");
  //       const target = this.getAttribute("data-target");

  //       for (let k = 0; k < items.length; k++) {
  //         items[k].style.display = "none";

  //         if (items[k].getAttribute("data-id") === target) {
  //           items[k].style.display = "block";
  //         }

  //         if (target === "*") {
  //           items[k].style.display = "block";
  //         }
  //       }
  //     });
  //   }
  // });

  useEffect(() => {
    getTopCourses();
  }, []);

  const getTopCourses = async () => {
    const res = await fetchTopCourses(clientStore.webHash, 3);
    // console.log("Courses", res.response);
    clientStore.topCourses = buildCourse(res.response);
    setDataArray(clientStore.topCourses);
    setDataStatus(true);
    // console.log(clientStore.topCourses);
  };

  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Course Area */}
            <section className="course-filter">
              <Container>
                <Row>
                  <Col md="12">
                    <div className="sec-title text-center">
                      <h4>{Datas.secTitle}</h4>
                    </div>
                  </Col>
                  <Col md="12">
                    {/* <div className="filter-btns text-center">
                      <ul className="filter-btn-list list-unstyled list inline">
                        <li data-target="*" className="active list-inline-item">
                          All Courses
                        </li>
                        <li data-target="desi" className="list-inline-item">
                          Web Design
                        </li>
                        <li data-target="deve" className="list-inline-item">
                          Web Development
                        </li>
                        <li data-target="seo" className="list-inline-item">
                          Seo
                        </li>
                        <li data-target="prog" className="list-inline-item">
                          Programming
                        </li>
                      </ul>
                    </div> */}
                    <Row className="filter-items">
                      {dataArray.map((data, i) => (
                        <Col lg="4" md="6" key={i} data-id={data.targetId}>
                          <div className="course-item">
                            <Link to={process.env.PUBLIC_URL + data.courseLink}>
                              <div
                                className="course-image"
                                style={{
                                  backgroundImage: dataStatus
                                    ? `url(${data.imgUrl})`
                                    : `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})`,
                                }}
                              >
                                {/* <div className="author-img d-flex">
                                  <div className="img">
                                    <img
                                      src={
                                        process.env.PUBLIC_URL +
                                        `/assets/images/${data.authorImg}`
                                      }
                                      alt=""
                                    />
                                  </div>
                                  <div className="title">
                                    <p>{data.authorName}</p>
                                    <span>{data.authorCourses}</span>
                                  </div>
                                </div>
                                <div className="course-price">
                                  <p>{data.price}</p>
                                </div> */}
                              </div>
                            </Link>
                            <div className="course-content">
                              <h6 className="heading">
                                <Link
                                  to={process.env.PUBLIC_URL + data.courseLink}
                                >
                                  {data.courseTitle}
                                </Link>
                              </h6>
                              {dataStatus ? (
                                <p
                                  className="desc"
                                  dangerouslySetInnerHTML={{
                                    __html: `${data.courseDesc.slice(0, 300)} ...`,
                                  }}
                                ></p>
                              ) : (
                                <p className="desc">{data.courseDesc}</p>
                              )}

                              {/* <div className="course-face d-flex justify-content-between">
                                <div className="duration">
                                  <p>
                                    <i className="las la-clock"></i>120
                                  </p>
                                </div>
                                <div className="rating">
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
                                <div className="student">
                                  <p>
                                    <i className="las la-chair"></i>60
                                  </p>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col md="12" className="text-center">
                    <div className="viewall-btn">
                      <Link to={process.env.PUBLIC_URL + "/course-grid"}>
                        View All Courses
                      </Link>
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
}

export default CourseFilter;
