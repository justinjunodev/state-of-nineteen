import { useQuery } from 'react-query'
import axios from 'axios'

const getCovidData = async () => {
  const { data } = await axios.get(
    'https://api.covidtracking.com/v1/states/current.json'
  )
  return data
}

export default function useCovidDAta() {
  return useQuery('covidData', getCovidData)
}
