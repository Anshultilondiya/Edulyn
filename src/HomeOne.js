import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import IconBox from "./components/IconBox";
import AboutUs from "./components/AboutUs";
import CourseFilter from "./components/CourseFilter";
import TestimonialSlider from "./components/TestimonialSlider";
import FaqEvent from "./components/FaqEvent";
import TeamSlider from "./components/TeamSlider";
import HelpArea from "./components/HelpArea";
import HomeBlog from "./components/HomeBlog";
import CampusTour from "./components/CampusTour";
import NewsletterForm from "./components/NewsletterForm";
import Footer from "./components/Footer";
import PackageSection from "./components/PackageSection";
import { Modal } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr"

import { useClientStore } from "./contextProviders/clientContext"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="modalHome"
    >     <div
      style={{
        width: "max-content",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        maxWidth: "70%",
        backgroundColor: "transparent",
      }}
    >
        <GrFormClose onClick={props.onHide} style={{ color: "#ffffff", fontSize: "250%", border: "3px solid #ffffff", borderRadius: "50%", position: "absolute", top: "-40px", right: "-40px" }} />
        <img
          src="https://images.unsplash.com/photo-1623996458525-8b879346cc6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          style={{
            maxHeight: "auto",
            width: "100%",
            margin: "auto"
          }}
          alt="" />
      </div>

    </Modal >
  );
}

const HomeOne = () => {


  const clientStore = useClientStore();
  const [modalShow, setModalShow] = useState(true);

  const [homeShow, setHomeShow] = useState(false);

  useEffect(() => {
    setHomeShow(true)
  }, [])




  return homeShow ? (
    <div className="main-wrapper">

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {clientStore.webConfig.cms_slider == 'true' ? (<HeroSlider />) : (<></>)}
      {/* Icon Box */}
      {clientStore.webConfig.cms_features == 'true' ? (<IconBox />) : (<></>)}
      {/* About Area */}
      {clientStore.webConfig.cms_institute_details == 'true' ? (<AboutUs />) : (<></>)}
      {/* Course Filter */}
      {clientStore.webConfig.cms_course == 'true' ? (<CourseFilter />) : (<></>)}
      {/* Testimonial Slider */}
      {clientStore.webConfig.cms_testimonial == 'true' ? (<TestimonialSlider />) : (<></>)}
      {/* Packages */}
      {clientStore.webConfig.cms_course == 'true' ? (<PackageSection />) : (<></>)}
      {/* Faq & Event Area */}
      <FaqEvent />
      {/* Team Slider */}
      {clientStore.webConfig.cms_faculty_details == 'true' ? (<TeamSlider />) : (<></>)}
      {/* Blog Area */}
      {clientStore.webConfig.cms_blogs == 'true' ? (<HomeBlog />) : (<></>)}
    </div>
  ) : null;

}

export default HomeOne;
