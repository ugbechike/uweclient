import React from 'react'
import Shirt3 from '../assets/whiteshirt.png';

export default function WhiteShirt(props) {
  return (
    <div>
        <div onClick={() => props.changeShirt(<img className='white_shirt_image'  src={Shirt3} alt='shirt' />)}>
            <img className='shirt-sideW' src={Shirt3} alt='shirt' />
            <p className='tooltiptext'><strong>Button <br/>placket</strong></p>
        </div>
    </div>
  )
}
