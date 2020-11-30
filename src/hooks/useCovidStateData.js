import { useQuery } from 'react-query'
import axios from 'axios'

// A hook for fetching the Covid-19 state data.
const getCovidStateData = async () => {
  const { data } = await axios.get(
    'https://api.covidtracking.com/v1/states/current.json'
  )
  return data
}

export default function useCovidStateData() {
  return useQuery('covidStateData', getCovidStateData)
}
