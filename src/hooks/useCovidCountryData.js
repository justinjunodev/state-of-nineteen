import { useQuery } from 'react-query'
import axios from 'axios'

// A hook for fetching the Covid-19 country (US) data.
const getCovidStateData = async () => {
  const { data } = await axios.get(
    'https://api.covidtracking.com/v1/us/current.json'
  )
  return data
}

export default function useCovidStateData() {
  return useQuery('covidCountryData', getCovidStateData)
}
