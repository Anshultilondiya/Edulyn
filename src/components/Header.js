import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Search from "./common/Search";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import { Styles } from "./styles/header.js";
import { useClientStore } from "../contextProviders/clientContext";
import { RiArrowDropDownLine } from "react-icons/ri"


const Header = () => {
  const clientStore = useClientStore();
  const [phone, setPhone] = useState("(908) 875 7678");
  const [email, setEmail] = useState("someemail@domain.com");
  const [address, setAddress] = useState("795 South Park Avenue, CA 94107");
  const [dataStatus, setDataStatus] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [logo, setLogo] = useState("");

  useEffect(() => {
    updateData();
  }, [phone, toggle, dataStatus]);

  const updateData = () => {
    if (clientStore.instituteDetails["About Us"] !== undefined && !dataStatus) {
      setPhone(clientStore.instituteDetails.Contact1);
      setEmail(clientStore.instituteDetails.Email1);
      setAddress(clientStore.instituteDetails.Address2);
      setLogo(
        `https://careerliftprod.s3.amazonaws.com/website_logo/${clientStore.instituteDetails["Header Logo"]}`
      );
      // setLogo(
      //   "https://careerliftprod.s3.amazonaws.com/website_logo/" +
      //     clientStore.instituteDetails["Header Logo"]
      // );
      setDataStatus(true);
      // console.log("About Us Data ", obj);
      // }
    }
    if (!dataStatus) setToggle(toggle + 1);
  };

  // const headerLogo =async()=>{
  //     const res = await fetch( )
  // }

  return (
    <Styles>
      {/* Topbar */}
      <section className="top-bar">
        <Container>
          <Row>
            <Col lg="6" md="5">
              <div className="bar-left">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <i className="las la-map-marker"></i>
                    {address}
                  </li>
                  <li className="list-inline-item">
                    <Link to={process.env.PUBLIC_URL + "/faq"}>
                      Have Questions
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="6" md="7">
              <div className="bar-right d-flex justify-content-end">
                <ul className="list-unstyled list-inline bar-social">
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
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline bar-lang">
                  <li className="list-inline-item">
                    <Dropdown>
                      <Dropdown.Toggle as="a">
                        <img
                          src={process.env.PUBLIC_URL + "/assets/images/us.png"}
                          alt=""
                        />
                        English<i className="las la-angle-down"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu as="ul">
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/us.png"
                            }
                            alt=""
                          />{" "}
                          English
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/fra.png"
                            }
                            alt=""
                          />{" "}
                          French
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/ger.png"
                            }
                            alt=""
                          />{" "}
                          German
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/spa.png"
                            }
                            alt=""
                          />{" "}
                          Spanish
                        </Dropdown.Item>
                        <Dropdown.Item as="li">
                          <img
                            src={
                              process.env.PUBLIC_URL + "/assets/images/bra.png"
                            }
                            alt=""
                          />{" "}
                          Brazilian
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
                <ul className="list-unstyled list-inline bar-login">
                  <li className="list-inline-item">
                    <Link to={process.env.PUBLIC_URL + "/login"}>
                      <i className="las la-user"></i>Log In
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={process.env.PUBLIC_URL + "/registration"}>
                      <i className="las la-user-edit"></i>Register
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Logo Area */}
      <section
        className="logo-area"
        style={{
          padding: "10px 0",
        }}
      >
        <Container>
          <Row>

            {/* <Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img src={logo} alt="" width="35%" height="auto" />
                </Link>
              </div>
            </Col> */}
            <Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img src={logo} alt="" width="100%" height="auto" />
                </Link>
              </div>
            </Col>
            <Col md="9" style={{ display: "flex" }}>
              <div
                className="logo-contact-box d-flex justify-content-end"
                style={{ margin: "auto" }}
              >
                <div className="emcontact-box d-flex">
                  <div className="box-icon">
                    <i className="flaticon-phone-call"></i>
                  </div>
                  <div className="box-content">
                    <p>Call Us Now</p>
                    <span>{phone}</span>
                  </div>
                </div>
                <div className="emcontact-box d-flex">
                  <div className="box-icon">
                    <i className="flaticon-envelope"></i>
                  </div>
                  <div className="box-content">
                    <p>Enquery Us</p>
                    <span>{email}</span>
                  </div>
                </div>
                <div className="apply-btn">
                  <Link to={process.env.PUBLIC_URL + "/admission"}>
                    <i className="las la-clipboard-list"></i>Apply Now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Navbar */}
      <section className="main-menu">
        <Container>
          <Row>
            <Col md="12">
              <div className="main-menu-box">
                <div className="menu-box d-flex justify-content-between">
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
                        <li className="nav-item active">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/"}
                          >
                            Home Style 1
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/home-two"}
                          >
                            Home Style 2
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
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
                    {/* <li className="nav-item">
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
                      <Link
                        className="nav-link"
                        to={process.env.PUBLIC_URL + "/payonline"}
                      >
                        Pay Online
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to={process.env.PUBLIC_URL + "/payonline"}
                      >
                        Resources
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                        style={{
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        More <RiArrowDropDownLine className="moreButton" />
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
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/course-grid"}
                          >
                            Courses Grid
                          </Link>
                        </li>
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
                    </li> */}
                    {/* <li className="nav-item dropdown">
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
                    </li> */}
                    {/* <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to={process.env.PUBLIC_URL + "/"}
                        data-toggle="dropdown"
                      >
                        Notifications <i className="las la-angle-down"></i>
                      </Link>
                      <ul className="dropdown list-unstyled">
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to={process.env.PUBLIC_URL + "/events"}
                          >
                            Notifications
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
                    </li> */}
                    {/* <li className="nav-item dropdown">
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
                    </li> */}
                    {/* <li className="nav-item dropdown">
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
                  {/* <ul className="nav search-cart-bar">
                    <li className="nav-item search-box">
                      <Search />
                    </li>
                    <li className="nav-item cart-box">
                      <Link
                        to={process.env.PUBLIC_URL + "/cart"}
                        className="nav-link nav-cart"
                      >
                        <i className="las la-shopping-bag"></i>
                      </Link>
                    </li>
                    <li className="nav-item side-box">
                      <Sidebar />
                    </li>
                  </ul> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sticky Menu */}
      <StickyMenu logo={logo} />

      {/* Mobile Menu */}
      <MobileMenu />
    </Styles>
  );
};

export default Header;
