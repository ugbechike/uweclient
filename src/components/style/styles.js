import React, { Component } from 'react';
import Header from '../header/header';
import { Container, Row, Col } from 'reactstrap';
import Material from '../materials/materials'
import Collar1 from '../assets/collarRev.png'
import Shirt1 from '../assets/shirtYesBtn.png'
import DesignArea from '../designArea/designArea';

export default class Styles extends Component {
    state = {
        collarImg:  <img style={{width: '45%'}} src={Collar1} alt='collar' />,
        shirtImg:   <img style={{width: '43%'}} src={Shirt1} alt='shirt' />,
    }

    changeCollar = (collarImg) => {
        this.setState({collarImg})
    }

    changeShirt = (shirtImg) =>{
        this.setState({shirtImg})
    }

  render() {
    return (
      <div>
        <Header />
        <Container>
        <Row>
          <Col xs="6">
            <Material changeCollar={this.changeCollar} changeShirt={this.changeShirt} />
          </Col>
          <Col xs="6">
            <DesignArea collarImg={this.state.collarImg} shirtImg={this.state.shirtImg} />
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}
