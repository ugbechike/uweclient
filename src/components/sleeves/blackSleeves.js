import React from 'react'
import BlackSleeve from '../assets/blacklongSleeves.png';
import Long from '../assets/Long.PNG';
import Shortg from '../assets/Short.png';
import blackShortSleeve from '../assets/blackshortSleeves.png';



export default function BlackSleeves(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeSleeves(<img className='sleeves_image1' src={BlackSleeve} alt='sleeves' />)}>
            <img className='sleeves-side2' src={Long} alt='shirt' />
            <p className='tooltiptext'><strong>Long <br/>Sleeve</strong></p>
        </div>

         <div onClick={() => props.changeSleeves(<img className='sleeves_image' src={blackShortSleeve} alt='sleeves' />)}>
            <img className='sleeves-side' src={Shortg} alt='shirt' />
            <p className='tooltiptext'><strong>Short <br/>Sleeve</strong></p>
        </div>
    </div>
  )
}
