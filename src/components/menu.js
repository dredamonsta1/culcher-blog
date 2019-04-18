import React from 'react'
import Link from 'gatsby-link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"><Link to="/">9X4</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/feedback">Feedback</Link>
              </NavItem>
              <NavItem>
              <Link to="/about">About</Link>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
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