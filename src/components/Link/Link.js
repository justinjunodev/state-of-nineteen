import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ to, children, label, isExternal }) =>
  isExternal ? (
    <a href={to} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to}>{children}</GatsbyLink>
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
