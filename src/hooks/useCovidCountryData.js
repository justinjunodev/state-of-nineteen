import { useQuery } from 'react-query'
import axios from 'axios'

const getCovidStateData = async () => {
  const { data } = await axios.get(
    'https://api.covidtracking.com/v1/us/current.json'
  )
  return data
}

export default function useCovidStateData() {
  return useQuery('covidCountryData', getCovidStateData)
}
