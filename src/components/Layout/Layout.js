import React from 'react'
import PropTypes from 'prop-types'
import 'reset-css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import GlobalStyles from '../../styles/global'
import Sidebar from '../Sidebar'

const queryCache = new QueryCache()

const Layout = ({ children }) => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <GlobalStyles />
    <Sidebar />
    {children}
  </ReactQueryCacheProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
