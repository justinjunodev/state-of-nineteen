import React from 'react'
import { BounceLoader } from 'react-spinners'
import * as S from './styles'

/*
  A loading component that displays animation while data is being fetched. 
  Note: Due to loading animation, this is primarily only seen on slower connections. 
 */
const Loading = () => (
  <S.LoadingWrapper>
    <BounceLoader size="36px" color="#1A1950" />
  </S.LoadingWrapper>
)

export default Loading
