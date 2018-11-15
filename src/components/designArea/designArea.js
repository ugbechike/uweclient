import React from 'react';
import Person from '../avatar/avatar';
import './designArea.css';

const DesignArea = (props) => {
  return (
    <div>
      <div className='collar_wrap'>
          {props.collarImg}
      </div>
      <div className='shirt_wrap'>
          {props.shirtImg}
      </div>
      <div className="sleeves_wrap">
          {props.sleevesImg}
      </div>
      <div>
          {/* <Person /> */}
      </div>
    </div>
  )
}

export default DesignArea