import React from 'react';
import Person from '../avatar/avatar'

const DesignArea = (props) => {
  return (
    <div>
      <div>
          {props.collarImg}
      </div>
      <div>
          {props.shirtImg}
      </div>
      <div>
          <Person />
      </div>
    </div>
  )
}

export default DesignArea