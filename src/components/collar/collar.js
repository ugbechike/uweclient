import React from 'react'
import Collar1 from '../assets/collarButton.png'
import Collar2 from '../assets/collarPlain.png'
import Collar3 from '../assets/collarRev.png'
import BtnDown from '../assets/buttonDown.png'
import Club from '../assets/club.png'
import RevCollar from '../assets/revCollar.png';

export default function Collar(props) {
  return (
    <div className='collar_container'>
            <div onClick={() => props.changeCollar(<img className='collar_image' src={Collar1} alt='collar' />)}>
            <div >

                  <img className='ankara-icon'  src={BtnDown} alt='collar' />
                    <p className='tooltiptext tooltiptext1'><strong>Button<br/> collar</strong></p>
            </div>
            </div>
            <div onClick={() => props.changeCollar(<img className='collar_image' src={Collar2} alt='collar' />)}>
                  <img className='ankara-icon'  src={Club} alt='collar' />
                  <p className='tooltiptext tooltiptext1'><strong>Plain <br/>collar</strong></p>
            </div>
            <div onClick={() => props.changeCollar(<img className='collar_image3' src={Collar3} alt='collar' />)}>
                  <img className='ankara-icon' src={RevCollar} alt='collar' />
                  <p className='tooltiptext tooltiptext1'><strong>Rev <br/>collar</strong></p>
            </div>
    </div>
  )
}
