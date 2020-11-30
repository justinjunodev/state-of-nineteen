import styled from 'styled-components'
import { motion } from 'framer-motion'
import { wrapper, queries } from '../../styles/global'

export const CountryBackground = styled.header`
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

export const CountryContent = styled(motion.div)`
  ${wrapper};
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
    color: var(--gold);
  }
`
