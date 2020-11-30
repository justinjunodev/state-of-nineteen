import React from 'react'
import * as S from './styles'
import Link from '../Link'

// A component for handling 404 errors.
const NotFound = () => (
  <S.NotFoundBackground>
    <S.NotFoundContent>
      <S.NotFoundHeading>Don't Panic!</S.NotFoundHeading>
      <S.NotFoundText>
        The page you are looking for doesn't exist or has been moved. Return to{' '}
        <Link to="/">home page</Link>?
      </S.NotFoundText>
    </S.NotFoundContent>
  </S.NotFoundBackground>
)

export default NotFound
