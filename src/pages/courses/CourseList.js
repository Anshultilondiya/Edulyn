import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import CourseItemList from './components/CourseItemsList';
import Footer from '../../components/Footer';
import { StyleFun } from './styles/course.js';
import { useClientStore } from '../../contextProviders/clientContext';

const CourseList = () => {

    const clientStore = useClientStore();
    const [Styles,setStyles] = useState(StyleFun(clientStore.colors))

    return (
        <div className="main-wrapper course-page">

            {/* Header 2 */}
            {/* <HeaderTwo /> */}

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
            {/* <Footer /> */}

        </div>
    )

}

export default CourseList