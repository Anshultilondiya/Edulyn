import React, { useEffect, useState } from 'react';
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerOne.js";
import { fetchWebData } from '../apis/api';
import { useClientStore } from '../contextProviders/clientContext';
import { IoIosArrowForward } from "react-icons/io"
import { FiMapPin } from "react-icons/fi"
import { BiEnvelope, BiPhone } from "react-icons/bi"


const Footer = () => {

    const clientStore = useClientStore();

    const [webDetail, setWebDetail] = useState({});
    useEffect(() => {
        fetchWebData(clientStore.webHash)
            .then((data) => {
                setWebDetail(data.detail);
                console.log("web Details", data.detail)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <Styles>
            {/* Footer Area */}
            <footer className="footer1" style={{ backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})` }}>
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="footer-logo-info">
                                <img src={webDetail.footer_logo} alt="" className="img-fluid" />
                                <p className="footer-text" dangerouslySetInnerHTML={{ __html: webDetail.footer_text }} />
                                <ul className="list-unstyled">
                                    <li><FiMapPin /> {webDetail.address1}</li>
                                    <li><FiMapPin /> {webDetail.address2}</li>
                                    <li><BiEnvelope /> {webDetail.email1}</li>
                                    <li><BiEnvelope /> {webDetail.email2}</li>
                                    <li><BiPhone /> {webDetail.contact1}</li>
                                    <li><BiPhone /> {webDetail.contact2}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="f-links">
                                <h5>Useful Links</h5>
                                <Row className="useful-links">

                                    <Col>

                                        <ul className="list-unstyled">
                                            <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}><IoIosArrowForward />Blogs</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/career"}><IoIosArrowForward /> Careers</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/franchise"}><IoIosArrowForward />Franchise</Link></li>
                                            <li><a href={"https://www.speedlabs.in"} target="blank"><IoIosArrowForward />SpeedLabs</a></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/achievements"}><IoIosArrowForward />Achievements</Link></li>
                                        </ul>
                                    </Col>
                                    <Col>

                                        <ul className="list-unstyled">
                                            <li><Link to={process.env.PUBLIC_URL + "/faq"}><IoIosArrowForward />FAQs</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/admission"}><IoIosArrowForward />Admission</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/batches"}><IoIosArrowForward />Batches</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/alerts"}><IoIosArrowForward />Alerts</Link></li>
                                            <li><Link to={process.env.PUBLIC_URL + "/contact"}><IoIosArrowForward />Contact Us</Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        {/* <Col md="4">
                            <div className="f-post">
                                <h5>Recent Post</h5>
                                <div className="post-box d-flex">
                                    <div className="post-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/blog-2.jpg"} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <Link to={process.env.PUBLIC_URL + "/blog-details"}>Lorem ipsum dolor sit amet consectet adipisicing elit com...</Link>
                                        <span>Mar 30, 2020</span>
                                    </div>
                                </div>
                                <div className="post-box d-flex">
                                    <div className="post-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/blog-3.jpg"} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <Link to={process.env.PUBLIC_URL + "/blog-details"}>Lorem ipsum dolor sit amet consectet adipisicing elit com...</Link>
                                        <span>Mar 30, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </footer>

            {/* Copyright Area */}
            <section className="copyright-area">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="copy-text">
                                <p>Copyright &copy; 2020 | Designed With <i className="las la-heart"></i> by <a href={process.env.PUBLIC_URL + "/"} target="_blank" rel="noopener noreferrer">SnazzyTheme</a></p>
                            </div>
                        </Col>
                        <Col md="6" className="text-right">
                            <ul className="social list-unstyled list-inline">
                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

                {/* Back To Top */}
                <BackToTop />
            </section>
        </Styles>
    )

}

export default Footer
