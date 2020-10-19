import { Link } from 'gatsby';
import React from 'react'
import style from './Menu.module.css';


const Menu = ({ children }) => {
  return(
    <div className={style.Menu}>
    <Link to="/">
      Home
    </Link>
    <Link to="/blog">
      Blog
    </Link>
      
    <Link to="/projects">    
      Projects
    </Link>
    
    <Link to="/resume">
      Resume
    </Link>

    <Link to="/about">
      About
    </Link>


    
    </div>
  )

}

export default Menu;