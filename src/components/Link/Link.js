import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

// A link component for streamlining external and internal links.
const Link = ({ to, children, label, isExternal }) =>
  isExternal ? (
    <S.ExternalLink
      href={to}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <span>{children}</span>
    </S.ExternalLink>
  ) : (
    <S.GatsbyLink to={to}>
      <span>{children}</span>
    </S.GatsbyLink>
  )

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isExternal: PropTypes.bool,
  label: PropTypes.string,
}

Link.defaultProps = {
  isExternal: false,
  label: '',
}

export default Link
