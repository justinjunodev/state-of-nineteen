import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { GlobalStyles } from '../../styles/global'
import Header from '../Header'
import Footer from '../Footer'

// Provides support for state, caching, and lifecycle methods on app data.
const queryCache = new QueryCache()

// A component for wrapping page content with multiple theme/provider contexts.
const Layout = ({ children }) => (
  <>
    <Helmet>
      <script
        src="https://cdn.usefathom.com/script.js"
        data-spa="auto"
        data-site="PGJLYGGU"
        defer
      />
    </Helmet>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <GlobalStyles />
      <Header role="banner" />
      <main role="main">{children}</main>
      <Footer role="contentinfo" />
    </ReactQueryCacheProvider>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
