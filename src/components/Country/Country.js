import React from 'react'
import useCovidCountryData from '../../hooks/useCovidCountryData'
import Link from '../Link'
import Error from '../Error'
import Loading from '../Loading'

const Country = () => {
  const { status, data: country, error } = useCovidCountryData()

  if (status === 'error') {
    return <Error message={error.message} />
  }

  if (status === 'loading') {
    return <Loading />
  }

  const { positive, hospitalizedCurrently, inIcuCurrently, death } = country[0]

  return (
    <div>
      <h2>In the United States</h2>
      <p>
        There are <u>{positive.toLocaleString()}</u> active cases of Covid-19.{' '}
        <u>{hospitalizedCurrently.toLocaleString()}</u> are receiving hospital
        care with <u>{inIcuCurrently.toLocaleString()}</u> patients in critical
        condition. The coronavirus is now responsible for the death of{' '}
        <u>{death.toLocaleString()}</u> Americans. To help reduce the spread and
        end this pandemic, please follow the advice of the{' '}
        <Link
          isExternal
          to="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
          label="Visit Centers for Disease Control website"
        >
          CDC (Centers for Disease Control)
        </Link>
        ,{' '}
        <Link
          isExternal
          to="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
          label="Visit World Health Organization website"
        >
          WHO (World Health Organization)
        </Link>
        , and local officials. This data is sourced from{' '}
        <Link
          isExternal
          to="https://covidtracking.com/data"
          label="Visit Covid Tracking Project website"
        >
          The Atlantic's Covid Tracking Project
        </Link>{' '}
        and is trusted by Johns Hopkins, The Whitehouse, and many more.
      </p>
    </div>
  )
}

export default Country
