import styled from 'styled-components'

export const StatesContent = styled.main`
  margin-bottom: var(--scale-8);
`

export const StatesHeading = styled.h3`
  margin-bottom: var(--scale-5);
`

export const StateGrid = styled.div`
  display: grid;
  grid-gap: var(--scale-5);
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
`
