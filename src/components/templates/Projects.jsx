import {React, useState} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import DesignCard from './DesignCard'
import UserProfile from '../UI/organisms/designs/user-profile/UserProfile'
import EcommerceItem from '../UI/organisms/designs/ecommerce-item/EcommerceItem'
import MusicPlayer from '../UI/organisms/designs/music-player/MusicPlayer'

const Projects = () => {
    const [design, setDesign] = useState("User Profile")

    const handleSwitch = () => {
        switch(design) {
            case "User Profile":
                return <UserProfile />
            case "Ecommerce Item":
                return <EcommerceItem />
            case "Music Player":
                return <MusicPlayer />
            default:
                return null
        }
    }

    return (
        <div id='projects-section'>
            <Container>
                <div id='projects-container'>
                    <ul>
                        <li className='clickable' onClick={() => setDesign("User Profile")}>User Profile</li>
                        <li className='clickable' onClick={() => setDesign("Ecommerce Item")}>Ecommerce Item</li>
                        <li className='clickable' onClick={() => setDesign("Music Player")}>Music Player</li>
                        <li className='clickable' onClick={() => setDesign("Music Player")}>Music Player</li>
                    </ul>
                    <DesignCard design={handleSwitch(design)} />
                </div>
            </Container>
        </div>
    )
}

export default Projects