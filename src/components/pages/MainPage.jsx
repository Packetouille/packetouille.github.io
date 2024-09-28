import {React, useState, useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from '../sections/About'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Header from '../UI/organisms/Header'
import Contact from '../sections/Contact'
import FullColTemplate from '../templates/FullColTemplate';
import WhatWeAre from '../sections/WhatWeAre';

const MainPage = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

    const [pageSelected, setPageSelected] = useState('home');
    const slideRefs = useRef({});
    const scrollIntoView = (type) => {
        setPageSelected(type);
        slideRefs.current[type].scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div id='main-container'>
            <Header scrollIntoView={scrollIntoView} pageSelected={pageSelected}/>
            <Hero slideRefs={slideRefs}/>
            <WhatWeAre />
            <About pageSelected={pageSelected} slideRefs={slideRefs}/>
            <Projects slideRefs={slideRefs}/>
            <Contact slideRefs={slideRefs}/>
        </div>
    )
}

export default MainPage