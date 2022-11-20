import React from 'react'
import {Navbar, NavItem} from 'react-materialize'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Navbar left='true'>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/skills'>Skills</NavItem>
          <NavItem href='/my_careers'>MyCareers</NavItem>
          <NavItem href='/link_list'>Link List</NavItem>
          <NavItem href='/contact'>Contact</NavItem>
        </Navbar>
      </div>
    );
  }
}
