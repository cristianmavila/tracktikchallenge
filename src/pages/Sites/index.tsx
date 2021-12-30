import { SitesProvider } from '../../contexts/sites'
import AppLayout from '../../components/template/AppLayout'
import SitesList from './List'
import SitesFilters from './Filters'

const Sites = () => {
  return (
    <SitesProvider>
      <AppLayout header={<SitesFilters />}>
        <SitesList />
      </AppLayout>
    </SitesProvider>
  )
}

export default Sites
