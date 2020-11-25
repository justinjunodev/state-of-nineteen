import styled from 'styled-components'
import { queries } from '../../styles/global'

export const StateDetail = styled.div`
  padding: var(--scale-5);
  background: var(--royal);
  box-shadow: var(--shadow);
  border-top: var(--scale-1) solid var(--gold);
  border-bottom-right-radius: var(--scale-2);
  border-bottom-left-radius: var(--scale-2);
  ${queries[2]} {
    padding: var(--scale-6);
  }
`

export const StateName = styled.h4`
  margin-bottom: var(--scale-4);
  color: var(--white);
`

export const StateData = styled.ul`
  color: var(--silver);
`

export const StateDataPoint = styled.li`
  display: flex;
  align-items: center;
  span {
    margin-right: var(--scale-2);
    background: var(--gold);
    padding: var(--scale-1);
    border-radius: 50%;
    box-shadow: var(--shadow);
    svg {
      color: var(--royal);
      display: block;
    }
  }
  strong {
    color: var(--white);
    margin-left: var(--scale-1);
  }
  :not(:last-of-type) {
    margin-bottom: var(--scale-2);
  }
`
