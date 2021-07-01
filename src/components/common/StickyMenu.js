import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./styles/stickyMenu.js";
import { RiArrowDropDownLine } from "react-icons/ri"

function StickyMenu(props) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const stickyMenu = document.querySelector(".sticky-menu");

      if (window.scrollY > 160) {
        stickyMenu.classList.add("sticky");
      } else {
        stickyMenu.classList.remove("sticky");
      }
    });
  });

  return (
    <Styles>
      {/* Sticky Menu */}
      <section
        className="sticky-menu"
        style={{
          paddingTop: "0",
          height: "auto",
        }}
      >
        <Container>
          <Row>
            <Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img src={props.logo} alt="" width="100%" height="auto" />
                </Link>
              </div>
            </Col>
            <Col md="9" style={{ display: "flex" }}>
              <div
                className="menu-box d-flex justify-content-end"
                style={{ margin: "auto" }}
              >
                <ul className="nav menu-nav">
                  {/* <li className="nav-item dropdown active">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      Home <i className="las la-angle-down"></i>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/"}
                        >
                          Home Style 1
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/home-two"}
                        >
                          Home Style 2
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item active">
                    <Link
                      className="nav-link"
                      to={process.env.PUBLIC_URL + "/"}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={process.env.PUBLIC_URL + "/about"}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={process.env.PUBLIC_URL + "/course-list"}
                    >
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={process.env.PUBLIC_URL + "/packages"}
                    >
                      Packages
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={process.env.PUBLIC_URL + "/gallery"}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://practice.speedlabs.in/"
                      target="blank"
                    >
                      Online Test
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://practice.speedlabs.in/"
                      target="blank"
                    >
                      Resources
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to={process.env.PUBLIC_URL + "/payonline"}
                    >
                      Pay Online
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      More <RiArrowDropDownLine className="moreButton" />
                    </Link>
                    <ul className="dropdown list-unstyled">
                      {/* <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/about"}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/gallery"}
                        >
                          Gallery
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/login"}
                        >
                          Log In
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/registration"}
                        >
                          Registration
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/contact"}
                        >
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/faq"}
                        >
                          FAQ
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/404"}
                        >
                          404
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/coming-soon"}
                        >
                          Coming Soon
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/course-grid"}
                        >
                          Courses Grid
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/career"}
                        >
                          Career Form
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/franchise"}
                        >
                          Franchise Form
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/admission"}
                        >
                          Admission Form
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/coming-soon"}
                        >
                          Alert
                        </Link>
                      </li>

                    </ul>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      Pages <i className="las la-angle-down"></i>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/about"}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/gallery"}
                        >
                          Gallery
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/login"}
                        >
                          Log In
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/registration"}
                        >
                          Registration
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/contact"}
                        >
                          Contact
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/faq"}
                        >
                          Faq
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/404"}
                        >
                          404
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/coming-soon"}
                        >
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      Courses <i className="las la-angle-down"></i>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/course-grid"}
                        >
                          Course Grid
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/course-list"}
                        >
                          Course List
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/course-details"}
                        >
                          Course Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      Instructor <i className="las la-angle-down"></i>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/instructor"}
                        >
                          Instructors
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/instructor-details"}
                        >
                          Instructor Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      Event <i className="las la-angle-down"></i>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/events"}
                        >
                          Events
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/event-details"}
                        >
                          Event Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      Blog <i className="las la-angle-down"></i>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/blog-classic"}
                        >
                          Blog Classic
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/blog-grid"}
                        >
                          Blog Grid
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/blog-details"}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                    >
                      Shop <i className="las la-angle-down"></i>
                    </Link>
                    <ul className="dropdown list-unstyled">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/products"}
                        >
                          Products
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/product-details"}
                        >
                          Product Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/cart"}
                        >
                          Cart
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
                {/* <div className="apply-btn">
                  <Link to={process.env.PUBLIC_URL + "/registration"}>
                    <i className="las la-clipboard-list"></i>Apply Now
                  </Link>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
}

export default StickyMenu;
