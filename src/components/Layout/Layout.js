import React from 'react'
import PropTypes from 'prop-types'
import 'reset-css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

const queryCache = new QueryCache()

const Layout = ({ children }) => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    {children}
  </ReactQueryCacheProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
