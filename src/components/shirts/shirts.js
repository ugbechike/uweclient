import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';
import Shirt1 from '../assets/shirtYesBtn.png'
import Shirt2 from '../assets/shirtNoBtn.png'

export default class Shirts extends Component {
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
            <DropdownToggle caret style={{  boxShadow: '10px 10px 24px grey' , width: '20%', marginTop: '10px', backgroundColor: 'white'}}>
                <img style={{width: '30%'}} src={Shirt1} alt='shirt' />
                <p style={{color: 'gray', margin:'0'}}> Plackets </p>
            </DropdownToggle>
            <DropdownMenu style={{width: '60%'}}>
                <Row>
                <Col xs="6">
            <DropdownItem >
                <div onClick={() => this.props.changeShirt(<img style={{width: '45%'}}  src={Shirt1} alt='shirt' />)}>
                        <img style={{width: '90%'}} src={Shirt1} alt='shirt' />
                </div>
                </DropdownItem>
                </Col>
                <Col xs="6">
                <DropdownItem >
                   <div onClick={() => this.props.changeShirt(<img style={{width: '43%'}}  src={Shirt2} alt='shirt' />)}>
                    <img style={{width: '90%'}} src={Shirt2} alt='shirt' />
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
