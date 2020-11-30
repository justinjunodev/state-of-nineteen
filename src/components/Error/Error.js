import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

// Component displays alert banner with error message.
const Error = ({ message }) => (
  <S.ErrorContent>
    <span>Error: {message}</span>
  </S.ErrorContent>
)

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Error
