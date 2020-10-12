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
      
    <Link to="/about">    
      Projects
    </Link>
    
    <Link to="/page-2">
      Resume
    </Link>

    <Link to="/page-2">
      About
    </Link>


    
    </div>
  )

}

export default Menu;