import AppLayout from '../../components/template/AppLayout'
import SiteDetailHeader from './Header/index'
import { SitesProvider } from '../../contexts/sites'
import SiteDetailBody from './Body'

const SiteDetail = () => {
  return (
    <SitesProvider>
      <AppLayout header={<SiteDetailHeader />}>
        <SiteDetailBody />
      </AppLayout>
    </SitesProvider>
  )
}

export default SiteDetail
