import React from 'react'
import * as S from './styles'
import useCovidCountryData from '../../hooks/useCovidCountryData'
import Link from '../Link'
import Error from '../Error'
import Loading from '../Loading'

// A component for fetching and displaying current country (US) data.
const Country = () => {
  const { status, data: country, error } = useCovidCountryData()

  // Error and Loading status is generated from hook/React Query.
  if (status === 'error') {
    return <Error message={error.message} />
  }

  if (status === 'loading') {
    return <Loading />
  }

  // A little destructuring to improve readability.
  const { positive, hospitalizedCurrently, inIcuCurrently, death } = country[0]

  return (
    <S.CountryBackground>
      <S.CountryContent>
        <S.CountryHeading>In the United States</S.CountryHeading>
        <S.CountryText>
          There are <strong>{positive.toLocaleString()}</strong> active cases of
          Covid-19. <strong>{hospitalizedCurrently.toLocaleString()}</strong>{' '}
          are receiving hospital care with{' '}
          <strong>{inIcuCurrently.toLocaleString()}</strong> patients in
          critical condition. The coronavirus is now responsible for the death
          of <strong>{death.toLocaleString()}</strong> Americans. To help reduce
          the spread and end this pandemic, please follow the advice of the{' '}
          <Link
            isExternal
            to="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
            label="Visit Centers for Disease Control website"
          >
            CDC
          </Link>
          ,{' '}
          <Link
            isExternal
            to="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            label="Visit World Health Organization website"
          >
            WHO
          </Link>
          , and local officials. This data is sourced from{' '}
          <Link
            isExternal
            to="https://covidtracking.com/data"
            label="Visit Covid Tracking Project website"
          >
            The Atlantic
          </Link>{' '}
          and is trusted by Johns Hopkins, The Whitehouse, and many more.
        </S.CountryText>
      </S.CountryContent>
    </S.CountryBackground>
  )
}

export default Country
