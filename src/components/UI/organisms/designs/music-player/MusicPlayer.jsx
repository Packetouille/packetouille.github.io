import { React, Fragment, useState } from 'react'
import { Card} from 'react-bootstrap'
import HeaderImage from '../../../../../assets/images/city_landscape2.png'
import './musicPlayer.css'
import Heart from '../../../atoms/icons/Heart'
import Clock from '../../../atoms/icons/Clock'
import Track from './Track'
import Play from '../../../atoms/icons/Play'

const MusicPlayer = () => {
    const [likesCount, setLikesCount] = useState(35457)
    const [tracks, setTracks] = useState([
        {
            band: "Post Malone",
            title: "I Had Some Help",
            id: 0,
            liked: false
        },
        {
            band: "Kendrick Lamar",
            title: "Not Like Us",
            id: 1,
            liked: false
        },
        {
            band: "Tommy Richman",
            title: "Million Dollar Baby",
            id: 2,
            liked: false
        },
        {
            band: "Shaboozey",
            title: "A Bar Song (Tipsy)",
            id: 3,
            liked: false
        },
        {
            band: "Sabrina Carpenter",
            title: "Espresso",
            id: 4,
            liked: false
        },
        {
            band: "Zach Bryan",
            title: "Pink Skies",
            id: 5,
            liked: false
        },
        {
            band: "Teddy Swims",
            title: "Lose Control",
            id: 6,
            liked: false
        }
    ])

    const handleLiked = (id) => {
        setTracks(prevTracks => 
            prevTracks.map(track => {
                if (track.id === id) {
                    // Update likes count based on the current state of liked
                    setLikesCount(prevCount => (track.liked ? prevCount - 1 : prevCount + 1));
                    
                    // Toggle the liked state
                    return {
                        ...track,
                        liked: !track.liked
                    };
                }
                return track;
            })
        );
    }

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    return (
        <div id='music-player-container'>
            <div id='play-btn'><Play className="clickable" width="30px" height="30px" fill="black"/></div>
            <div id='music-player-header'>
                <Card.Img variant="top" src={HeaderImage} className='card-img' />
                <div id='music-player-header-text-area'>
                    <h1 className='text-outlined'>TODAY'S</h1>
                    <h1 className='text-bold-red-ds'>TOP HITS</h1>
                </div>
            </div>
            <div id='music-player-body'>
                <div id='music-player-stats'>
                    <p><Heart width="10px" height="15px" fill="none" strokeColor="var(--charcoal-800)"/> {formatNumber(likesCount)} Likes</p>
                    <p><Clock width="10px" height="15px" strokeColor="var(--charcoal-800)"/> 2h 36min</p>
                </div>
                <div id='music-player-featuring-area'>
                    <h1 className='highlight'>FEATURING</h1>
                    <div id='tracks-list'>
                        {tracks.map((track, index) => {
                            return (
                                <Fragment key={index}>
                                    <Track track={track} handleLiked={handleLiked}/>
                                    {(index !== tracks.length - 1) && <hr />}
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer