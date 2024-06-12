import React from 'react'
import { Container } from 'react-bootstrap'

const DesignCard = (props) => {
    return (
        <Container>
            <div className='design-card'>
                {props.design}
            </div>
        </Container>
    )
}

export default DesignCard