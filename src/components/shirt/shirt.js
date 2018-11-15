import React from 'react';
import Shirt1 from '../assets/shirtYesBtn.png'
import Shirt2 from '../assets/shirtNoBtn.png'

export default function Shirt(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeShirt(<img className='shirt_image'  src={Shirt1} alt='shirt' />)}>
            <img className='shirt-side' src={Shirt1} alt='shirt' />
        </div>
        <div onClick={() => props.changeShirt(<img className='shirt_image'  src={Shirt2} alt='shirt' />)}>
            <img className='shirt-side' src={Shirt2} alt='shirt' />
        </div>
    </div>
  )
}
