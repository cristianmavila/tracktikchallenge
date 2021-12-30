import { createContext, useEffect, useState } from 'react'
import api from '../services/api'

interface ProfileContextData {
  avatar: string | ''
  username: string | ''
  email: string
  givenName: string
  id: string
  locale: string
}

const ProfileContext = createContext<ProfileContextData>(
  {} as ProfileContextData
)

export const ProfileProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<any>({})

  const fetchProfile = async () => {
    try {
      setData({})
      const response = await api.get(`/me`)
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  )
}

export default ProfileContext
