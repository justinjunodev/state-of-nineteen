import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

// A link component for streamlining external and internal links.
const Link = ({ to, children, label, isExternal }) =>
  isExternal ? (
    <a href={to} target="_blank" rel="noreferrer" aria-label={label}>
      <span>{children}</span>
    </a>
  ) : (
    <GatsbyLink to={to}>
      <span>{children}</span>
    </GatsbyLink>
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
