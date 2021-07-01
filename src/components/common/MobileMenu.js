import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/mobileMenu.js";
import { useClientStore } from "./../../contextProviders/clientContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

function MobileMenu() {

    const clientStore = useClientStore();
    const [phone, setPhone] = useState("");
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


    // useEffect(() => {

    // Menu Accordion -----------------
    // const menuButton = document.querySelectorAll(".mb-menu-button");
    // menuButton.forEach(button => {
    //     button.addEventListener("click", () => {
    //         button.classList.toggle("active");
    //         const content = button.nextElementSibling;

    //         if (button.classList.contains("active")) {
    //             content.className = "mb-menu-content show";
    //             content.style.maxHeight = content.scrollHeight + "px";
    //         } else {
    //             content.className = "mb-menu-content";
    //             content.style.maxHeight = "0";
    //         }
    //     });
    // });
    // });


    const [isOpen, setIsOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    const [dynamicOpen, setDynamicOpen] = useState(false);


    return (
        <Styles>
            {/* Mobile Menu */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            {/* <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i>{phone}</p>
                                </div>
                                <div className="topbar-item">
                                    <p><i className="flaticon-envelope"></i>{email}</p>
                                </div> */}
                            {/* <div className="topbar-item">
                                    <p><i className="las la-map-marker"></i>{address}</p>
                                </div> */}
                            {/* <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                        <li className="list-inline-item">/</li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/registration"}>Register</Link></li>
                                    </ul>
                                </div> */}
                            {/* </div> */}
                            <div className="mb-logo-area">
                                <div className="mb-logo-box d-flex">
                                    <div className="mb-logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}><img src={logo} alt="" /></Link>
                                        {/* <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" /></Link> */}
                                    </div>
                                    <div className="hm-button" onClick={() => {
                                        setIsOpen(true)
                                    }}>
                                        <p id="mb-sidebar-btn">
                                            <AiOutlineMenu />
                                            {/* <i className="las la-bars"></i> */}
                                        </p>
                                    </div>
                                </div>
                                {/* <div className="mb-search-box">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search Here" />
                                        <button type="submit"><i className="las la-search"></i></button>
                                    </form>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mobile Menu Sidebar */}
            <section className={`mb-sidebar ${isOpen ? "opened" : ""}`} id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <div><h5>Menu</h5></div>
                    <div className="close-menu-btn"
                        onClick={() => {
                            setIsOpen(false)
                        }}
                    ><AiOutlineClose /></div>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link

                                to={process.env.PUBLIC_URL + "/"}
                            >
                                Home
                            </Link></p>
                        </button>
                        {/* <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/"}>Home Style 1</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/home-two"}>Home Style 2</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link

                                to={process.env.PUBLIC_URL + "/about"}
                            >
                                About
                            </Link></p>
                        </button>
                        {/* <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/gallery"}>Gallery</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/login"}>Log In</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/registration"}>Registration</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/faq"}>Faq</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/404"}>404</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                            <p><Link

                                to={process.env.PUBLIC_URL + "/course-list"}
                            >
                                Courses
                            </Link></p>
                        </button>
                        {/* <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/course-grid"}>Course Grid</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/course-list"}>Course List</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/course-details"}>Course Details</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p><Link

                                to={process.env.PUBLIC_URL + "/packages"}
                            >
                                Packages
                            </Link></p>
                        </button>
                        {/* <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/instructor"}>Instructors</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/instructor-details"}>Instructor Details</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p><Link

                                to={process.env.PUBLIC_URL + "/gallery"}
                            >
                                Gallery
                            </Link></p>
                        </button>
                        {/* <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/instructor"}>Instructors</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/instructor-details"}>Instructor Details</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p><a

                                href="https://practice.speedlabs.in/"
                                target="blank"
                            >
                                Online Test
                            </a></p>
                        </button>
                        {/* <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/events"}>Events</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/event-details"}>Event Details</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                            <p><Link

                                to={process.env.PUBLIC_URL + "/payonline"}
                            >
                                Pay Online
                            </Link></p>
                        </button>
                        {/* <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={process.env.PUBLIC_URL + "/blog-classic"}>Blog Classic</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog Grid</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/blog-details"}>Blog Details</Link></li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button" onClick={() => {
                            setDynamicOpen(!dynamicOpen)
                        }}>
                            <p>Resources <i className="las la-plus"></i></p>
                        </button>
                        <div className={`mb-menu-content ${dynamicOpen ? "show" : ""}`}>
                            <ul className="list-unstyled">
                                {/* <li><Link to={process.env.PUBLIC_URL + "/products"}>Products</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/product-details"}>Product Details</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/cart"}>Cart</Link></li> */}
                                <li className="nav-item">
                                    <Link

                                        to={process.env.PUBLIC_URL + "/contact"}
                                    >
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button" onClick={() => {
                            setMenuOpen(!menuOpen)
                        }}>
                            <p>More<i className="las la-plus"></i></p>
                        </button>
                        <div className={`mb-menu-content ${menuOpen ? "show" : ""}`}>
                            <ul className="list-unstyled">
                                {/* <li><Link to={process.env.PUBLIC_URL + "/products"}>Products</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/product-details"}>Product Details</Link></li>
                                <li><Link to={process.env.PUBLIC_URL + "/cart"}>Cart</Link></li> */}
                                <li className="nav-item">
                                    <Link

                                        to={process.env.PUBLIC_URL + "/contact"}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link

                                        to={process.env.PUBLIC_URL + "/faq"}
                                    >
                                        Faq
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link

                                        to={process.env.PUBLIC_URL + "/404"}
                                    >
                                        404
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link

                                        to={process.env.PUBLIC_URL + "/career"}
                                    >
                                        Career Form
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link

                                        to={process.env.PUBLIC_URL + "/franchise"}
                                    >
                                        Franchise Form
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link

                                        to={process.env.PUBLIC_URL + "/admission"}
                                    >
                                        Admission Form
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link

                                        to={process.env.PUBLIC_URL + "/coming-soon"}
                                    >
                                        Alert
                                    </Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className={`mb-sidebar-overlay ${isOpen ? "visible" : ""}`} id="mb-sidebar-overlay"></div>
        </Styles>
    )
}

export default MobileMenu