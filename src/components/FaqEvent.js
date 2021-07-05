import React, { useEffect, useState } from "react";
import Datas from "../data/faq-event/faq-event.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { StyleFun } from "./styles/faqEvent.js";
import { fetchNotification, fetchFAQ } from "./../apis/api";
import { useClientStore } from "./../contextProviders/clientContext";
import { Observer } from "mobx-react";
import { buildFaq, buildNotification } from "../utility";
import { Modal, Button } from "react-bootstrap";
import { getColorObj } from './common/element/elements';
import { updateColorObj } from '../utility';

const FaqEvent = () => {
  const clientStore = useClientStore();
  const [faqDataArray, setFaqDataArray] = useState([]);
  const [notificationsDataArray, setNotificationsDataArray] = useState([]);
  const [notifyData, setNotifyData] = useState({})

  useEffect(() => {
    const accordionButton = document.querySelectorAll(".accordion-button");
    accordionButton.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;

        if (button.classList.contains("active")) {
          content.className = "accordion-content show";
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.className = "accordion-content";
          content.style.maxHeight = "0";
        }
      });
    });
  });

  useEffect(() => {
    getNotification();
    getFAQ();
    // console.log("FAQ STATE", faqDataArray)
  }, []);

  const getNotification = async () => {
    const res = await fetchNotification(clientStore.webHash);
    // console.log("Notifications", res.response);
    let notifications = buildNotification(res.response);
    setNotificationsDataArray(notifications);
    setNotifyData(notifications[0])
    // console.log("Notifications", clientStore.notifications);
  };

  const getFAQ = async () => {
    // console.log("FAQ Section");
    const res = await fetchFAQ(clientStore.webHash);
    // console.log("FAQ", res.response);
    clientStore.faqData = buildFaq(res.response);
    setFaqDataArray(clientStore.faqData);
    // console.log("FAQ", clientStore.faqData);
  };

  const [notifyLen, setNotifyLen] = useState(1);
  // const showMore =()=>{
  //   setNotifyLen
  // }
  // const notifyDataFun = (i) => {
  //   setNotifyData(notificationsDataArray[i]);
  // }

  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = (i) => {
    setNotifyData(notificationsDataArray[i]);
    setShow(true);
  }

  // const [modal, setModal] = useState(null);


  const [colors, setColors] = useState({ ...getColorObj() });
  const [dataStatus, setDataStatus] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [Styles, setStyles] = useState(StyleFun(colors));

  useEffect(() => {
    updateColors();
  }, [colors, toggle, dataStatus]);

  const updateColors = () => {
    if (clientStore.webLayout["primary"] !== undefined && !dataStatus) {
      let obj = { ...colors }
      setColors({ ...updateColorObj(obj, clientStore.webLayout) })
      setStyles(StyleFun({ ...updateColorObj(obj, clientStore.webLayout) }))
      setDataStatus(true);
    }
    if (!dataStatus) setToggle(toggle + 1);
  };




  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Faq & Event */}
            <section className="event-faq-area">
              <Modal
                show={show}
                onHide={() => {
                  setShow(false);
                  // setModal(null);
                }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>{notifyData.eventTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="event-box eventModal">
                    <img
                      src="https://images.unsplash.com/photo-1614102073832-030967418971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                      alt=""
                    />
                    <div
                      className="modal-content-data"
                    >

                      <div className="event-date text-center">
                        <p>Publishing Date : {notifyData.eventFullDate}</p>
                      </div>
                      <div className="event-details">
                        {/* <ul className="list-unstyled list-inline">
                                      <li className="list-inline-item">
                                        <i className="las la-clock"></i>
                                        {eventData.eventTime}
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="las la-map-marker"></i>
                                        {eventData.eventLocation}
                                      </li>
                                    </ul> */}
                        <p
                          dangerouslySetInnerHTML={{
                            __html: notifyData.eventdesc,
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setShow(false);
                      // setModal(null);
                    }}
                  >
                    Close
                  </Button>
                  {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
                </Modal.Footer>
              </Modal>
              <Container>
                <Row>
                  <Col md="6">
                    <div className="event-area">
                      <Row>
                        <Col md="12">
                          <div className="sec-title">
                            <h4>
                              <span>Notifications</span>
                            </h4>
                          </div>
                        </Col>
                        <Col md="12">
                          {notificationsDataArray.map((eventData, i) => {
                            if (i > notifyLen) return null;
                            else
                              return (
                                <div className="event-box d-flex" key={i}>
                                  <div className="event-date text-center">
                                    <p>{eventData.eventDate}</p>
                                  </div>
                                  <div className="event-details"
                                    onClick={() => handleShow(i)}
                                  >
                                    <h6>
                                      {eventData.eventTitle}
                                    </h6>
                                    {/* <ul className="list-unstyled list-inline">
                                      <li className="list-inline-item">
                                        <i className="las la-clock"></i>
                                        {eventData.eventTime}
                                      </li>
                                      <li className="list-inline-item">
                                        <i className="las la-map-marker"></i>
                                        {eventData.eventLocation}
                                      </li>
                                    </ul> */}
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: `${eventData.eventdesc.slice(0, 200)} ...`,
                                      }}
                                    />
                                    <span className="readmore">
                                      Read More ...
                                    </span>
                                  </div>
                                </div>
                              );
                          })}
                        </Col>
                      </Row>
                    </div>
                    {notifyLen <= 1 ?
                      <button
                        onClick={() => {
                          setNotifyLen(notificationsDataArray.length)
                        }}
                      >Show More</button> :
                      <button
                        onClick={() => {
                          setNotifyLen(2)
                        }}
                      >Show Less</button>
                    }
                  </Col>
                  <Col md="6">
                    <div className="faq-area">
                      <div className="sec-title">
                        <h4>
                          Frequently Asked <span>Questions</span>
                        </h4>
                      </div>
                      <div className="faq-box">
                        {faqDataArray.map((faqData, i) => {
                          if (i > 2) {
                            return null;
                          } else {
                            return (
                              <div className="faq-item" key={i}>
                                <button className="accordion-button active">
                                  <div className="accordion-icon">
                                    <i className="las la-plus"></i>
                                  </div>
                                  <p>{faqData.faqTitle}</p>
                                </button>
                                <div className="accordion-content show">
                                  <p>{faqData.faqDesc}</p>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Styles>
        );
      }}
    </Observer>
  );
};

export default FaqEvent;
