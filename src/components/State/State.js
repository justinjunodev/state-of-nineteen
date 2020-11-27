import React from 'react'
import PropTypes from 'prop-types'
import { TwitterShareButton } from 'react-share'
import { FaPlus, FaHospitalAlt, FaHeartbeat, FaTwitter } from 'react-icons/fa'
import useSiteMeta from '../../hooks/useSiteMeta'
import * as S from './styles'

const State = ({ name, positive, hospitalized, critical }) => {
  const ndr = 'No Data Reported'
  const { title, url } = useSiteMeta()
  return (
    <S.StateDetail>
      <S.StateShare>
        <TwitterShareButton
          title={`Did you know that ${name} has ${positive.toLocaleString()} active cases of Covid-19? Learn more at "${title}".`}
          url={url}
        >
          <span>Share on Twitter</span>
        </TwitterShareButton>
      </S.StateShare>
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
