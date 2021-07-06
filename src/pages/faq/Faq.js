import React, { useEffect, useState } from "react";
import Datas from "../../data/faq/faq.json";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import HeaderTwo from "../../components/HeaderTwo";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import Footer from "../../components/Footer";
import { StyleFun } from "./styles/faq.js";
import { Observer } from "mobx-react";
import { useClientStore } from "../../contextProviders/clientContext";
import { fetchFAQ } from "../../apis/api";
import { buildFaq, updateColorObj } from "../../utility";


const Faq = () => {
  const clientStore = useClientStore();
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  useEffect(() => {
    getFAQ();
  }, []);

  const getFAQ = async () => {
    console.log("FAQ Section");
    const res = await fetchFAQ(clientStore.webHash);
    console.log("FAQ", res.response);
    clientStore.faqData = buildFaq(res.response);
    setDataArray(clientStore.faqData);
    // console.log("FAQ", clientStore.faqData);
  };



  const [Styles, setStyles] = useState(StyleFun(clientStore.colors));

  // useEffect(() => {
  //   updateColors();
  // }, [colors, toggle, dataStatus]);

  // const updateColors = () => {
  //   if (clientStore.webLayout["primary"] !== undefined && !dataStatus) {
  //     let obj = { ...colors }
  //     setColors({ ...updateColorObj(obj, clientStore.webLayout) })
  //     setStyles(StyleFun({ ...updateColorObj(obj, clientStore.webLayout) }))
  //     setDataStatus(true);
  //   }
  //   if (!dataStatus) setToggle(toggle + 1);
  // };



  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper faq-page">
              {/* Header 2 */}
              {/* <HeaderTwo /> */}

              {/* Breadcroumb */}
              <BreadcrumbBox title="Faq" />

              {/* Faq Area */}
              <section className="faq-area">
                <Container>
                  <Row>
                    <Col md="12">
                      <Tab.Container defaultActiveKey="general">
                        {/* <Nav className="justify-content-center">
                          <Nav.Item>
                            <Nav.Link eventKey="general">General </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="author">Author</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="buyer">Buyer</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="price">Pricing</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="payment">Payment</Nav.Link>
                          </Nav.Item>
                        </Nav> */}
                        <Tab.Content>
                          <Tab.Pane eventKey="general">
                            <Row>
                              {dataArray.map((data, i) => (
                                <Col md="6" key={i}>
                                  <div className="faq-item">
                                    <div className="faq-title d-flex">
                                      <div className="title-icon">
                                        <span>Q</span>
                                      </div>
                                      <div className="title-text">
                                        <p>{data.faqTitle}</p>
                                      </div>
                                    </div>
                                    <div className="faq-desc">
                                      <p>{data.faqDesc}</p>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane>
                          {/* <Tab.Pane eventKey="author">
                            <Row>
                              {dataArray.map((data, i) => (
                                <Col md="6" key={i}>
                                  <div className="faq-item">
                                    <div className="faq-title d-flex">
                                      <div className="title-icon">
                                        <span>Q</span>
                                      </div>
                                      <div className="title-text">
                                        <p>{data.faqTitle}</p>
                                      </div>
                                    </div>
                                    <div className="faq-desc">
                                      <p>{data.faqDesc}</p>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="buyer">
                            <Row>
                              {dataArray.map((data, i) => (
                                <Col md="6" key={i}>
                                  <div className="faq-item">
                                    <div className="faq-title d-flex">
                                      <div className="title-icon">
                                        <span>Q</span>
                                      </div>
                                      <div className="title-text">
                                        <p>{data.faqTitle}</p>
                                      </div>
                                    </div>
                                    <div className="faq-desc">
                                      <p>{data.faqDesc}</p>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="price">
                            <Row>
                              {dataArray.map((data, i) => (
                                <Col md="6" key={i}>
                                  <div className="faq-item">
                                    <div className="faq-title d-flex">
                                      <div className="title-icon">
                                        <span>Q</span>
                                      </div>
                                      <div className="title-text">
                                        <p>{data.faqTitle}</p>
                                      </div>
                                    </div>
                                    <div className="faq-desc">
                                      <p>{data.faqDesc}</p>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="payment">
                            <Row>
                              {dataArray.map((data, i) => (
                                <Col md="6" key={i}>
                                  <div className="faq-item">
                                    <div className="faq-title d-flex">
                                      <div className="title-icon">
                                        <span>Q</span>
                                      </div>
                                      <div className="title-text">
                                        <p>{data.faqTitle}</p>
                                      </div>
                                    </div>
                                    <div className="faq-desc">
                                      <p>{data.faqDesc}</p>
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane> */}
                        </Tab.Content>
                      </Tab.Container>
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* Footer 2 */}
              {/* <Footer /> */}
            </div>
          </Styles>
        );
      }}
    </Observer>
  );
};

export default Faq;
