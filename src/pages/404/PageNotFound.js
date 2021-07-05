import React, { useEffect, useState } from 'react';
import Datas from '../../data/404/error.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import Footer from '../../components/Footer';
import { StyleFun } from './styles/pageNotFound.js';
import { useClientStore } from "./../../contextProviders/clientContext"
import { updateColorObj } from "./../../utility"
const PageNotFound = () => {
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
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper error-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* 404 Area */}
                <section className="error-area"
                    // style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                    style={{ backgroundImage: `url(https://media.cntraveler.com/photos/5c64813396daf10fa54e3d71/master/w_4000,h_2648,c_limit/Saba-Island_GettyImages-sb10070113b-001.jpg)` }}>
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="error-box text-center">
                                    <h1>4<span>0</span>4</h1>
                                    <h3>Page Not Found</h3>
                                    <p>Ooops! The page you are looking for, couldn't be found.</p>
                                    <Link to={process.env.PUBLIC_URL + "/"}><i className="fas fa-home"></i>Go To Homepage</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <Footer />
            </div>
        </Styles>
    )

}

export default PageNotFound