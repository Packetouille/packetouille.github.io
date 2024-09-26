import { Container, Nav, Navbar } from 'react-bootstrap'
import {React, useRef} from 'react'

const Header = (props) => {
    return (
        <Navbar defaultExpanded collapseOnSelect expand="lg" className='bg-body-tertiary container-fluid nav-bar-container navbar'>
            <Container>
                <Navbar.Brand expand="xxl" href="#home">Simpli-Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="">
                    <Nav variant='' className='justify-content-center me-auto' defaultActiveKey="/home">
                        <Nav.Item>
                        <Nav.Link className={(props.pageSelected === "home") ? 'active' : null} onClick={() => props.scrollIntoView("home")}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={(props.pageSelected === "about") ? 'active' : null} onClick={() => props.scrollIntoView("about")}>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className={(props.pageSelected === "projects") ? 'active' : null} onClick={() => props.scrollIntoView("projects")}>Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className={(props.pageSelected === "contact") ? 'active' : null} onClick={() => props.scrollIntoView("contact")}>Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>   
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    )
}

export default Header;