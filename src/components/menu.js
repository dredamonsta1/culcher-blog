import React from 'react'
import Link from 'gatsby-link';
// import 'Navbar'
// import 'reacstrap'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  

    export default class Example extends React.Component {
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
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">9X4</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/page-2">Blog</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/feedback">Feedback</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                        <Link to="/about">About</Link>
                        </DropdownItem>
                        <DropdownItem>
                        <Link to="/">ninebyfour</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
        }
      }

// const Menu = () => {
//   return (
//     <div style={{
//         background: '#f4f4f4',
//         paddingTop: '10px'
//     }}>

//     <ul style={{
//         listStyle: 'none',
//         display: 'flex',
//         justifyContent: 'space-evenly'

//     }}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/feedback">Feedback</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/page-2">Blog</Link></li>
//     </ul>
      
//     </div>
//   )
// }

// export default Menu;