import React from 'react'
import Collar1 from '../assets/collarButton.png'
import Collar2 from '../assets/collarPlain.png'
import Collar3 from '../assets/collarRev.png'

export default function Collar(props) {
  return (
    <div className='collar_container'>
            <div onClick={() => props.changeCollar(<img className='collar_image' src={Collar1} alt='collar' />)}>
                  <img className='collar_image_side' src={Collar1} alt='collar' />
                    <p className='tooltiptext'>Button collar</p>
            </div>
            <div onClick={() => props.changeCollar(<img className='collar_image' src={Collar2} alt='collar' />)}>
                  <img className='collar_image_side'  src={Collar2} alt='collar' />
                  <p className='tooltiptext'>Plain collar</p>
            </div>
            <div onClick={() => props.changeCollar(<img className='collar_image3' src={Collar3} alt='collar' />)}>
                  <img className='collar_image_side' src={Collar3} alt='collar' />
                  <p className='tooltiptext'>Rev collar</p>
            </div>
    </div>
  )
}
