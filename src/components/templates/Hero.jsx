import {React, useLayoutEffect} from 'react';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import BackgroundImg from '../../assets/images/hero_background.jpg';

const Hero = ({ slideRefs }) => {
    gsap.registerPlugin(TextPlugin)

    useLayoutEffect(() => {
        // gsap.fromTo("#hero-text-area", {opacity: 0}, {opacity: 1, duration: 3, delay: 1})
        gsap.fromTo("#hero-text-area h1", {y:-100, opacity: 0}, {y:0, opacity: 1, duration: 1.5, delay: 1})
        gsap.fromTo("#hero-text-area h2", {y:50, opacity: 0}, {y:0, opacity: 1, duration: 2, delay: 1})
        gsap.fromTo("#hero-text-area button", {opacity: 0}, {opacity: 1, duration: 1, delay: 3})
        gsap.to(".websites", {color:'#FFAC42', duration: 3, delay: 3.5, repeat: -1, yoyo: true})
        gsap.to(".consulting", {color:'#FFAC42', duration: 1.5, delay: 3, repeat: -1, yoyo: true})
        gsap.to(".mobile-apps", {color:'#FFAC42', duration: 2, delay: 4.5, repeat: -1, yoyo: true})
    },[])

    return (
        <div id='hero-section' className='hero-background' ref={el => slideRefs.current = { ...slideRefs.current, home: el}}>
            <div id='hero-text-area' className='align-justify-center flex-column'>
                <h1><span className='digital-solutions gold-900'><strong>Digital solutions</strong></span> for your growing business</h1>
                <h2 className='mb-4'>We create <span className='websites'>custom websites</span>, <span className='mobile-apps'>mobile apps</span>, and offer <span className='consulting'>consulting services</span> to empower small and medium-sized businesses.</h2>
                <Button className='custom-clear-btn hero-btn'>Book your free consultation</Button>
            </div>
        </div>
    )
}

export default Hero