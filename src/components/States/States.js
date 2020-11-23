import React from 'react'
import stateAbbreviations from 'states-abbreviations'
import useCovidStateData from '../../hooks/useCovidStateData'
import Error from '../Error'
import Loading from '../Loading'
import State from '../State'

const States = () => {
  const { status, data: states, error } = useCovidStateData()

  if (status === 'error') {
    return <Error message={error.message} />
  }

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <div>
      <h3>Reports by State</h3>
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
    </div>
  )
}

export default States
