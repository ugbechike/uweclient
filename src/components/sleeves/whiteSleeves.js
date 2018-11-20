import React from 'react'
import WhiteSleeve from '../assets/whitesleeve.png';
import Long from '../assets/Long.PNG';

export default function WhiteSleeves(props) {
  return (
    <div>
        <div onClick={() => props.changeSleeves(<img className='white_sleeves_image' src={WhiteSleeve} alt='sleeves' />)}>
            <img className='sleeves-side2' src={Long} alt='shirt' />
            <p className='tooltiptext'><strong>Long <br/>Sleeve</strong></p>
        </div>
    </div>
  )
}
