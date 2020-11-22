import React from 'react'
import PropTypes from 'prop-types'

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
    <h2>
      {abbreviation} - {name}
    </h2>
    <ul>
      <li>
        Positive: {positive || 'N/A'} + {positiveInc}
      </li>
      <li>Negative: {negative || 'N/A'}</li>
      <li>Hospitalized: {hospitalized || 'N/A'}</li>
      <li>Critical: {critical || 'N/A'}</li>
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
