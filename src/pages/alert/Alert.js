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
            <div className="main-wrapper product-page">

                {/* Header 2 */}
                <HeaderTwo />

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


                                                {/* <div className="product-box">
                                                    <div className="product-img">
                                                        <img src={data.productImg} alt="" className="img-fluid" />
                                                        <div className="layer-box"></div>
                                                        <Link className="item_view" to={process.env.PUBLIC_URL + data.productUrl}>View Item</Link>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <div className="pro-title">
                                                            <h5><Link to={process.env.PUBLIC_URL + data.productUrl}>{data.productTitle}</Link></h5>
                                                        </div>
                                                        <div className="pro-rating">
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                            </ul>
                                                        </div>
                                                        <div className="pro-price">
                                                            <p> &#8377; {data.price}</p>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </Col>
                                        ))
                                    }

                                    {/* <Col md="12" className="text-center">
                                        <Pagination />
                                    </Col> */}
                                </Row>
                            </Col>

                            {/* <Col lg="3" md="4" sm="5">
                                <ShopSidebar />
                            </Col> */}
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <Footer />

            </div>
        </Styles>
    )
}

export default Alerts