import styled from 'styled-components'
import { motion } from 'framer-motion'
import { wrapper } from '../../styles/global'

export const FooterContent = styled(motion.footer)`
  ${wrapper};
  text-align: center;
  padding-bottom: var(--scale-6);
  color: var(--white);
  a {
    position: relative;
    color: var(--gold);
    text-decoration: none;
    text-shadow: 1px 1px 2px var(--royal);
    span {
      z-index: 1;
      position: relative;
    }
    ::after {
      content: '';
      position: absolute;
      left: -0.1px;
      right: -0.1px;
      bottom: 0;
      height: 100%;
      transform: scaleY(0.1);
      transition: transform 0.1s ease-in-out;
      transform-origin: bottom;
      background-color: var(--royal);
    }
    :hover::after {
      transform: scaleY(1);
    }
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
