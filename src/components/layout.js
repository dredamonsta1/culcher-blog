import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header/Header'
import Menu from './Menu/Menu'
import style from './layout.module.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} /> 
        <Menu />
        <div className={style.layout}>
          {children}
           <footer>
             © {new Date().getFullYear()}, Built with
             {` `}
             <a href="https://www.andrewilkinson.com">Beats</a>
           </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
