import React from 'react'

const StatCard = (props) => {
    return (
        <div className='profile-stat-card'>
            <h3>{props.title}</h3>
            <h1>{props.stat}</h1>
        </div>
    )
}

export default StatCard