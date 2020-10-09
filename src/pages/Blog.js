import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql, StaticQuery } from 'gatsby'
import Post from '../components/Post'

const SecondPage = () => (
  <Layout>
  
    <SEO title="Nine By Four Blog" />
    <h1>Nine By Four Blog</h1>
    <p>Talking Culture and Tech</p>
    <StaticQuery query={indexQuery} render={data => {
      return (
        <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post 
          key={node.id}
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
export default SecondPage
