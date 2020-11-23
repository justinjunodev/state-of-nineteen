import React from 'react'
import PropTypes from 'prop-types'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import GlobalStyles from '../../styles/global'
import * as S from './styles'
import Header from '../Header'
import Footer from '../Footer'

const queryCache = new QueryCache()

const Layout = ({ children }) => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <GlobalStyles />
    <S.LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </S.LayoutWrapper>
  </ReactQueryCacheProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
