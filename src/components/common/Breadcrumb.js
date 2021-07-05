import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { StyleFun } from "./styles/breadcrumb.js";
import { Link } from 'react-router-dom';
import { useClientStore } from '../../contextProviders/clientContext.js';
import { updateColorObj } from '../../utility.js';

export const BreadcrumbBox = (props) => {
    const clientStore = useClientStore();

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

    const state = "https://images.unsplash.com/photo-1602131010835-412c62f26aaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"



    return (
        <Styles>
            <section className="breadcrumb-area" style={{ backgroundImage: state }}>
                <Container>
                    <Row>
                        <Col md="12" className="text-center">
                            <div className="breadcrumb-box">
                                <h2 className="breadcrumb-title">{props.title}</h2>
                                <Breadcrumb>
                                    <Breadcrumb.Item><Link to={process.env.PUBLIC_URL}>Home</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item active>{props.title}</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )

}