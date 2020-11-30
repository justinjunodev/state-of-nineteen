import React from 'react'
import { BarLoader } from 'react-spinners'
import * as S from './styles'

/*
  A loading component that displays animation while data is being fetched. 
  Note: Due to loading animation, this is primarily only seen on slower connections. 
 */
const Loading = () => (
  <S.LoadingWrapper>
    <BarLoader height="6px" width="180px" color="#EBB55F" />
  </S.LoadingWrapper>
)

export default Loading
