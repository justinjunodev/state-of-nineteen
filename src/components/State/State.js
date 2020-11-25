import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaHospitalAlt, FaHeartbeat } from 'react-icons/fa'
import * as S from './styles'

const State = ({ name, positive, hospitalized, critical }) => {
  const ndr = 'No Data Reported'
  return (
    <S.StateDetail>
      <S.StateName>{name}</S.StateName>
      <S.StateData>
        <S.StateDataPoint>
          <span>
            <FaPlus />
          </span>
          Cases: <strong>{positive ? positive.toLocaleString() : ndr}</strong>
        </S.StateDataPoint>
        <S.StateDataPoint>
          <span>
            <FaHospitalAlt />
          </span>
          In Hospital:
          <strong>{hospitalized ? hospitalized.toLocaleString() : ndr}</strong>
        </S.StateDataPoint>
        <S.StateDataPoint>
          <span>
            <FaHeartbeat />
          </span>
          In ICU: <strong>{critical ? critical.toLocaleString() : ndr}</strong>
        </S.StateDataPoint>
      </S.StateData>
    </S.StateDetail>
  )
}

State.propTypes = {
  name: PropTypes.string.isRequired,
  positive: PropTypes.number,
  hospitalized: PropTypes.number,
  critical: PropTypes.number,
}

export default State
