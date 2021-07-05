import React, { useEffect, useState, useRef } from "react";
import Datas from "../data/icon-box/icon-box.json";
import { Container, Row, Col, Media } from "react-bootstrap";
import { StyleFun } from "./styles/iconBox.js";
import { useClientStore } from "./../contextProviders/clientContext";
import { Observer } from "mobx-react";
import { Modal, Button } from "react-bootstrap";
// Importing API

import { fetchCoreFeatures } from "./../apis/api";

// importing utility functions

import { coreFeatureDataFormat, updateColorObj } from "./../utility";

const IconBox = () => {
  const clientStore = useClientStore();

  const [dataArray, setDataArray] = useState(Datas);
  const [maxLen, setMaxLen] = useState(0);
  const [isHeightAvail, setIsHeightAvail] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (clientStore.coreFeaturesData.length === 0) {
      getFeaturesData();
    } else {
      setDataArray(clientStore.coreFeaturesData);

    }
    // checkMaxHeight();
  }, []);

  const getFeaturesData = async () => {
    try {
      const res = await fetchCoreFeatures(clientStore.webHash);
      // console.log("Features: ", res.response);
      let { arr, maxlen } = coreFeatureDataFormat(res.response[0]);
      //   console.log(FormatedArr);
      clientStore.coreFeaturesData = arr;
      setMaxLen(maxlen);
      setDataArray(clientStore.coreFeaturesData);
    } catch (error) {
      console.log(error);
    }
  };


  const [colors, setColors] = useState({ ...clientStore.colors });
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

  //   const checkMaxHeight = () => {
  //     // if (dataState && !isHeightAvail) {
  //     var x = document.getElementsByClassName("featureCards");
  //     console.log(x);
  //     let maxheight = height;
  //     for (let i = 0; i < x.length; i++) {
  //       if (maxheight < x[i].clientHeight) {
  //         maxheight = x[i].clientHeight;
  //       }
  //     }
  //     setHeight(maxheight);
  //     setIsHeightAvail(true);
  //     console.log(maxheight);
  //     // }
  //   };
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modal, setModal] = useState(null);

  // useEffect(() => {}, [modal]);

  const modalFun = (i) => {
    console.log("From Modal", i);
    let m = (
      <Modal
        show={true}
        onHide={() => {
          // setShow(false);
          setModal(null);
        }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{dataArray[i].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{dataArray[i].subTitle}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              // setShow(false);
              setModal(null);
            }}
          >
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
        </Modal.Footer>
      </Modal>
    );
    setModal(m);
    handleShow();
  };

  return (
    <Observer>
      {() => {
        return (
          <Styles>
            {/* Icon Box */}
            <section className="icon-box-area">
              <Container>
                <Row>
                  {dataArray.map((data, i) => (
                    <Col md="3" key={i}>
                      <div
                        className="full-icon-box"
                        onClick={() => {
                          modalFun(i);
                          setShow(true);
                        }}
                      >
                        <div
                          className="icon-box d-flex icon-cards"

                        >
                          <div className={data.uniqClass}>
                            <i className={data.boxIcon}></i>
                          </div>
                          <div className="box-title">
                            <h6>{data.title}</h6>
                            <p>Know More</p>
                            {/* <Button>Show Modal</Button> */}

                            {/* <p>{`${data.subTitle.slice(0,50)}`}</p> */}
                            {/* <p>{data.subTitle}</p> */}
                            {/* <span
                              dangerouslySetInnerHTML={{
                                __html: data.extraWhiteSpace,
                              }}
                            ></span> */}
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
              {modal}
            </section>
          </Styles>
        );
      }}
    </Observer>
  );
};

export default IconBox;
