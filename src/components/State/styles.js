import styled from 'styled-components'

export const StateDetail = styled.div`
  border: 1px solid black;
  padding: var(--scale-5);
`

export const StateName = styled.h4`
  margin-bottom: var(--scale-3);
`

export const StateData = styled.ul``

export const StateDataPoint = styled.li`
  display: flex;
  align-items: center;
  span {
    margin-left: var(--scale-2);
  }
  :not(:last-of-type) {
    margin-bottom: var(--scale-3);
  }
`
