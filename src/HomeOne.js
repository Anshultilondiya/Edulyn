import React, { Component } from "react";
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

import { useClientStore } from "./contextProviders/clientContext"

const HomeOne = () => {


  const clientStore = useClientStore();
  return (
    <div className="main-wrapper">
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

      {/* Help Area */}
      {/* <HelpArea /> */}
      {/* Blog Area */}
      {clientStore.webConfig.cms_blogs == 'true' ? (<HomeBlog />) : (<></>)}
      {/* Header */}
      {/* <Header /> */}

      {/* Hero Slider */}
      {/* <HeroSlider /> */}

      {/* Icon Box */}
      {/* <IconBox /> */}

      {/* About Area */}
      {/* <AboutUs /> */}

      {/* Course Filter */}
      {/* <CourseFilter /> */}

      {/* Testimonial Slider */}
      {/* <TestimonialSlider /> */}

      {/* Packages */}
      {/* <PackageSection /> */}


      {/* Faq & Event Area */}
      {/* <FaqEvent /> */}

      {/* Team Slider */}
      {/* <TeamSlider /> */}

      {/* Help Area */}
      {/* <HelpArea /> */}

      {/* Blog Area */}
      {/* <HomeBlog /> */}

      {/* Campus Tour */}
      {/* <CampusTour /> */}

      {/* Newsletter Form */}
      {/* <NewsletterForm /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );

}

export default HomeOne;
