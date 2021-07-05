import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/Footer';
import { StyleFun } from './styles/product.js';
import { fetchAchievement } from './../../apis/api'
import { useClientStore } from '../../contextProviders/clientContext';
import { updateColorObj } from '../../utility';

const Achievements = () => {

    const clientStore = useClientStore();
    const [arr, setArr] = useState([]);
    useEffect(() => {
        getAchievements();
    }, [])

    const getAchievements = async () => {
        const res = await fetchAchievement(clientStore.webHash);
        console.log(res.response);
        setArr(res.response)
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
                <BreadcrumbBox title="Achievements" />

                {/* Products */}
                <section className="product-area">
                    <Container>
                        <Row>
                            <Col lg="11" md="11" sm="11" xs="9" style={{ margin: "auto" }}>
                                <Row>
                                    {
                                        arr.map((data, i) => (
                                            <Col lg="4" md="4" sm="6" key={i}>
                                                <div className="product-box">
                                                    <div className="product-img">
                                                        <img src={data.image} alt="" className="img-fluid" />
                                                        <span className="rank"><span>Rank</span><span>{data.rank}</span></span>
                                                        {/* <div className="layer-box"></div>
                                                        <Link className="add_cart" to={process.env.PUBLIC_URL + data.productUrl}>Add To Cart</Link>
                                                        <Link className="item_view" to={process.env.PUBLIC_URL + data.productUrl}>View Item</Link> */}
                                                    </div>
                                                    <div className="product-content text-center">
                                                        <div className="pro-title">
                                                            <h5>{data.class} | {data.session}</h5>
                                                            <h5>{data.name}</h5>
                                                            <h5>Score : {data.marks} / {data.total_marks}</h5>
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
                                                            <p>{data.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))
                                    }


                                </Row>
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

export default Achievements