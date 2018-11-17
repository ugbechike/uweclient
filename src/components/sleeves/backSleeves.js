import React from 'react';
import BackLongSleeve from '../assets/backsleeve.png';
import Long from '../assets/Long.png'

export default function BackSleeves(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeBackSleeves(<img className='sleeves_image1'  src={BackLongSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={Long} alt='shirt' />
        </div>
    </div>
  )
}
