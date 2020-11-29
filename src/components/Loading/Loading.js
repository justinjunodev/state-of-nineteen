import React from 'react'
import { BounceLoader } from 'react-spinners'
import * as S from './styles'

const Loading = () => (
  <S.LoadingWrapper>
    <BounceLoader size="36px" color="#1A1950" />
  </S.LoadingWrapper>
)

export default Loading
