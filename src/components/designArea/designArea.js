import React from 'react'

export default function DesignArea(props) {
  return (
    <div>
        <div className='collar_design'>
            {props.collarImg}
        </div>
        <div className='shirt_design'>
            {props.shirtImg}
        </div>
        <div className='sleeves_design'>
            {props.sleevesImg}
        </div>
        <div className='cuff_design'>
            {props.WcollarImg}
        </div>
    </div>
  )
}
