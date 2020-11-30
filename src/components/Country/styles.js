import styled from 'styled-components'
import { motion } from 'framer-motion'
import { wrapper, queries } from '../../styles/global'

export const CountryBackground = styled.header`
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--white) var(--scale-8),
    var(--gold) var(--scale-8),
    var(--gold) calc(var(--scale-8) + var(--scale-1)),
    rgba(0, 0, 0, 0.1) calc(var(--scale-8) + var(--scale-1)),
    rgba(0, 0, 0, 0.3) calc(var(--scale-8) + var(--scale-1)),
    transparent calc(var(--scale-8) + var(--scale-5))
  );
`

export const StripesLeft = styled(motion.div)`
  display: none;
  ${queries[2]} {
    display: block;
    position: absolute;
    top: calc(var(--scale-8) + var(--scale-1));
    left: 0;
    z-index: -1;
    height: calc(100% - var(--scale-8));
    width: 50%;
    clip-path: polygon(0 0, 100% 0, 100% -10%, 0% 100%);
    background-color: var(--navy);
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%231a1950' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`

export const StripesRight = styled(motion.div)`
  display: none;
  ${queries[2]} {
    display: block;
    position: absolute;
    top: calc(var(--scale-8) + var(--scale-1));
    right: 0;
    z-index: -1;
    height: calc(100% - var(--scale-8));
    width: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 -10%);
    background-color: var(--navy);
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%231a1950' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`

export const CountryContent = styled(motion.div)`
  ${wrapper};
  z-index: 1;
  text-align: center;
  margin-bottom: var(--scale-8);
  padding: var(--scale-5);
  background: var(--royal);
  border-top: var(--scale-1) solid var(--gold);
  border-bottom-right-radius: var(--scale-3);
  border-bottom-left-radius: var(--scale-3);
  box-shadow: var(--shadow);
  ${queries[2]} {
    padding: var(--scale-6);
  }
`

export const CountryHeading = styled(motion.h2)`
  margin-bottom: var(--scale-5);
  color: var(--white);
`

export const CountryText = styled(motion.p)`
  line-height: var(--scale-5);
  color: var(--silver);
  strong {
    color: var(--white);
  }
  a {
    position: relative;
    color: var(--gold);
    text-decoration: none;
    text-shadow: 1px 1px 2px var(--navy);
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
      background-color: var(--navy);
    }
    :hover::after {
      transform: scaleY(1);
    }
  }
`
