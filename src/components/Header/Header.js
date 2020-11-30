import React from 'react'
import useSiteMeta from '../../hooks/useSiteMeta'
import * as S from './styles'
import * as M from './motion'

// Component displays a header with site information.
const Header = () => {
  const { title, description } = useSiteMeta()
  return (
    <S.HeaderBackground>
      <S.HeaderContent
        variants={M.HeaderContent}
        initial="hidden"
        animate="show"
      >
        {/* Axe reports contrast issue due to animations fade-in. Ignore. */}
        <S.HeaderTitle variants={M.HeaderItem}>{title}</S.HeaderTitle>
        <S.HeaderSubtitle variants={M.HeaderItem}>
          {description}
        </S.HeaderSubtitle>
      </S.HeaderContent>
    </S.HeaderBackground>
  )
}

export default Header
