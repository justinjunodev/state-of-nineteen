import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaHospitalAlt, FaHeartbeat } from 'react-icons/fa'

const State = ({ name, abbreviation, positive, hospitalized, critical }) => (
  <div>
    <h3>
      {abbreviation} - {name}
    </h3>
    <ul>
      <li>
        <FaPlus />
        <span>
          Positive: {positive ? positive.toLocaleString() : 'No Data Availabe'}
        </span>
      </li>
      <li>
        <FaHospitalAlt />
        <span>
          Hospitalized:{' '}
          {hospitalized ? hospitalized.toLocaleString() : 'No Data Availabe'}
        </span>
      </li>
      <li>
        <FaHeartbeat />
        <span>
          Critical: {critical ? critical.toLocaleString() : 'No Data Availabe'}
        </span>
      </li>
    </ul>
  </div>
)

State.propTypes = {
  name: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired,
  positive: PropTypes.number,
  hospitalized: PropTypes.number,
  critical: PropTypes.number,
}

export default State
