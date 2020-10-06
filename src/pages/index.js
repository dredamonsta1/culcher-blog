import React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import {graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'


// import { Button } from 'reactstrap';

const IndexPage = () => (
  
  <Layout>
  
  
    <SEO title="Home" keywords={[`HipHop`, `application`, `react`]} />
    
    <h1>Welcome to the 9X4 </h1>
    <p>blogging my progress.</p>
    
    <Image />
    <StaticQuery query={indexQuery} render={data => {
      return (
        <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.frontmatter.no} 
          title={node.frontmatter.title}
          author={node.frontmatter.author}
          path={node.frontmatter.path}
          date={node.frontmatter.date}
          body={node.excerpt}
          />
        ))}
        </div>
      )
    }}/>
    <Link to="/">Go back to the homepage</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="Blog/">Blog</Link>
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
