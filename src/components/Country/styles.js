import styled from 'styled-components'
import { wrapper, queries } from '../../styles/global'

export const CountryBackground = styled.header`
  background: linear-gradient(
    to bottom,
    var(--cream) var(--scale-8),
    var(--black) var(--scale-8),
    var(--black) calc(var(--scale-8) + var(--scale-1)),
    rgba(0, 0, 0, 0.1) calc(var(--scale-8) + var(--scale-1)),
    rgba(0, 0, 0, 0.3) calc(var(--scale-8) + var(--scale-1)),
    transparent calc(var(--scale-8) + var(--scale-5))
  );
`

export const CountryContent = styled.div`
  ${wrapper};
  z-index: 1;
  text-align: center;
  margin-bottom: var(--scale-8);
  padding: var(--scale-5);
  background: var(--yellow);
  border-top: var(--scale-1) solid var(--black);
  border-bottom-right-radius: var(--scale-3);
  border-bottom-left-radius: var(--scale-3);
  box-shadow: var(--shadow);
  ${queries[2]} {
    padding: var(--scale-6);
  }
`

export const CountryHeading = styled.h2`
  margin-bottom: var(--scale-5);
`

export const CountryText = styled.p`
  line-height: var(--scale-5);
`
