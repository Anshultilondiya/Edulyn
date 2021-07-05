import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import CourseSidebar from './components/CourseSidebar';
import CourseItemList from './components/CourseItemsList';
import Footer from '../../components/Footer';
import { StyleFun } from './styles/course.js';
import { useClientStore } from '../../contextProviders/clientContext';
import { updateColorObj } from '../../utility';

const CourseList = () => {

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
        <div className="main-wrapper course-page">

            {/* Header 2 */}
            <HeaderTwo />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Courses" />

            <Styles>
                {/* Course Grid */}
                <section className="course-list-area">
                    <Container>
                        <Row>
                            {/* <Col lg="3" md="4" sm="5">
                                    <CourseSidebar />
                                </Col> */}
                            <Col lg="9" md="8" sm="7" style={{ margin: "auto" }}>
                                <div className="course-items2">
                                    <Row>
                                        <CourseItemList />
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>

            {/* Footer 2 */}
            <Footer />

        </div>
    )

}

export default CourseList