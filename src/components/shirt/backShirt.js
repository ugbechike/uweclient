import React from 'react';
import backShirt1 from '../assets/backinvertpleats.png'
import backShirt2 from '../assets/backnopleats.png';
import backShirt3 from '../assets/backpleats.png';

export default function BackShirt(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeBackShirt(<img className='shirt_image1'  src={backShirt1} alt='shirt' />)}>
            <img className='shirt-side' src={backShirt1} alt='shirt' />
            <p>Inverted pleats</p>
        </div>
        <div onClick={() => props.changeBackShirt(<img className='back_shirt_image'  src={backShirt2} alt='shirt' />)}>
            <img className='shirt-side' src={backShirt2} alt='shirt' />
            <p>No pleats</p>
        </div>
        <div onClick={() => props.changeBackShirt(<img className='shirt_image'  src={backShirt3} alt='shirt' />)}>
            <img className='shirt-side' src={backShirt3} alt='shirt' />
            <p>Pleats</p>
        </div>
    </div>
  )
}
