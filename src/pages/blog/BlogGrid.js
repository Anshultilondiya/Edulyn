import React, { Component, useEffect, useState } from "react";
import Datas from "../../data/blog/grid.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTwo from "../../components/HeaderTwo";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import Pagination from "./../../components/Pagination";
import BlogSidebar from "./components/BlogSidebar";
import Footer from "../../components/Footer";
import { Styles } from "./styles/blog.js";
import { Observer } from "mobx-react";
import { useClientStore } from "./../../contextProviders/clientContext";
import { fetchBlogs } from "../../apis/api";
import { buildBlog } from "../../utility";

const BlogGrid = () => {
  const clientStore = useClientStore();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const res = await fetchBlogs(clientStore.webHash);
    console.log("Blogs", res.response);
    clientStore.blogs = buildBlog(res.response);
    setDataArray(clientStore.blogs);
    // console.log("Blogs", clientStore.blogs);
  };
  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper blog-grid-page">
              {/* Header 2 */}
              <HeaderTwo />

              {/* Breadcroumb */}
              <BreadcrumbBox title="Blog Grid" />

              {/* Blog Classic */}
              <section className="blog-grid-area">
                <Container>
                  <Row>
                    <Col lg="9" md="8" sm="7">
                      <Row>
                        {dataArray.map((data, i) => (
                          <Col lg="6" md="12" key={i}>
                            <div className="blog-item">
                              <div className="blog-img">
                                <Link
                                  to={process.env.PUBLIC_URL + data.postLink}
                                >
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
                              <div className="blog-content">
                                <div className="blog-auth_date d-flex">
                                  <div className="author-img d-flex">
                                    <Link
                                      to={
                                        process.env.PUBLIC_URL + data.authorLink
                                      }
                                    >
                                      <img
                                        src={
                                          process.env.PUBLIC_URL +
                                          `/assets/images/${data.authorImg}`
                                        }
                                        alt=""
                                      />
                                    </Link>
                                    <p>
                                      <Link
                                        to={
                                          process.env.PUBLIC_URL +
                                          data.authorLink
                                        }
                                      >
                                        {data.authorName}
                                      </Link>
                                    </p>
                                  </div>
                                  <div className="post-date">
                                    <p>
                                      <i className="las la-calendar"></i>{" "}
                                      {data.postDate}
                                    </p>
                                  </div>
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
                                <div className="blog-desc">
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: `${data.postExcerpt.slice(
                                        0,
                                        200
                                      )} ...`,
                                    }}
                                  ></p>
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>

                      <div className="text-center">
                        <Pagination />
                      </div>
                    </Col>
                    <Col lg="3" md="4" sm="5">
                      <BlogSidebar />
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* Footer 2 */}
              <Footer />
            </div>
          </Styles>
        );
      }}
    </Observer>
  );
};

export default BlogGrid;
