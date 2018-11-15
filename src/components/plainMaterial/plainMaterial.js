import React from 'react'
import White from '../assets/white.png';
import Whyte from '../assets/wyte.PNG'

export default function PlainMaterial() {
  return (
    <div>
        <div onClick={() => this.props.changePlain(<img style={{ width: '45%' }} src={White} alt='collar' />)}>
            <img src={Whyte} alt='' />
        </div>
    </div>
  )
}
