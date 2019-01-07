import React from 'react';
import whiteBackShirt1 from '../assets/whitebacknopleats.png'
import whiteBackShirt2 from '../assets/whitebackpleats.png';
import whiteBackShirt3 from '../assets/whitebackyespleats.png';

export default function WhiteBackShirt(props) {
    return (
    <div className="back-shirt-container">
        <div onClick={() => props.changeShirt(<img className='b_shirt_image1'  src={whiteBackShirt1} alt='shirt' />)}>
            <img className='shirt-side' src={whiteBackShirt1} alt='shirt' />
            <p>Inverted pleats</p>
        </div>
        <div onClick={() => props.changeShirt(<img className='back_shirt_image'  src={whiteBackShirt2} alt='shirt' />)}>
            <img className='shirt-side' src={whiteBackShirt2} alt='shirt' />
            <p>No pleats</p>
        </div>
        <div onClick={() => props.changeShirt(<img className='back_shirt_image'  src={whiteBackShirt3} alt='shirt' />)}>
            <img className='shirt-side' src={whiteBackShirt3} alt='shirt' />
            <p>Pleats</p>
        </div>
    </div>
    )
  }
