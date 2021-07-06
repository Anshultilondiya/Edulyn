import React, { useEffect, useState, useRef } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import AboutUs from '../../components/AboutUs';
import IconBox from '../../components/IconBox';
import TabBox from './../../components/TabBox';
import TestimonialSlider from '../../components/TestimonialSlider';
import FaqEvent from '../../components/FaqEvent';
import Footer from '../../components/Footer';
import { StyleFun } from "./styles/about.js";
import { useClientStore } from '../../contextProviders/clientContext';
import { updateColorObj } from '../../utility';

const About = () => {
    const clientStore = useClientStore();

    const [Styles,setStyles] = useState(StyleFun(clientStore.colors))
    
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper about-page">

                

                {/* Breadcroumb */}
                <BreadcrumbBox title="About Us" />

                {/* About Area */}
                <AboutUs />

            

                {/* Tab Section */}
                <TabBox />

               

            </div>
        </Styles>
    )

}

export default About