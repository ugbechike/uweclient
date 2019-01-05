import React from 'react'
import blackShirt3 from '../assets/blackShirt.png';
import blackShirt4 from '../assets/blackShirtBtn.png'

export default function BlackShirt(props) {
  return (
    <div className="shirt-container">
        <div onClick={() => props.changeShirt(<img className='shirt_image1'  src={blackShirt3} alt='shirt' />)}>
            <img className='shirt-side' src={blackShirt3} alt='shirt' />
            <p className='tooltiptext'><strong>Plain <br/>placket</strong></p>
        </div>

        <div onClick={() => props.changeShirt(<img className='shirt_image'  src={blackShirt4} alt='shirt' />)}>
            <img className='shirt-side' src={blackShirt4} alt='shirt' />
            <p className='tooltiptext'><strong>Button <br/>placket</strong></p>
        </div>
    </div>
  )
}
