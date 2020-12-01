import styled from 'styled-components'
import { wrapper } from '../../styles/global'

export const HeaderBackground = styled.header`
  background: var(--cream);
  padding: var(--scale-8) 0;
  border-top: var(--scale-1) solid var(--black);
`

export const HeaderContent = styled.div`
  ${wrapper};
  padding: var(--scale-5) 0 var(--scale-3);
  text-align: center;
`

export const HeaderTitle = styled.h1`
  margin-bottom: var(--scale-2);
`

export const HeaderSubtitle = styled.p`
  color: var(--red);
  font-weight: 700;
`
