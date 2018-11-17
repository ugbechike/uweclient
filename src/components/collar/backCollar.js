import React from 'react'
import RevCollar from '../assets/revCollar.png';
import Collar4 from '../assets/backcollar.png'

export default function BackCollar(props) {
  return (
    <div className='collar_container'>
            <div onClick={() => props.changeBackCollar(<img className='collar_image3' src={Collar4} alt='collar' />)}>
                  <img className='back_image_side' src={RevCollar} alt='collar' />
                  <p className='tooltiptext'>Rev collar</p>
            </div>
    </div>
  )
}
