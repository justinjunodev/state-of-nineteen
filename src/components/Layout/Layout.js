import React from 'react'
import PropTypes from 'prop-types'
import 'reset-css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import Sidebar from '../Sidebar'

const queryCache = new QueryCache()

const Layout = ({ children }) => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <Sidebar />
    {children}
  </ReactQueryCacheProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
