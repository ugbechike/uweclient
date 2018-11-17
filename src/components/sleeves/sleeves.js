import React from 'react';
import LongSleeve from '../assets/longSleeves.png';
import ShortSleeve from '../assets/shortSleeves.png';
import Long from '../assets/Long.png'
import Shortg from '../assets/Short.png';
import WhiteSleeve from '../assets/whitesleeve.png'

export default function Sleeves(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeSleeves(<img className='sleeves_image1'  src={LongSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={Long} alt='shirt' />
        </div>
        <div onClick={() => props.changeSleeves(<img className='sleeves_image' src={ShortSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={Shortg} alt='shirt' />
        </div>
        <div onClick={() => props.changeSleeves(<img className='white_sleeves_image' src={WhiteSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={Long} alt='shirt' />
        </div>
    </div>
  )
}
