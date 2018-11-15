import React from 'react';
import Ankara from '../ankaraMaterial/ankaraMaterial'
import PlainMaterial from '../plainMaterial/plainMaterial'
import {  Row, Col, Container } from 'reactstrap';
// import './material.css';


const MaterialsTypes =(props) => {
  return (
    <div >
        <Container>
    <Row>
          <Col xs="6">
                <Ankara changeAnkara={props.changeAnkara} />
          </Col>
          <Col xs="6">
                <PlainMaterial changePlainShirt={props.changeWhite} />
          </Col>
          
        </Row>
        </Container>
    
    </div>
  )
}

export default MaterialsTypes