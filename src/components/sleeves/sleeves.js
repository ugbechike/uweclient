import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import LongSleeve from '../assets/longSleeves.png';
import ShortSleeve from '../assets/shortSleeves.png';

export default class Sleeves extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }


  render() {
    return (
      <div>
         <Dropdown direction="right" isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
            <DropdownToggle caret style={{ boxShadow: '10px 10px 24px grey' ,width: '30%', marginTop: '10px', backgroundColor: 'white'}}>
                <img style={{width: '30%'}} src={LongSleeve} alt='shirt' />
                <p style={{color: 'gray', margin:'0'}}> Sleeves </p>
            </DropdownToggle>
            <DropdownMenu style={{width: '80%'}}>
                <Row>
                <Col xs="6">
            <DropdownItem >
                <div onClick={() => this.props.changeSleeves(<img style={{width: '45%'}}  src={LongSleeve} alt='sleeves' />)}>
                        <img style={{width: '90%'}} src={LongSleeve} alt='shirt' />
                </div>
                </DropdownItem>
                </Col>
                <Col xs="6">
                <DropdownItem >
                   <div onClick={() => this.props.changeSleeves(<img style={{width: '43%'}}  src={ShortSleeve} alt='sleeves' />)}>
                    <img style={{width: '90%'}} src={ShortSleeve} alt='shirt' />
                    </div>
                </DropdownItem>
                </Col>
                </Row>
            </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
