import React from 'react'
import stateAbbreviations from 'states-abbreviations'
import useCovidData from '../../hooks/useCovidData'
import Error from '../Error'
import Loading from '../Loading'
import State from '../State'

const States = () => {
  const { status, data, error } = useCovidData()

  if (status === 'error') {
    return <Error message={error.message} />
  }

  if (status === 'loading') {
    return <Loading />
  }

  return (
    <>
      {data.map(state => {
        // Filters out US Territories.
        if (!stateAbbreviations[state.state] || state.state === 'DC')
          return null
        return (
          <State
            key={state.state}
            name={stateAbbreviations[state.state]}
            abbreviation={state.state}
            positive={state.positive}
            positiveInc={state.positiveIncrease}
            negative={state.negative}
            hospitalized={state.hospitalizedCurrently}
            critical={state.inIcuCurrently}
          />
        )
      })}
    </>
  )
}

export default States
