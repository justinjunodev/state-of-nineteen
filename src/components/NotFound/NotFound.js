import React from 'react'
import * as S from './styles'
import * as M from './motion'
import Link from '../Link'

const NotFound = () => (
  <S.NotFoundBackground>
    <S.NotFoundContent
      variants={M.NotFoundContent}
      initial="hidden"
      animate="show"
    >
      <S.NotFoundHeading variants={M.NotFoundItem}>
        Don't Panic!
      </S.NotFoundHeading>
      <S.NotFoundText variants={M.NotFoundItem}>
        The page you are looking for doesn't exist or has been moved. Return to{' '}
        <Link to="/">home page</Link>?
      </S.NotFoundText>
    </S.NotFoundContent>
  </S.NotFoundBackground>
)

export default NotFound
