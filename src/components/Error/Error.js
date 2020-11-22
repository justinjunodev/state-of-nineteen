import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ message }) => <div>Error: {message}</div>

Error.propTypes = {
  message: PropTypes.string.isRequired,
}
