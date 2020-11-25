import styled from 'styled-components'
import { wrapper } from '../../styles/global'

export const FooterContent = styled.footer`
  ${wrapper};
  text-align: center;
  padding-bottom: var(--scale-6);
  color: var(--white);
  a {
    color: var(--gold);
  }
`

export const FooterBuild = styled.p`
  margin-bottom: var(--scale-1);
`

export const FooterCredit = styled.p`
  margin-bottom: var(--scale-4);
`

export const FooterCopyright = styled.small`
  color: var(--silver);
`
