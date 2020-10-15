import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import style from './Header.module.css';

const Header = ({ siteTitle }) => (
  
  <div
    style={{
      background: `#333`,
      marginBottom: `0`,
    }}
  >
  
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `100%`,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          
        </Link>
      </h1>


      
      
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
      </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
