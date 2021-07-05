import React, { useEffect, useState } from 'react';
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
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper about-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="About Us" />

                {/* About Area */}
                <AboutUs />

                {/* Icon Box Area */}
                {/* <IconBox /> */}

                {/* Tab Section */}
                <TabBox />

                {/* Testimonial Slider */}
                {/* <TestimonialSlider /> */}

                {/* Faq & Event Area */}
                {/* <FaqEvent /> */}

                {/* Footer 2 */}
                <Footer />

            </div>
        </Styles>
    )

}

export default About