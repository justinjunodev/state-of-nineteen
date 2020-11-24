import styled from 'styled-components'
import { wrapper } from '../../styles/global'

export const HeaderBackground = styled.header`
  background: black;
  color: white;
  padding: var(--scale-8) 0;
`

export const HeaderContent = styled.div`
  ${wrapper};
  text-align: center;
`

export const HeaderTitle = styled.h1`
  margin-bottom: var(--scale-2);
`

export const HeaderSubtitle = styled.p`
  font-weight: 700;
`
