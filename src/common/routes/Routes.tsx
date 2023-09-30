import { CollectPage } from 'common/pages/Collect'
import { HomePage } from 'common/pages/Home'
import { ProcesPage } from 'common/pages/Proces'
import { Route, Routes as ReactRoutes, BrowserRouter } from 'react-router-dom'

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collect' element={<CollectPage />} />
        <Route path='/proces' element={<ProcesPage />} />
      </ReactRoutes>
    </BrowserRouter>
  )
}
