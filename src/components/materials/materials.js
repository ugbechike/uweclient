import React from 'react';
import Collar from '../collar/collar'

const Materials =(props) => {
  return (
    <div>
    <Collar changeCollar={props.changeCollar} />
    </div>
  )
}

export default Materials