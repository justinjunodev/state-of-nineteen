import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import States from '../components/States'
import Country from '../components/Country'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <States />
    <Country />
  </Layout>
)

export default IndexPage
