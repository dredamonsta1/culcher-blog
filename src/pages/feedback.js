import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const FeedbackPage = function about() {
  return (
    <Layout>
    
        <div>    
        <h1>Feedback</h1>
            <p>comment and feedback?</p>
            <p>Hit the jack <a href="andrefullstack@gmail.com">andre</a></p>
            
            <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
  )
}


export default FeedbackPage;
