import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Search from "./common/Search";
import Sidebar from "./common/Sidebar";
import StickyMenu from "./common/StickyMenu";
import MobileMenu from "./common/MobileMenu";
import { Styles } from "./styles/headerTwo.js";
import { useClientStore } from "./../contextProviders/clientContext";
import { RiArrowDropDownLine } from "react-icons/ri"
import { fetchDynamicButton } from "../apis/api";

const HeaderTwo = () => {
  const clientStore = useClientStore();
  const [phone, setPhone] = useState("(908) 875 7678");
  const [email, setEmail] = useState("someemail@domain.com");
  const [address, setAddress] = useState("795 South Park Avenue, CA 94107");
  const [dataStatus, setDataStatus] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [logo, setLogo] = useState("");
  const [dynamicButton, setDynamicButton] = useState({});
  useEffect(() => {
    updateData();
  }, [phone, toggle, dataStatus]);
  useEffect(() => {
    getDynamicButton();
  }, [])
  const updateData = () => {
    if (clientStore.instituteDetails["About Us"] !== undefined && !dataStatus) {
      setPhone(clientStore.instituteDetails.Contact1);
      setEmail(clientStore.instituteDetails.Email1);
      setAddress(clientStore.instituteDetails.Address2);
      setLogo(
        `https://careerliftprod.s3.amazonaws.com/website_logo/${clientStore.instituteDetails["Header Logo"]}`
      );
      setDataStatus(true);
      // console.log("About Us Data ", obj);
      // }
    }
    if (!dataStatus) setToggle(toggle + 1);
  };


  const getDynamicButton = async () => {
    // const res = await fetchDynamicButton(clientStore.webHash);
    const hash = "56609cdc79b2838b15c2950d5dbf654b"
    const res = await fetchDynamicButton(hash);
    let obj = {
      tab: res.tab_name,
      arr: res.response,
      status: res.status,
    }
    setDynamicButton(obj)
    console.log("dynamic", res)
  }


  return (
    <Styles>
      {/* Topbar 2 */}
      <section className="top-bar2">
        <Container>
          <Row>
            <Col lg="7" md="9">
              <div className="bar-left">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <i className="las la-phone"></i>
                    {phone}
                  </li>
                  <li className="list-inline-item">
                    <i className="las la-envelope"></i>
                    {email}
                  </li>
                  <li className="list-inline-item">
                    <i className="las la-map-marker"></i>
                    {address}
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="5" md="3">
              <div className="bar-right d-flex justify-content-end">
                <ul className="list-unstyled list-inline bar-lang">
                  <li className="list-inline-item">
                    <Dropdown>
                      <Dropdown.Toggle>
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

                <ul className="list-unstyled list-inline sidebar-button">
                  <li className="list-inline-item nav-item side-box">
                    <Sidebar />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Logo Area 2 */}
      <section
        className="logo-area2"
        style={{
          paddingTop: "20px",
        }}
      >
        <Container className="header-menu-container">
          <Row>
            {/* <Col md="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img src={logo} alt="" width="35%" height="auto" />
                </Link>
              </div>
            </Col> */}
            <Col lg="3">
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img src={logo} alt="" width="100%" height="auto" />
                </Link>
              </div>
            </Col>
            <Col lg="9" style={{ display: "flex" }}>
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

                  {dynamicButton.status === "success" ? (<li className="nav-item">
                    <Link
                      className="nav-link dropdown-toggle"
                      to={process.env.PUBLIC_URL + "/"}
                      data-toggle="dropdown"
                      style={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {dynamicButton.tab} <RiArrowDropDownLine className="moreButton" />
                    </Link>
                    <ul className="dropdown list-unstyled">
                      {dynamicButton.arr.length > 0 ? (
                        <div>
                          {dynamicButton.arr.map((el, i) => {
                            return (
                              <li className="nav-item" key={i}>
                                <a
                                  className="nav-link"
                                  href={el.url}
                                >
                                  {el.title}
                                </a>
                              </li>
                            )
                          })}
                        </div>
                      ) : null}
                    </ul>
                  </li>) : null}




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
                      </li> */}
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
                          to={process.env.PUBLIC_URL + "/alerts"}
                        >
                          Alerts
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={process.env.PUBLIC_URL + "/achievements"}
                        >
                          Achievements
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
                {/* <div className="search-box">
                  <Search />
                </div>
                <div className="apply-btn">
                  <Link to={process.env.PUBLIC_URL + "/registration"}>
                    <i className="las la-clipboard-list"></i>Apply Now
                  </Link>
                </div> */}
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

export default HeaderTwo;
