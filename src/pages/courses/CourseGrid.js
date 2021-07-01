import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTwo from "../../components/HeaderTwo";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import CourseSidebar from "./components/CourseSidebar";
import CourseItemGrid from "./components/CourseItemsGrid";
import Footer from "../../components/Footer";
import { Styles } from "./styles/course.js";
import { Observer } from "mobx-react";
import { useClientStore } from "../../contextProviders/clientContext";

const CourseGrid = () => {
  const clientStore = useClientStore();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])




  return (
    <Observer>
      {() => {
        return (
          <div className="main-wrapper course-page">
            {/* Header 2 */}
            <HeaderTwo />

            {/* Breadcroumb */}
            <BreadcrumbBox title="Courses" />

            <Styles>
              {/* Course Grid */}
              <section className="course-grid-area">
                <Container>
                  <Row>
                    {/* <Col lg="3" md="4" sm="5">
                      <CourseSidebar />
                    </Col> */}
                    <Col xl="12" lg="12" md="12" sm="9" xs="9" style={{ margin: "auto" }}>
                      <div className="course-items">
                        <Row>
                          <CourseItemGrid />
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
        );
      }}
    </Observer>
  );
};

export default CourseGrid;
