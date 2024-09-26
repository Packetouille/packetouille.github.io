import {React, useState, useRef, useEffect} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import About from '../templates/About'
import Hero from '../templates/Hero'
import Projects from '../templates/Projects'
import Header from '../UI/organisms/Header'
import Contact from '../templates/Contact'

const MainPage = () => {
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
            <About pageSelected={pageSelected} slideRefs={slideRefs}/>
            <Projects slideRefs={slideRefs}/>
            <Contact slideRefs={slideRefs}/>
        </div>
    )
}

export default MainPage