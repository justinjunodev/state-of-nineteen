import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import States from '../components/States'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>State of Nineteen</h1>
    <States />
  </Layout>
)

export default IndexPage
