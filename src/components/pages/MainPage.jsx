import {React} from 'react'
import About from '../templates/About'
import Hero from '../templates/Hero'
import Projects from '../templates/Projects'
import Header from '../UI/organisms/Header'


const MainPage = () => {
    return (
        <div id='main-container'>
            <Header />
            <Hero />
            <About />
            <Projects />
        </div>
    )
}

export default MainPage