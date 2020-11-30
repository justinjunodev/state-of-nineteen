import React from 'react'
import useSiteMeta from '../../hooks/useSiteMeta'
import * as S from './styles'
import * as M from './motion'

const Header = () => {
  const { title, description } = useSiteMeta()
  return (
    <S.HeaderBackground>
      <S.HeaderContent
        variants={M.HeaderContent}
        initial="hidden"
        animate="show"
      >
        <S.HeaderTitle variants={M.HeaderItem}>{title}</S.HeaderTitle>
        <S.HeaderSubtitle variants={M.HeaderItem}>
          {description}
        </S.HeaderSubtitle>
      </S.HeaderContent>
    </S.HeaderBackground>
  )
}

export default Header
