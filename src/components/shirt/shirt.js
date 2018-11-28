import React from 'react';
import Shirt1 from '../assets/shirtYesBtn.png'
import Shirt2 from '../assets/shirtNoBtn.png'
import backShirt1 from '../assets/backinvertpleats.png'


export default function Shirt(props) {
    return (
        <div className="shirt-container">
            <div onClick={() => props.changeShirt(<img className='shirt_image1' src={Shirt1} alt='shirt' />, <img className='b_shirt_image1' src={backShirt1} alt='shirt' />)}>
                <img className='shirt-side' src={Shirt1} alt='shirt' />
                <p className='tooltiptext'><strong>Button <br />placket</strong></p>
            </div>
            <div onClick={() => props.changeShirt(<img className='shirt_image' src={Shirt2} alt='shirt' />)}>
                <img className='shirt-side' src={Shirt2} alt='shirt' />
                <p className='tooltiptext'><strong>Plain <br />placket</strong></p>
            </div>
        </div>
    )
}
