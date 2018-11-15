import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,} from 'reactstrap';
  // import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="d-flex justify-content-center"  color="dark" dark expand="md">
          <NavbarBrand href="/">Uwe</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-auto"  navbar>
              <NavItem>
                Join
                {/* <Link to="/fabrics" style={{marginRight: '15px'}}>Fabrics</Link> */}
              </NavItem>
              <NavItem>
                Style
                {/* <Link to="/style">Styles</Link> */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}