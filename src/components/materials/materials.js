import React from 'react';
import Collar from '../collar/collar';
import Shirts from '../shirts/shirts';
import Sleeves from '../sleeves/sleeves';


const Materials =(props) => {
  return (
    <div>
    <Collar changeCollar={props.changeCollar} />
    <Shirts changeShirt={props.changeShirt} />
    <Sleeves changeSleeves={props.changeSleeves} />
    </div>
  )
}

export default Materials