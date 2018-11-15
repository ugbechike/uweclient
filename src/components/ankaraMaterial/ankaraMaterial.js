import React from 'react';
import Ankaras from '../assets/ankaras.PNG'
import Ankara1 from '../assets/ankara1.PNG'

export default function Ankara() {
  return (
    <div>
    <div onClick={() => this.props.changeAnkara(<img style={{ width: '45%' }} src={Ankaras} alt='collar' />)}>
                  <img src={Ankara1} alt='' />
        </div>
    </div>
  )
}
