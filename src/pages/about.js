import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const AboutPage = function about() {
  return (
    <Layout>
    
        <div>
            <h1>About Us</h1>
            <p>simple about page</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
  )
}


export default AboutPage;
