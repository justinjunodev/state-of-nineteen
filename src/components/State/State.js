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
          <FaPlus />
          <span>Cases: {positive ? positive.toLocaleString() : ndr}</span>
        </S.StateDataPoint>
        <S.StateDataPoint>
          <FaHospitalAlt />
          <span>
            In Hospital: {hospitalized ? hospitalized.toLocaleString() : ndr}
          </span>
        </S.StateDataPoint>
        <S.StateDataPoint>
          <FaHeartbeat />
          <span>In ICU: {critical ? critical.toLocaleString() : ndr}</span>
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
