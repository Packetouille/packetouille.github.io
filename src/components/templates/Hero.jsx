import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'

const Hero = () => {
    return (
        <div id='hero-section'>
            <div id='hero-text-area' className='align-justify-center flex-column'>
                <h1>Hello, I'm <span className='gold-800'>Andres Londoño</span>.</h1>
                <h2 className='mb-4'>I am an aspiring full-stack developer.</h2>
                <Button className='custom-clear-btn hero-btn'>Check out my work</Button>
            </div>
        </div>
    )
}

export default Hero