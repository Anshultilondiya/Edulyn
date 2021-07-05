import React, { useEffect, useState } from 'react';
// import Datas from '../../data/shop/product.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { StyleFun } from './styles/packageSection';
import { useClientStore } from '../contextProviders/clientContext';
import { fetchPackageDetails } from '../apis/api';
// import { nanoid } from 'nanoid';
// import { moment } from "moment"
import { buildPackage } from '../utility';
import { getColorObj } from './common/element/elements';
import { updateColorObj } from '../utility';

const PackageSection = () => {

    const clientStore = useClientStore();
    const [packages, setPackages] = useState([])
    useEffect(() => {
        getPackageData()
    }, [])

    const getPackageData = async () => {
        const res = await fetchPackageDetails(clientStore.webHash, 3);
        let arr = buildPackage(res.response)
        setPackages(arr)
        // console.log(res.response)
    }
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
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper product-page">
                {/* Products */}
                <section className="product-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>We Provide Best Quality Packages. Find the Right One That Fits You.</h4>
                                </div>
                            </Col>
                            <Col lg="11" md="9" sm="8" style={{ margin: "auto" }}>
                                <Row>
                                    {
                                        packages.map((data, i) => (
                                            <Col lg="4" md="6" key={i}>
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        {/* <img src={process.env.PUBLIC_URL + `/assets/images/${data.productImg}`} alt="" className="img-fluid" /> */}
                                                        <img src={data.productImg} alt="" className="img-fluid" />
                                                        {/* <span>{data.discount}</span> */}
                                                        <div className="layer-box"></div>
                                                        {/* <Link className="add_cart" to={process.env.PUBLIC_URL + data.productUrl}>Add To Cart</Link> */}
                                                        <Link className="item_view" to={process.env.PUBLIC_URL + data.productUrl}>View Item</Link>
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <div className="pro-title">
                                                            <h5><Link to={process.env.PUBLIC_URL + data.productUrl}>{data.productTitle}</Link></h5>
                                                        </div>
                                                        {/* <div className="pro-rating">
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                <li className="list-inline-item"><i className="las la-star-half-alt"></i></li>
                                                            </ul>
                                                        </div> */}
                                                        <div className="pro-price">
                                                            <p> Price : &#8377; {data.price}</p>
                                                        </div>
                                                        <div>
                                                            <p>{data.courseDuration}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                            <Col md="12" className="text-center">
                                <div className="viewall-btn">
                                    <Link to={process.env.PUBLIC_URL + "/packages"}>
                                        View All Packages
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Styles>
    )
}

export default PackageSection