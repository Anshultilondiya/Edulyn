import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop";
import { GlobalStyle } from "./components/common/styles/global.js";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import About from "./pages/about/About";
import CourseGrid from "./pages/courses/CourseGrid";
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
import BlogClassic from "./pages/blog/BlogClassic";
import BlogGrid from "./pages/blog/BlogGrid";
import BlogDetails from "./pages/blog/BlogDetails";
import Product from "./pages/shop/Products";
import Packages from "./pages/packages/Packages";
import ProductDetails from "./pages/shop/ProductDetails";
import Cart from "./pages/shop/Cart";
import Alert from "./pages/alert/Alert";
import Achievements from "./pages/achievements/Achievements";
import Batches from "./pages/batches/Batches";

// Additional Swiper Css for adding functionality
import "swiper/swiper-bundle.css";

// Importing APIs

import { fetchInstituteDetails, fetchWebData, fetchWebHash } from "./apis/api";

// Importing MobX and Stores
import { useClientStore } from "./contextProviders/clientContext";
import { Observer } from "mobx-react";


const App = () => {
  const clientStore = useClientStore();
  const domain = "aashishtararshub.in";
  useEffect(() => {
    // getWebHash(domain);
    // getSliderData();
    getInstituteDetails();
    getWebData();
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
    console.log(clientStore.instituteDetails !== {});
    console.log("Institute Details", res.response);
  };

  let colors = {

    bg1: "#182B49",
    bg2: "#F6F9FF",
    bg3: "#11B67A",
    gr_bg: "linear-gradient(90deg, #11B67A 0%, #009444 100%)",
    gr_bg2: "linear-gradient(90deg, #009444 0%, #11B67A 100%)",
    copy_bg: "#122340",
    blue: "#2c97ea",
    green: "#11B67A",
    green2: "#00a76a",
    red: "#ff6f6f",
    purple: "#84479c",
    yellow: "#fbab19",
    black1: "#182B49",
    black2: "#444444",
    text1: "#555555",
    text2: "#666666",
    text3: "#969696",
    text4: "#aaaaaa",
    text5: "#cccccc",
    border1: "#eeeeee",
    border2: "#3e3e3e",
    border3: "#dddddd",
    footer1: "#1a1b25",
    footer2: "#16171f",
    ftext: "#8D8E92",
    white: "ffffff"
  }

  const colorFun = (obj) => {
    colors.bg1 = obj.primary;
    colors.bg2 = obj.secondary;
    colors.bg3 = obj.ternary;
    console.log("After", colors)
    clientStore.colors = colors;
  }
  const getWebData = async () => {
    const res = await fetchWebData(clientStore.webHash);
    console.log("web Data JSON", res);
    document.title = res.detail.web_title;
    clientStore.webDetails = res.detail;
    clientStore.webConfig = res.config;
    clientStore.webLayout = res.layout;
    colorFun(res.layout);
  }

  return (
    <Observer>
      {() => {
        return (
          <Router>
            <GlobalStyle />
            <ScrollToTop />
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
              <Route
                path={`${process.env.PUBLIC_URL + "/about"}`}
                component={About}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/course-grid"}`}
                component={CourseGrid}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/course-list"}`}
                component={CourseList}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/course-details/:courseID"}`}
                component={CourseDetails}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/instructor"}`}
                component={Instructor}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/instructor-details"}`}
                component={InstructorDetails}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/gallery"}`}
                component={Gallery}
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
                path={`${process.env.PUBLIC_URL + "/career"}`}
                component={Career}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/franchise"}`}
                component={Franchise}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/admission"}`}
                component={Admission}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/contact"}`}
                component={Contact}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/faq"}`}
                component={Faq}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/alerts"}`}
                component={Alert}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/achievements"}`}
                component={Achievements}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/batches"}`}
                component={Batches}
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
                path={`${process.env.PUBLIC_URL + "/blog-classic"}`}
                component={BlogClassic}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/blog-grid"}`}
                component={BlogGrid}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/blog-details/:blogID"}`}
                component={BlogDetails}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/products"}`}
                component={Product}
              />
              <Route
                path={`${process.env.PUBLIC_URL + "/packages"}`}
                component={Packages}
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
            </Switch>
          </Router>
        );
      }}
    </Observer>
  );
};

export default App;
