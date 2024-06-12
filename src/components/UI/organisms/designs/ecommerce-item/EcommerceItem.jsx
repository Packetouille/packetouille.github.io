import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './ecommerceItem.css';
import item from '../../../../../assets/images/mouse_black.jpg'

const EcommerceItem = () => {
    return (
        <div id='ecommerce-item-container'>
            <div id='ecommerce-item-img-area'>
                <Card.Img className="img-fluid" src={item}/>
            </div>
            <div id='ecommerce-item-info-area'>
                <h1>Logitech MX Master</h1>
                <h3>$69.95</h3>
                <div id='ecommerce-item-colors-area'>
                    <div className='ecommerce-color-picker bg-charcoal-900'></div>
                    <div className='ecommerce-color-picker bg-charcoal-300'></div>
                </div>
                <h5>Description</h5>
                <p>Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                <h6>Free Shipping</h6>
                <Button onClick={() => alert("Added to cart")} className='ecommerce-btn' variant='primary'>Add to Cart</Button>
            </div>
        </div>
    )
}

export default EcommerceItem