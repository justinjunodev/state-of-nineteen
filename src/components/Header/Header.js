import React from 'react'
import useSiteMeta from '../../hooks/useSiteMeta'
import * as S from './styles'

// Component displays a header with site information.
const Header = () => {
  const { title, description } = useSiteMeta()
  return (
    <S.HeaderBackground>
      <S.HeaderContent>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <S.HeaderSubtitle>{description}</S.HeaderSubtitle>
      </S.HeaderContent>
    </S.HeaderBackground>
  )
}

export default Header
