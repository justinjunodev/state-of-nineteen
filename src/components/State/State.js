import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaHospitalAlt, FaHeartbeat } from 'react-icons/fa'

const State = ({ name, positive, hospitalized, critical }) => {
  const ndr = 'No Data Reported'
  return (
    <div>
      <h4>{name}</h4>
      <ul>
        <li>
          <FaPlus />
          <span>
            Positive Cases: {positive ? positive.toLocaleString() : ndr}
          </span>
        </li>
        <li>
          <FaHospitalAlt />
          <span>
            In Hospital: {hospitalized ? hospitalized.toLocaleString() : ndr}
          </span>
        </li>
        <li>
          <FaHeartbeat />
          <span>
            In Critical Condition: {critical ? critical.toLocaleString() : ndr}
          </span>
        </li>
      </ul>
    </div>
  )
}

State.propTypes = {
  name: PropTypes.string.isRequired,
  positive: PropTypes.number,
  hospitalized: PropTypes.number,
  critical: PropTypes.number,
}

export default State
