import { createContext, useEffect, useState } from 'react'
import api from '../services/api'

interface ClientsContextData {
  dataList: Array<any> | []
}

const ClientsContext = createContext<ClientsContextData>(
  {} as ClientsContextData
)

export const ClientsProvider: React.FC = ({ children }) => {
  const [dataList, setData] = useState([])

  const fetchClients = async () => {
    try {
      setData([])
      const response = await api.get(`/clients`)
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  return (
    <ClientsContext.Provider value={{ dataList }}>
      {children}
    </ClientsContext.Provider>
  )
}

export default ClientsContext
