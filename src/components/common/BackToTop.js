import React, { useEffect, useState } from 'react';
import { StyleFun } from "./styles/backToTop.js";

import { useClientStore } from "./../../contextProviders/clientContext";
import { updateColorObj } from "./../../utility"



function BackToTop() {

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



    useEffect(() => {
        const topBtn = document.querySelector(".totop-btn");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 750) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });

        topBtn.addEventListener("click", smoothScrollBackToTop);

        function smoothScrollBackToTop() {
            const targetPosition = 0;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 750;
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) window.requestAnimationFrame(step);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        };
    });

    return (
        <Styles>
            {/* Back To Top */}
            <button type="text" className="totop-btn">
                <i className="las la-arrow-up"></i>
            </button>
        </Styles>
    )
}

export default BackToTop