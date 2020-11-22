import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaMinus, FaHospitalAlt, FaHeartbeat } from 'react-icons/fa'

const State = ({
  name,
  abbreviation,
  positive,
  positiveInc,
  negative,
  hospitalized,
  critical,
}) => (
  <div>
    <h3>
      {abbreviation} - {name}
    </h3>
    <ul>
      <li>
        <FaPlus />
        Positive: {positive || 'N/A'} + {positiveInc}
      </li>
      <li>
        <FaMinus />
        Negative: {negative || 'N/A'}
      </li>
      <li>
        <FaHospitalAlt />
        Hospitalized: {hospitalized || 'N/A'}
      </li>
      <li>
        <FaHeartbeat />
        Critical: {critical || 'N/A'}
      </li>
    </ul>
  </div>
)

State.propTypes = {
  name: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired,
  positive: PropTypes.number,
  positiveInc: PropTypes.number,
  negative: PropTypes.number,
  hospitalized: PropTypes.number,
  critical: PropTypes.number,
}

export default State
