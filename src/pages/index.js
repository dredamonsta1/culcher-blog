import React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

// import { Button } from 'reactstrap';

const IndexPage = () => (
  
  <Layout>
  
  
    <SEO title="Home" keywords={[`HipHop`, `application`, `react`]} />
    
    <h1>Welcome to the 9X4 </h1>
    <p>blogging my progress.</p>
    <p>Now.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  
)

export default IndexPage
