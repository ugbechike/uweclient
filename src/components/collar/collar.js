import React, { Component } from 'react';
import {Tooltip,  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import Collar1 from '../assets/collarButton.png'
import Collar2 from '../assets/collarPlain.png'
import Collar3 from '../assets/collarRev.png'

export default class Collar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
      tooltipOpen: !this.state.tooltipOpen
    }));
  }

  render() {
    return (
      <div>
        <Dropdown direction="right"  isOpen={this.state.btnDropright} toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
            <DropdownToggle caret className='collar_shadow' style={{ boxShadow: '10px 10px 24px grey' , width: '20%', marginTop: '10px', backgroundColor: 'white' }}>
                <img  style={{ width: '50%' }} src={Collar1} alt='collar' />
                <p style={{color: 'gray', margin:'0'}}> Collar </p>
            </DropdownToggle>
            <DropdownMenu style={{width: '60%'}}>
            <Row>
                <Col xs="6">
                <DropdownItem >
                  <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar1} alt='collar' />)}>
                  <img style={{ width: '87%' }} src={Collar1} alt='collar' />
                  </div>
                </DropdownItem>
                </Col>
                
                <Col xs="6">
                <DropdownItem >
                  <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar2} alt='collar' />)}>
                  <img style={{ width: '87%' }} src={Collar2} alt='collar' />
                  </div>
                </DropdownItem>
                </Col>
                <Col xs="6">
                <DropdownItem >
                  <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar3} alt='collar' />)}>
                  <img style={{ width: '87%' }} src={Collar3} alt='collar' id="TooltipExample"/>
                  <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample"  toggle={this.toggle}>
                    Rev Collar
                  </Tooltip>

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
