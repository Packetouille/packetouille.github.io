import {React, useLayoutEffect} from 'react';
import gsap from 'gsap';
import { Container, Row, Col, Button} from 'react-bootstrap';
import BackgroundImg from '../../assets/images/hero_background.jpg';

const Hero = ({ slideRefs }) => {
    useLayoutEffect(() => {
        gsap.fromTo("#hero-text-area h1", {y:-100, opacity: 0}, {y:0, opacity: 1, duration: 1.5, delay: 1})
        gsap.fromTo("#hero-text-area button", {opacity: 0}, {opacity: 1, duration: 1, delay: 2})
    },[])

    return (
        <div id='hero-section' className='hero-background' ref={el => slideRefs.current = { ...slideRefs.current, home: el}}>
            <div id='hero-text-area' className='align-justify-center flex-column'>
                <h1><span className='digital-solutions gold-900'><strong>Digital solutions</strong></span> for your growing business</h1>
                <Button className='custom-clear-btn hero-btn'>Book your 30-minute free consultation</Button>
            </div>
        </div>
    )
}

export default Hero