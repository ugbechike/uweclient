import React from 'react'
import Shirt3 from '../assets/whiteshirt.png';
import Shirt4 from '../assets/whiteshiteBtn.png';
import whiteBackShirt1 from '../assets/whitebacknopleats.png';
import whiteBackShirt2 from '../assets/whitebackpleats.png';

export default function WhiteShirt(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeShirt(<img className='shirt_image1'  src={Shirt3} alt='shirt' />, <img className='b_shirt_image1'  src={whiteBackShirt1} alt='shirt' />)}>
            <img className='shirt-side' src={Shirt3} alt='shirt' />
            <p className='tooltiptext'><strong>Button <br/>placket</strong></p>
        </div>

        <div onClick={() => props.changeShirt(<img className='shirt_image'  src={Shirt4} alt='shirt' />, <img className='back_shirt_image'  src={whiteBackShirt2} alt='shirt' />)}>
            <img className='shirt-side' src={Shirt4} alt='shirt' />
            <p className='tooltiptext'><strong>Button <br/>placket</strong></p>
        </div>
    </div>
  )
}
