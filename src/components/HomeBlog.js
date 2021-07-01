import React, { useEffect, useState } from "react";
import Datas from "../data/blog/home-blog.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./styles/homeBlog.js";
import { useClientStore } from "./../contextProviders/clientContext";
import { Observer } from "mobx-react";
import { buildBlog } from "../utility";
import { fetchBlogs } from "./../apis/api";

const HomeBlog = () => {
  const clientStore = useClientStore();

  useEffect(() => {
    getBlogs();
  }, []);

  const [dataArray, setDataArray] = useState([]);

  const getBlogs = async () => {
    const res = await fetchBlogs(clientStore.webHash);
    console.log("Blogs", res.response);
    clientStore.blogs = buildBlog(res.response);
    setDataArray(clientStore.blogs);
    // console.log("Blogs", clientStore.blogs);
  };

  const [blogLen, setBlogLen] = useState(1)


  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Blog Area */}
            <section className="home-blog-area">
              <Container>
                <Row>
                  <Col md="12">
                    <div className="sec-title text-center">
                      <h4>{Datas.secTitle}</h4>
                    </div>
                  </Col>
                  {dataArray.map((data, i) => {
                    if (i > blogLen) return null;
                    else
                      return (
                        <Col md="6" key={i}>
                          <div className="blog-post">
                            <Row>
                              <Col lg="6" md="12">
                                <div className="blog-img">
                                  <Link to={process.env.PUBLIC_URL + data.postLink}>
                                    <img
                                      src={
                                        process.env.PUBLIC_URL +
                                        `/assets/images/${data.postImg}`
                                      }
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </Link>
                                </div>
                              </Col>
                              <Col lg="6" md="12">
                                <div className="blog-content">
                                  <div className="content-box">
                                    <div className="top-content d-flex">
                                      <div className="blog-date text-center">
                                        <p>{data.postDate}</p>
                                      </div>
                                      <div className="blog-title">
                                        <h6>
                                          <Link
                                            to={
                                              process.env.PUBLIC_URL + data.postLink
                                            }
                                          >
                                            {data.postTitle}
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                    <div className="blog-desk">
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: data.shortDes,
                                        }}
                                      ></p>
                                      <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item">
                                          <Link
                                            to={
                                              process.env.PUBLIC_URL +
                                              data.authorLink
                                            }
                                          >
                                            <i className="las la-user"></i> Jhon
                                          </Link>
                                        </li>
                                        <li className="list-inline-item">
                                          <Link
                                            to={
                                              process.env.PUBLIC_URL +
                                              data.commentLink
                                            }
                                          >
                                            <i className="las la-comment"></i> 19
                                          </Link>
                                        </li>
                                        <li className="list-inline-item">
                                          <Link
                                            to={
                                              process.env.PUBLIC_URL + data.likeLink
                                            }
                                          >
                                            <i className="las la-thumbs-up"></i> 37
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      )
                  }

                  )}
                  <Col md="12" className="text-center">
                    <div className="viewall-btn">
                      <Link to={process.env.PUBLIC_URL + "/blog-grid"}>
                        Show More
                      </Link>
                    </div>
                  </Col>
                </Row>
                {/* <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <button><Link to={process.env.PUBLIC_URL + "/blog-grid"}>
                    Show More
                  </Link></button> */}
                {/* {blogLen === 1 ?
                    <button
                      onClick={() => {
                        setBlogLen(dataArray.length)
                      }}
                    >Show More</button> :
                    <button
                      onClick={() => {
                        setBlogLen(1)
                      }}
                    >Show Less</button>

                  } */}
                {/* </div> */}
              </Container>
            </section>
          </Styles>
        );
      }}
    </Observer >
  );
};

export default HomeBlog;
