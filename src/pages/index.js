import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import useCovidData from '../hooks/useCovidData'

const IndexPage = () => {
  const { status, data, error } = useCovidData()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>State of Nineteen</h1>
      {status === 'loading' && 'loading ...'}
      {status === 'error' && `error: ${error.message}`}
      {data && (
        <ul>
          {data.map(d => (
            <li key={d.state}>{d.state}</li>
          ))}
        </ul>
      )}
    </Layout>
  )
}
export default IndexPage
