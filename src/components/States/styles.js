import styled from 'styled-components'
import { wrapper, queries } from '../../styles/global'

export const StatesContent = styled.div`
  ${wrapper};
  margin-bottom: var(--scale-6);
`

export const StatesHeading = styled.h3`
  margin-bottom: var(--scale-5);
  ${queries[1]} {
    margin-bottom: var(--scale-6);
  }
`

export const StateGrid = styled.div`
  display: grid;
  grid-gap: var(--scale-5);
  grid-template-columns: 1fr;
  ${queries[1]} {
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--scale-6);
  }
`
