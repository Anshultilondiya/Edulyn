import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/Footer';
import { Styles } from './styles/product.js';
import { fetchBatch } from '../../apis/api'
import { useClientStore } from '../../contextProviders/clientContext';

const Batches = () => {

    const clientStore = useClientStore();
    const [arr, setArr] = useState([]);
    useEffect(() => {
        getBatches();
    }, [])

    const getBatches = async () => {
        // const res = await fetchBatch(clientStore.webHash);
        const res = await fetchBatch("aebf83c97b89222ae69469ee94fda40e");
        console.log(res.response);
        setArr(res.response)
    }

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper product-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Batches" />

                {/* Products */}
                <section className="product-area">
                    <Container>
                        <Row>
                            <Col lg="11" md="11" sm="11" xs="9" style={{ margin: "auto" }}>
                                <Row>
                                    <Col>
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Batch Name</th>
                                                    <th>Batch Timing</th>
                                                    <th>Subject</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {arr.map((el, i) => (

                                                    <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{el.batch_name}</td>
                                                        <td>{el.batch_timing}</td>
                                                        <td>{el.batch_subject}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Col>
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

export default Batches