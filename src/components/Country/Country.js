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
  console.log(country)
  return (
    <div>
      <h2>Current U.S. Data</h2>
      <p>
        In the United States, there are {positive.toLocaleString()} active cases
        of Covid-19, and {hospitalizedCurrently.toLocaleString()} are receiving
        hospital care, with {inIcuCurrently.toLocaleString()} in the ICU. The
        virus is now responsible for the death of {death.toLocaleString()}{' '}
        Americans. To help reduce the spread and end this pandemic, please wear
        a mask and follow the advice of the{' '}
        <Link
          isExternal
          to="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"
          label="Visit Centers for Disease Control website"
        >
          CDC
        </Link>{' '}
        and local officials.
      </p>
    </div>
  )
}

export default Country
