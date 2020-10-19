import React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import {graphql, StaticQuery } from 'gatsby'
// import Post from '../components/Post'


// import { Button } from 'reactstrap';

const IndexPage = () => (
  
  <Layout>
  
  
    <SEO title="Home" keywords={[`HipHop`, `application`, `react`]} />
    <div className='main' id='top'>
      <a href="#bottom">
        bottom
      </a>
    </div>
    <h1>Welcome to the 9X4 </h1>
    <p>Listing the coulture</p>
    
    <Image />
    <StaticQuery query={indexQuery} render={data => {
      return (
        <h1>Hello</h1>
      )
    }}/>
    <Link to="/">Go back to the homepage</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <div className='main' id='bottom'>
      <a href="#top">
        top
      </a>
    </div>
    
    <Link to="/blog">Blog</Link>
  </Layout>
  
)




const indexQuery = graphql `
query {
allMarkdownRemark(sort: { fields:[frontmatter___date], order: DESC }) {
edges {
  node {
    id
    frontmatter{
      title
      date
      author
      path
    }
    excerpt
  }
}
}
}`
export default IndexPage
