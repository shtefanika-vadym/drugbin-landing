import { CollectPage } from 'pages/Collect';
import { HomePage } from 'pages/Home';
import { ProcesPage } from 'pages/Proces';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collect" element={<CollectPage />} />
        <Route path="/proces" element={<ProcesPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};
