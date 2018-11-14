import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Collar1 from '../assets/collarButton.png'
import Collar2 from '../assets/collarPlain.png'
import Collar3 from '../assets/collarRev.png'

export default class Collar extends Component {
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
            <DropdownToggle caret>
                <img  style={{ width: '70%' }} src={Collar1} alt='collar' />
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem >
                  <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar1} alt='collar' />)}>
                  <img style={{ width: '87%' }} src={Collar1} alt='collar' />
                  </div>
                </DropdownItem>
                <DropdownItem >
                  <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar2} alt='collar' />)}>
                  <img style={{ width: '87%' }} src={Collar2} alt='collar' />
                  </div>
                </DropdownItem>
                <DropdownItem >
                  <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar3} alt='collar' />)}>
                  <img style={{ width: '87%' }} src={Collar3} alt='collar' />
                  </div>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
