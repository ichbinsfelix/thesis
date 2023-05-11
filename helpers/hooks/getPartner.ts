import { useQuery } from 'react-query'
import axios from 'axios'
import { Partner } from '../../components/types/profile'

const fetchUser = async (props: Partner) => {
  const { data } = await axios.get(
    'http://localhost:5100/fiberto/api/dossiers/1/mortgage/new_business/proposals/1/sustainability'
  )
  return data
}

const useUser = () => useQuery('posts', fetchUser)
export default useUser
