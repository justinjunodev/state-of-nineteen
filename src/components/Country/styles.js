import styled from 'styled-components'
import { contentWrapper } from '../../styles/global'

export const CountryBackground = styled.header`
  background: linear-gradient(
    to bottom,
    black var(--scale-8),
    white var(--scale-8)
  );
  color: white;
`

export const CountryContent = styled.div`
  ${contentWrapper};
  text-align: center;
  margin-bottom: var(--scale-8);
  padding: var(--scale-6);
  background: white;
  color: black;
  border: 1px solid black;
`

export const CountryHeading = styled.h2`
  margin: var(--scale-1) 0 var(--scale-6);
`

export const CountryText = styled.p`
  line-height: var(--scale-5);
`
