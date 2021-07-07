import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import CourseItemList from './components/CourseItemsList';
import { StyleFun } from './styles/course.js';
import { useClientStore } from '../../contextProviders/clientContext';

const CourseList = () => {

    const clientStore = useClientStore();
    const [Styles,setStyles] = useState(StyleFun(clientStore.colors))

    return (
        <div className="main-wrapper course-page">

            
            <BreadcrumbBox title="Courses" />

            <Styles>
                
                <section className="course-list-area">
                    <Container>
                        <Row>
                            
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

           

        </div>
    )

}

export default CourseList