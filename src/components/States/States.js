import React from 'react'
import stateAbbreviations from 'states-abbreviations'
import useCovidStateData from '../../hooks/useCovidStateData'
import * as S from './styles'
import Error from '../Error'
import Loading from '../Loading'
import State from '../State'

// A component for fetching and displaying current state data.
const States = () => {
  const { status, data: states, error } = useCovidStateData()

  // Error and Loading status is generated from hook/React Query.
  if (status === 'error') {
    return <Error message={error.message} />
  }

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <S.StatesContent>
      <S.StatesHeading>Reports by State</S.StatesHeading>
      <S.StateGrid>
        {states.map(state => {
          // Filters out US Territories.
          if (!stateAbbreviations[state.state] || state.state === 'DC')
            return null
          return (
            <State
              key={state.state}
              name={stateAbbreviations[state.state]}
              positive={state.positive}
              positiveInc={state.positiveIncrease}
              hospitalized={state.hospitalizedCurrently}
              critical={state.inIcuCurrently}
            />
          )
        })}
      </S.StateGrid>
    </S.StatesContent>
  )
}

export default States
