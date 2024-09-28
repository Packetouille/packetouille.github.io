import React from 'react'
import gsap from 'gsap';

const WhatWeAre = () => {
    gsap.fromTo("#short-description", {opacity: 0}, {opacity: 1, duration: 1.5, delay: 1})
    gsap.to(".websites", {color:'#8CD4A5', duration: 3.75, delay: 1.5, repeat: -1, yoyo: true})
    gsap.to(".consulting", {color:'#8CD4A5', duration: 2.5, delay: 2, repeat: -1, yoyo: true})
    gsap.to(".mobile-apps", {color:'#8CD4A5', duration: 3, delay: .5, repeat: -1, yoyo: true})

    return (
        <div className='half-section bkg-charcoal-900'>
            <h2 className='short-description mint-100'>We're a small but impactful development shop, creating <span className='websites'>custom websites</span> and <span className='mobile-apps'>mobile apps</span> for small and medium-sized businesses, while offering <span className='consulting'>consulting services</span> to empower your strategy!</h2>
        </div>
    )
}

export default WhatWeAre