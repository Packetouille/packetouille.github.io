import React from 'react'
import Heart from '../../../atoms/icons/Heart'
import MenuDots from '../../../atoms/icons/MenuDots'

const Track = (props) => {
    return (
        <div className='track-container'>
            <div className='band-img-placeholder'/>
            <div className='track-text-area'>
                <h2>{props.track.band}</h2>
                <p>{props.track.title}</p>
            </div>
            <div className='track-btn-area'>
                <Heart className="clickable" onClick={() => props.handleLiked(props.track.id)} width="30px" height="30px" fill={(props.track.liked) ? "var(--green)" : "none"} strokeColor={(props.track.liked) ? "var(--green)" : "var(--charcoal-800)"}/>
                <MenuDots className="clickable" width="35px" height="35px" fill="none" strokeColor="var(--charcoal-800)"/>
            </div>
        </div>
    )
}

export default Track