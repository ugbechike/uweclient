import React from 'react';
import LongSleeve from '../assets/longSleeves.png';
import ShortSleeve from '../assets/shortSleeves.png';

export default function Sleeves(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeSleeves(<img className='sleeves_image1'  src={LongSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={LongSleeve} alt='shirt' />
        </div>
        <div onClick={() => props.changeSleeves(<img className='sleeves_image' src={ShortSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={ShortSleeve} alt='shirt' />
        </div>
    </div>
  )
}
