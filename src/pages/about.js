import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'

import Layout from '../components/layout'


const AboutPage = function about() {
  return (
    <Layout>
    
        <div>
            <h1>About Us</h1>
            <p>We are lovers of the culture, the music, the art. our goal is to provide a place to maintain the purity of the element.</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
        <Image />
    </Layout>
  )
}


export default AboutPage;
