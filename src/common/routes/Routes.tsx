import { CollectPage } from 'common/pages/Collect'
import { HomePage } from 'common/pages/Home'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path='/' element={<HomePage />} />
      <Route path='/collect' element={<CollectPage />} />
    </ReactRoutes>
  )
}
