import { Route, Routes } from 'react-router-dom'
import Sites from '../pages/Sites'
import SiteDetail from '../pages/SiteDetail'
import Profile from '../pages/Profile'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Sites />}>
        <Route path="sites" element={<Sites />}>
          <Route path=":page" element={<Sites />} />
        </Route>
      </Route>
      <Route path="site/:id" element={<SiteDetail />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes
