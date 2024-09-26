import {React, useLayoutEffect, useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import Box from '../Box'

const About = (props) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".blue-box", {
                scrollTrigger: {
                    trigger: '.blue-box',
                    start: "-=300 center",
                    end: "+=300",
                    // markers: true,
                    scrub: 2,
                },
                x: 400,
                rotation: 360,
                duration: 3
            });
            return () => ctx.revert(); // cleanup
        });
        return () => ctx.revert(); // cleanup
    },[])

    return (
        <div id='about-section' ref={el => props.slideRefs.current = { ...props.slideRefs.current, about: el}}>
            <Box boxName="blue-box"/>
        </div>
    )
}

export default About