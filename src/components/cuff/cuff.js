import React from 'react'
import Cuff1 from '../assets/frenchCuff.png';
import Cuff2 from '../assets/Fcuff.PNG'

export default function Cuff(props) {
  return (
    <div className="cuff-container">
    <div onClick={() => props.changeCuff(<img className='cuff_image1'  src={Cuff1} alt='shirt' />)}>
            <img className='cuff-side' src={Cuff2} alt='shirt' />
        </div>
        <div onClick={() => props.changeCuff(<img className='cuff_image1'  src={Cuff1} alt='shirt' />)}>
            <img className='cuff-side' src={Cuff2} alt='shirt' />
        </div>
    </div>
  )
}
