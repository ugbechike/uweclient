import React, { Component } from 'react';
import Header from '../header/header';
import { Container, Row, Col } from 'reactstrap';
import Material from '../materials/materials'
import Collar1 from '../assets/collarButton.png'
import Shirt1 from '../assets/shirtYesBtn.png'
import DesignArea from '../designArea/designArea';
import LongSleeve from '../assets/longSleeves.png';

export default class Styles extends Component {
    state = {
        collarImg:  <img style={{width: '45%'}} src={Collar1} alt='collar' />,
        shirtImg:   <img style={{width: '43%'}} src={Shirt1} alt='shirt' />,
        sleevesImg: <img style={{width: '43%'}} src={LongSleeve} alt='sleeves' />,
        visible: false
    }

    //HANDLE COLLAR CHANGE
    changeCollar = (collarImg) => {
        this.setState({collarImg, 
            isVisible: this.state.visible
        })
    }
    //HANDLE SHIRTS CHANGING
    changeShirt = (shirtImg) =>{
        this.setState({shirtImg, 
            isVisible: true
        })
    }
    //HANDLE SLEEVES CHANGE
    changeSleeves = (sleevesImg) => {
        this.setState({sleevesImg,
            isVisible: true
        })
    }

    

  render() {
    return (
      <div>
        <Header />
        <Container>
        <Row>
          <Col xs="6">
            <Material changeCollar={this.changeCollar} changeShirt={this.changeShirt} changeSleeves={this.changeSleeves} />
          </Col>
          <Col xs="6">
            <DesignArea collarImg={this.state.collarImg}  shirtImg={this.state.shirtImg} sleevesImg={this.state.sleevesImg}  />
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}
