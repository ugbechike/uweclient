import React from 'react'

export default function BackDesignArea(props) {
  return (
    <div>
        <div className='collar_design'>
            {props.backcollarImg}
        </div>
        <div className='shirt_design'>
            {props.backshirtImg}
        </div>
        <div className='sleeves_design'>
            {props.backsleevesImg}
        </div>
    </div>
  )
}
