import React from 'react'
import Link from 'gatsby-link';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Menu = () => {
  return(
    <div className="navTitle">
    <a className="homeTab" href="#">Home</a>
    <a href="#">blog</a>
    <a href="#">Projects</a>
    </div>
  )

}

export default Menu;


// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="faded" light>
//           <NavbarBrand href="/" className="mr-auto"><Link to="/">9X4</Link></NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse isOpen={!this.state.collapsed} navbar>
//             <Nav navbar>
//               <NavItem>
//                 <Link to="/feedback">Feedback</Link>
//               </NavItem>
//               <NavItem>
//               <Link to="/about">About</Link>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }