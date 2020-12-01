import React from 'react'
import { BarLoader } from 'react-spinners'
import * as S from './styles'

// A loading component that displays animation while data is being fetched.
const Loading = () => (
  <S.LoadingWrapper>
    <BarLoader height="6px" width="180px" color="#333333" />
  </S.LoadingWrapper>
)

export default Loading
