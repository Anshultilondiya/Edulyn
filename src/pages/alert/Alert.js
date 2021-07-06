import React, { useEffect, useState } from 'react';
// import Datas from '../../data/shop/product.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/Footer';
import { StyleFun } from './styles/product.js';
import { useClientStore } from '../../contextProviders/clientContext';
import { fetchAlerts } from '../../apis/api';
// import { nanoid } from 'nanoid';
// import { moment } from "moment"
import { updateColorObj } from '../../utility';
import { AiOutlineInfoCircle } from "react-icons/ai"


const Alerts = () => {

    const clientStore = useClientStore();
    const [alerts, setAlerts] = useState([])
    useEffect(() => {
        getPackageData()
    }, [])

    const getPackageData = async () => {
        const res = await fetchAlerts(clientStore.webHash, 10);
        // let arr = buildPackage(res.response)
        setAlerts(res.response)
        console.log(res.response)
    }

    
    const [Styles, setStyles] = useState(StyleFun(clientStore.colors));


    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper product-page">

                {/* Header 2 */}
                {/* <HeaderTwo /> */}

                {/* Breadcroumb */}
                <BreadcrumbBox title="Alerts" />

                {/* Products */}
                <section className="product-area">
                    <Container>
                        <Row>
                            <Col lg="11" style={{ margin: "auto" }}>
                                <Row>
                                    {
                                        alerts.map((data, i) => (
                                            <Col lg="6" key={i}>
                                                <Alert key={i} className="alert-container" variant="info">
                                                    <div>
                                                        <AiOutlineInfoCircle size="30px" />
                                                    </div>
                                                    <p>{data.message}</p>
                                                    <Alert.Link href={`${data.link}`} >Know More</Alert.Link>
                                                </Alert>


                                                
                                            </Col>
                                        ))
                                    }

                                    
                                </Row>
                            </Col>

                            
                        </Row>
                    </Container>
                </section>


            </div>
        </Styles>
    )
}

export default Alerts