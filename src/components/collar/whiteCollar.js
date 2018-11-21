import React from 'react'
import Collar4 from '../assets/whitecollar1.png';
import BtnDown from '../assets/buttonDown.png'

export default function WhiteCollar(props) {
  return (
    <div>
    <div onClick={() => props.changeCollar(<img className='white_collar_image3' src={Collar4} alt='collar' />)}>
                  <img className='collar_image_side1' src={BtnDown} alt='collar' />
                  <p className='tooltiptext'><strong>Button <br/>collar</strong></p>
            </div>
    </div>
  )
}
