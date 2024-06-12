import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'

const Header = () => {
    return (
        <Navbar defaultExpanded collapseOnSelect expand="lg" className='bg-body-tertiary container-fluid'>
            <Container >
                <Navbar.Brand href="#home">iconiq</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav variant='' className='justify-content-center me-auto' defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                        </Nav.Item>
                    </Nav>   
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    )
}

export default Header;