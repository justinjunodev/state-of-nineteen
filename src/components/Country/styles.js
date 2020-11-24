import styled from 'styled-components'
import { wrapper, queries } from '../../styles/global'

export const CountryBackground = styled.header`
  background: linear-gradient(
    to bottom,
    black var(--scale-8),
    transparent var(--scale-8)
  );
  color: white;
`

export const CountryContent = styled.div`
  ${wrapper};
  text-align: center;
  margin-bottom: var(--scale-8);
  padding: var(--scale-5);
  background: white;
  color: black;
  border: 1px solid black;
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
