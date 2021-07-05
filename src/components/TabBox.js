import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { StyleFun } from "./styles/tabBox.js";
import { useClientStore } from "../contextProviders/clientContext";
import { updateColorObj } from "../utility.js";

const TabBox = () => {
  const clientStore = useClientStore();
  const [whyUs, setWhyUs] = useState("");
  const [ourMission, setOurMission] = useState("");
  const [ourVision, setOurVision] = useState("");
  const [directorMessage, setDirectorMessage] = useState("");
  const [coFounderMessage, setCoFounderMessage] = useState("");
  const [directorImg, setDirectorImg] = useState("");
  const [coFounderImg, setCoFounderImg] = useState("");
  const [dataStatus, setDataStatus] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [colors, setColors] = useState({ ...clientStore.colors });
  const [dataColStatus, setDataColStatus] = useState(false);
  const [toggleCol, setToggleCol] = useState(0);
  const [Styles, setStyles] = useState(StyleFun(colors));
  useEffect(() => {
    updateData();
  }, [toggle, dataStatus]);

  const updateData = () => {
    if (clientStore.instituteDetails["About Us"] !== undefined && !dataStatus) {
      // setPhone(clientStore.instituteDetails.Contact1);
      setWhyUs(clientStore.instituteDetails["Why Us"]);
      setOurMission(clientStore.instituteDetails["Our mission"]);
      setOurVision(clientStore.instituteDetails["Our vision"]);
      setDirectorMessage(clientStore.instituteDetails["Director Message"]);
      setCoFounderMessage(clientStore.instituteDetails["Co-founder Message"]);
      setDirectorImg(clientStore.instituteDetails["imgURL"] + clientStore.instituteDetails["Director Image"]);
      setCoFounderImg(clientStore.instituteDetails["imgURL"] + clientStore.instituteDetails["Co-founder Image"]);
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

  useEffect(() => {
    updateColors();
  }, [colors, toggleCol, dataColStatus]);


  const updateColors = () => {
    if (clientStore.webLayout["primary"] !== undefined && !dataColStatus) {
      let obj = { ...colors }
      setColors({ ...updateColorObj(obj, clientStore.webLayout) })
      setStyles(StyleFun({ ...updateColorObj(obj, clientStore.webLayout) }))
      setDataColStatus(true);
    }
    if (!dataColStatus) setToggleCol(toggleCol + 1);
  };
  return (
    <Styles>
      {/* Tab Box Area */}
      <section className="tab-section">
        <Container>
          <Tab.Container defaultActiveKey="why">
            <Row>
              <Col lg="3" md="4">
                <Nav className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="why">
                      <i className="las la-arrow-right"></i> Why Us
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="mission">
                      <i className="las la-arrow-right"></i> Our Mission
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="vision">
                      <i className="las la-arrow-right"></i> Our Vision
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ranking">
                      <i className="las la-arrow-right"></i> Director Message
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="research">
                      <i className="las la-arrow-right"></i> Co-founder Message
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg="9" md="8">
                <Tab.Content>
                  <Tab.Pane eventKey="why">
                    <h4 className="tab-title">Why Us</h4>
                    <p
                      className="tab-desc"
                      dangerouslySetInnerHTML={{
                        __html: whyUs,
                      }}
                    ></p>
                    <ul className="list-unstyled check-list">
                      {/* <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li> */}
                    </ul>
                  </Tab.Pane>
                  <Tab.Pane eventKey="mission">
                    <h4 className="tab-title">Our Mission</h4>
                    <p
                      className="tab-desc"
                      dangerouslySetInnerHTML={{
                        __html: ourMission,
                      }}
                    ></p>
                    <ul className="list-unstyled check-list">
                      {/* <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li> */}
                    </ul>
                  </Tab.Pane>
                  <Tab.Pane eventKey="vision">
                    <h4 className="tab-title">Our Vision</h4>
                    <p
                      className="tab-desc"
                      dangerouslySetInnerHTML={{
                        __html: ourVision,
                      }}
                    ></p>
                    {/* <ul className="list-unstyled check-list"> */}
                    {/* <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li>
                                                <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere.</li> */}
                    {/* </ul> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="ranking">
                    <h4 className="tab-title">Director Message</h4>
                    <Container>
                      <Row>
                        <Col md={3}>
                          <img
                            src={directorImg}
                            alt=""
                            width="100%"
                          />
                        </Col>
                        <Col md={9}>
                          <p
                            className="tab-desc"
                            dangerouslySetInnerHTML={{
                              __html: directorMessage,
                            }}
                          ></p>
                        </Col>
                      </Row>
                    </Container>

                    {/* <p className="tab-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatum amet quo eius saepe et quis necessitatibus hic
                      natus facere a nisi fuga rem quas molestias, eveniet
                      minima molestiae. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Ea, recusandae? Assumenda, error. Quam
                      dicta iusto saepe. Odit minus voluptas, fuga ipsum quia
                      debitis totam, tempore laudantium quasi dicta dolorem
                      deleniti.
                    </p>
                    <ul className="list-unstyled check-list">
                      <li>
                        <i className="fa fa-check"></i>Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Voluptatum amet quo
                        eius saepe et quis necessitatibus hic natus facere.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Voluptatum amet quo
                        eius saepe et quis necessitatibus hic natus facere.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Voluptatum amet quo
                        eius saepe et quis necessitatibus hic natus facere.
                      </li>
                    </ul> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="research">
                    <h4 className="tab-title">Co-founder Message</h4>
                    <Container>
                      <Row>
                        <Col md={3}>
                          <img
                            src={coFounderImg}
                            alt=""
                            width="100%"
                          />
                        </Col>
                        <Col md={9}>
                          <p
                            className="tab-desc"
                            dangerouslySetInnerHTML={{
                              __html: coFounderMessage,
                            }}
                          ></p>
                        </Col>
                      </Row>
                    </Container>
                    {/* <p className="tab-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatum amet quo eius saepe et quis necessitatibus hic
                      natus facere a nisi fuga rem quas molestias, eveniet
                      minima molestiae. Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Ea, recusandae? Assumenda, error. Quam
                      dicta iusto saepe. Odit minus voluptas, fuga ipsum quia
                      debitis totam, tempore laudantium quasi dicta dolorem
                      deleniti.
                    </p>
                    <ul className="list-unstyled check-list">
                      <li>
                        <i className="fa fa-check"></i>Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Voluptatum amet quo
                        eius saepe et quis necessitatibus hic natus facere.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Voluptatum amet quo
                        eius saepe et quis necessitatibus hic natus facere.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Voluptatum amet quo
                        eius saepe et quis necessitatibus hic natus facere.
                      </li>
                    </ul> */}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </Styles>
  );
};

export default TabBox;
