import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop";
import { GlobalStyleFun } from "./components/common/styles/global.js";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import About from "./pages/about/About";
// import CourseGrid from "./pages/courses/CourseGrid";
import CourseList from "./pages/courses/CourseList";
import CourseDetails from "./pages/courses/CourseDetails";
import Instructor from "./pages/instructor/Instructors";
import InstructorDetails from "./pages/instructor/InstructorDetails";
import Gallery from "./pages/gallery/Gallery";
import Events from "./pages/events/Events";
import EventDetails from "./pages/events/EventsDetails";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import Career from "./pages/forms/career";
import Franchise from "./pages/forms/franchise";
import Admission from "./pages/forms/admission";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";
import PageNotFound from "./pages/404/PageNotFound";
import ComingSoon from "./pages/comingsoon/ComingSoon";
import BlogGrid from "./pages/blog/BlogGrid";
import BlogDetails from "./pages/blog/BlogDetails";
import Product from "./pages/shop/Products";
import Packages from "./pages/packages/Packages";
import ProductDetails from "./pages/shop/ProductDetails";
import Cart from "./pages/shop/Cart";
import Alert from "./pages/alert/Alert";
import Achievements from "./pages/achievements/Achievements";
import Batches from "./pages/batches/Batches";
import { Modal, Button } from "react-bootstrap";
import { GrFormClose } from "react-icons/gr"


// Additional Swiper Css for adding functionality
import "swiper/swiper-bundle.css";

// Importing APIs

import { fetchInstituteDetails, fetchWebData, fetchWebHash } from "./apis/api";

// Importing MobX and Stores
import { useClientStore } from "./contextProviders/clientContext";
import { Observer } from "mobx-react";
import Loader from "./Loader";
import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Footer from "./components/Footer";


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



const App = () => {
  const clientStore = useClientStore();
  const [show, setShow] = useState(true)
  const domain = "aashishtararshub.in";
  useEffect(() => {
    getWebData();
    getInstituteDetails();
  }, []);

  const getWebHash = async (domain) => {
    const res = await fetchWebHash(domain);
    clientStore.updateHash(
      res.response[0]["inst_hash"],
      res.response[0]["expiry_date"]
    );
    return res;
  };

  const getInstituteDetails = async () => {
    const res = await fetchInstituteDetails(clientStore.webHash);
    clientStore.instituteDetails = res.response;
    clientStore.logo = "https://careerliftprod.s3.amazonaws.com/website_logo/" + res.response["Header Logo"];
  };

  const [colors, setColors] = useState(clientStore.colors);
  const [GlobalStyle, setGlobalStyle] = useState(GlobalStyleFun(colors));

  const getWebData = async () => {
    const res = await fetchWebData(clientStore.webHash);
    document.title = res.detail.web_title;
    clientStore.webDetails = res.detail;
    clientStore.webConfig = res.config;
    clientStore.webLayout = res.layout;
    let colObj = clientStore.updateColors(res.layout)
    setColors(colObj)
    setGlobalStyle(GlobalStyleFun(colObj))
    setShow(false)
  }
  const [modalShow, setModalShow] = useState(true);

  return (
    <Observer>
      {() => {
        return (
          <Router>
            {show ? (<Loader />) : null}
            <GlobalStyle />
            <ScrollToTop />

            {!show ? (

              <div>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <Header />
                <HeaderTwo />
                <Switch>
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL + "/"}`}
                    component={HomeOne}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/home-two"}`}
                    component={HomeTwo}
                  />

                  <Route path={`${process.env.PUBLIC_URL + "/about"}`}>
                    {clientStore.webConfig.cms_institute_details == 'true' ? (<About />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/course-list"}`}>
                    {clientStore.webConfig.cms_course == 'true' ? (<CourseList />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/course-details/:courseID"}`}>
                    {clientStore.webConfig.cms_course == 'true' ? (<CourseDetails />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/instructor"}`}>
                    {clientStore.webConfig.cms_faculty_details == 'true' ? (<Instructor />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/instructor-details"}`}>
                    {clientStore.webConfig.cms_faculty_details == 'true' ? (<InstructorDetails />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/gallery"}`}>
                    {clientStore.webConfig.cms_images == 'true' ? (<Gallery />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/contact"}`}>
                    {clientStore.webConfig.cms_contact_details == 'true' ? (<Contact />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/alerts"}`}>
                    {clientStore.webConfig.cms_alerts == 'true' ? (<Alert />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/batches"}`}>
                    {clientStore.webConfig.cms_batch == 'true' ? (<Batches />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`}>
                    {clientStore.webConfig.cms_blogs == 'true' ? (<BlogGrid />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/blog-details/:blogID"}`}>
                    {clientStore.webConfig.cms_blogs == 'true' ? (<BlogDetails />) : (<></>)}
                  </Route>

                  <Route path={`${process.env.PUBLIC_URL + "/packages"}`}>
                    {clientStore.webConfig.cms_course == 'true' ? (<Packages />) : (<></>)}
                  </Route>

                  <Route
                    path={`${process.env.PUBLIC_URL + "/career"}`}
                    component={Career}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/franchise"}`}
                    component={Franchise}
                  />

                  <Route path={`${process.env.PUBLIC_URL + "/admission"}`}>
                    {clientStore.webConfig.cms_admission == 'true' ? (<Admission />) : (<></>)}
                  </Route>

                  <Route
                    path={`${process.env.PUBLIC_URL + "/faq"}`}
                    component={Faq}
                  />

                  <Route
                    path={`${process.env.PUBLIC_URL + "/achievements"}`}
                    component={Achievements}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/events"}`}
                    component={Events}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/event-details"}`}
                    component={EventDetails}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/login"}`}
                    component={Login}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/registration"}`}
                    component={Register}
                  />

                  <Route
                    path={`${process.env.PUBLIC_URL + "/404"}`}
                    component={PageNotFound}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/coming-soon"}`}
                    component={ComingSoon}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/products"}`}
                    component={Product}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/product-details"}`}
                    component={ProductDetails}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL + "/cart"}`}
                    component={Cart}
                  />

                  <Route
                    path={`${process.env.PUBLIC_URL + "/"}`}
                    component={PageNotFound}
                  />
                </Switch> <Footer /> </div>) : null}
          </Router>
        );
      }}
    </Observer>
  );
};

export default App;
