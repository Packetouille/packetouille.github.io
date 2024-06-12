import {React, useState} from 'react'
import './userProfile.css'
import FacebookIcon from '../../../atoms/icons/FacebookIcon'
import TwitterIcon from '../../../atoms/icons/TwitterIcon'
import InstagramIcon from '../../../atoms/icons/InstagramIcon'
import avatar from '../../../../../assets/images/mj_avatar.jpg'
import StatCard from './StatCard'

const UserProfile = () => {
    const [following, setFollowing] = useState(false);

    return (
        <div id='profile-container'>
            <div id='profile-header'>
                <img src={avatar}/>
                <h2>Michael Jackson</h2>
                <p>@michaeljackson</p>
                <div id='profile-social-icons'>
                    <FacebookIcon onClick={() => alert("Onward to Facebook")} className="clickable" width="20px" height="20px" />
                    <TwitterIcon onClick={() => alert("Onward to Twitter")} className="clickable" width="20px" height="20px" />
                    <InstagramIcon onClick={() => alert("Onward to Instagram")} className="clickable" width="20px" height="20px" />
                </div>
            </div>
            <div id='profile-text-area'>
                <p>Cras mattis consectetur purus sit amet fermentum.</p>
            </div>
            <div id="profile-stats">
                <StatCard title='Posts' stat='603' />
                <StatCard title='Followers' stat={following ? '13.8K' : '13.7K'} />
                <StatCard title='Following' stat='61' />
            </div>
            <button onClick={() => setFollowing(!following)} className='profile-footer-btn'>{!following ? "FOLLOW" : "UNFOLLOW"}</button>
        </div>
    )
}

export default UserProfile