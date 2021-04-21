import React, { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power4 } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin";
import CSSPlugin from "gsap/CSSPlugin";
import author from "../utils/images/naeem.jpg";
import "./LandingSection.css";



export const LandingSection = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const imageReveal = CSSRulePlugin.getRule(".hero__container__image::after")
    const textReveal = CSSRulePlugin.getRule(".hero__container__info::after")

    gsap.registerPlugin(CSSPlugin, CSSRulePlugin)

    const tl = new TimelineLite();

    useEffect(() => {
        tl.to(textRef.current, { duration: 0, visibility: "visible" })
            .to(textReveal, { duration: 1.2, width: "0%", ease: Power4.easeInOut })
            .from(textRef.current, { duration: 1.2, scale: 1.2, ease: Power4.easeInOut, delay: -1.2 })
        tl.to(imageRef.current, { duration: 0, visibility: "visible", delay: -1.5 })
            .to(imageReveal, { duration: 1.2, width: "0%", ease: Power4.easeInOut, delay: -1.5 })
            .from(imageRef.current, { duration: 1.2, scale: 1.2, ease: Power4.easeInOut, delay: -1.2 })
    }, [])

    return (
        <>
            <div className="hero__container">
                <div className="hero__container__info__parent">
                    <div ref={textRef} className="hero__container__info">
                        <h1>Hi,</h1>
                        <h3>I'm NAEEM SHAIK</h3>
                        <p>Full Stack Web Developer !!</p>
                    </div>
                </div>
                <div className="hero__container__image__parent">
                    <div ref={imageRef} className="hero__container__image">
                        <img src={author} alt="author" />
                    </div>
                </div>
            </div>

        </>
    )
}


