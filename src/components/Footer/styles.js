import styled from 'styled-components'
import { motion } from 'framer-motion'
import { wrapper, queries } from '../../styles/global'

export const FooterStripes = styled(motion.div)`
  display: none;
  ${queries[2]} {
    display: block;
    height: var(--scale-5);
    width: 100%;
    background-color: var(--navy);
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%231a1950' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`

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
