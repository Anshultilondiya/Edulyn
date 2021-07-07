import React, { Component, useEffect, useState } from "react";
import Datas from "../../data/blog/grid.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTwo from "../../components/HeaderTwo";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import Pagination from "./../../components/Pagination";
import BlogSidebar from "./components/BlogSidebar";
import Footer from "../../components/Footer";
import { StyleFun } from "./styles/blog.js";
import { Observer } from "mobx-react";
import { useClientStore } from "./../../contextProviders/clientContext";
import { fetchBlogs } from "../../apis/api";
import { buildBlog, updateColorObj } from "../../utility";

const BlogGrid = () => {

  const clientStore = useClientStore();
  const [dataStatus, setDataStatus] = useState(false);
  const [Styles, setStyles] = useState(StyleFun(clientStore.colors))
  const [empty, setEmpty] = useState(false)


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const res = await fetchBlogs(clientStore.webHash);
    if (res.status === "success") {
      clientStore.blogs = buildBlog(res.response);
      setDataArray(clientStore.blogs);
      setDataStatus(true)
    }
    else setEmpty(true)
  };
  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper blog-grid-page">
              {/* Header 2 */}
              {/* <HeaderTwo /> */}

              {/* Breadcroumb */}
              <BreadcrumbBox title="Blog Grid" />

              {/* Blog Classic */}
              {dataStatus ? (<section className="blog-grid-area">
                <Container>
                  <Row>
                    <Col lg="11" md="8" sm="7" style={{ margin: "auto" }}>
                      <Row>
                        {dataArray.map((data, i) => (
                          <Col lg="6" md="12" key={i}>
                            <div className="blog-item">
                              <div className="blog-img">
                                <Link
                                  to={process.env.PUBLIC_URL + data.postLink}
                                >
                                  <img
                                    src={data.postImg}
                                    alt=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div>
                              <div className="blog-content">

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


                    </Col>

                  </Row>
                </Container>
              </section>) : (empty ? (<Container>
                <Row>
                  <Col style={{ margin: "auto", textAlign: "center" }}>
                    <p>No Course Available</p>
                  </Col>
                </Row>
              </Container>) : null)}

            </div>
          </Styles>
        );
      }}
    </Observer>
  );
};

export default BlogGrid;
