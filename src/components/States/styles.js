import styled from 'styled-components'
import { contentWrapper } from '../../styles/global'

export const StatesContent = styled.main`
  ${contentWrapper};
  margin-bottom: var(--scale-8);
`

export const StatesHeading = styled.h3`
  margin-bottom: var(--scale-6);
`

export const StateGrid = styled.div`
  display: grid;
  grid-gap: var(--scale-6);

  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
`
