import React from 'react'
import stateAbbreviations from 'states-abbreviations'
import useCovidData from '../../hooks/useCovidData'
import Error from '../Error'
import Loading from '../Loading'

const States = () => {
  const { status, data, error } = useCovidData()

  if (status === 'error') {
    return <Error message={error.message} />
  }

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <ul>
      {data.map(state => {
        // Filters out US Territories.
        if (!stateAbbreviations[state.state] || state.state === 'DC')
          return null
        return (
          <li key={state.state} name={state.state}>
            {state.state} {stateAbbreviations[state.state]} | pos:{' '}
            {state.positive} (+{state.positiveIncrease}) neg: {state.negative} -
            hos: {state.hospitalizedCurrently} - icu: {state.inIcuCurrently}
          </li>
        )
      })}
    </ul>
  )
}

export default States
