import { createContext, useState } from 'react'
import api from '../services/api'
import axios from 'axios'

interface SitesContextData {
  data: Array<any> | []
  pageCount: number | 0
  page: number | 0
  detail: detailSite
  query: string
  loading: boolean
  clientId: string
  setQuery: (value: string) => void
  setPage: (value: number) => void
  setClientId: (id: string) => void
  fetchSites(
    page: number | 1,
    limit: number | 10,
    search?: string,
    clientId?: string
  ): Promise<void>
  fetchDetail(id: string | undefined): Promise<any>
}

interface detailSite {
  title: string
  address: any
  contacts: any
  images: Array<any>
}

let cancelToken: any

const SitesContext = createContext<SitesContextData>({} as SitesContextData)

export const SitesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<any>([])
  const [pageCount, setPageCount] = useState<any>(0)
  const [detail, setDetail] = useState<any>({})
  const [query, setQuery] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(0)
  const [clientId, setClientId] = useState<string>('')

  const fetchSites = async (
    page: number,
    limit: number,
    search: string,
    clientId?: string
  ) => {
    setLoading(true)
    setData([])
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel('Operation canceled due to new request.')
    }
    cancelToken = axios.CancelToken.source()
    try {
      let params = { _page: page, _limit: limit }
      if (search) {
        let searchParams = { q: search }
        params = Object.assign({}, searchParams, params)
      }

      if (clientId) {
        let searchParams = { clientId }
        params = Object.assign({}, searchParams, params)
      }
      const response = await api.get(`/sites`, {
        params,
        cancelToken: cancelToken.token,
      })
      const total: any = response.headers['x-total-count']
      setData(response.data)
      setPageCount(Math.ceil(total / limit))
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchDetail = async (id: string) => {
    try {
      setLoading(true)
      setDetail({})
      const response = await api.get(`/sites/${id}`)
      setDetail(response.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  return (
    <SitesContext.Provider
      value={{
        loading,
        data,
        pageCount,
        detail,
        query,
        page,
        clientId,
        setClientId,
        setPage,
        setQuery,
        fetchSites,
        fetchDetail,
      }}
    >
      {children}
    </SitesContext.Provider>
  )
}

export default SitesContext
