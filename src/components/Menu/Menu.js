import { Link } from 'gatsby';
import React from 'react'
// import Link from 'gatsby-link';
import style from './Menu.module.css';


const Menu = ({ children }) => {
  return(
    <div className={style.Menu}>
    <Link to="/">
      <a className="home-tab" href="#9X4">Home</a>
    </Link>
    <Link to="/blog">
      <a href="#Blog">Blog</a>
    </Link>
      
    <Link to="/about">    
      <a href="#Projects">Projects</a>
    </Link>
    
    <Link to="/page-2">
      <a href="#Resume">Resume</a>
    </Link>

    <Link to="/page-2">
      <a href="#Resume">About</a>
    </Link>


    
    </div>
  )

}

export default Menu;