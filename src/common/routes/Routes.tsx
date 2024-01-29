import { SuccessPage } from 'pages/Success';
import { Show } from 'Show';
import { useAppSelector } from 'common/store/hooks';
import { CollectPage } from 'pages/Collect';
import { HomePage } from 'pages/Home';
import { ProcesPage } from 'pages/Proces';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

export const Routes = () => {
  const { isOpenModal, childModal } = useAppSelector((state) => state.modal);

  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collect" element={<CollectPage />} />
        <Route path="/proces" element={<ProcesPage />} />
        <Route path="/success/collect/:id" element={<SuccessPage />} />
      </ReactRoutes>
      <Show when={isOpenModal}>{childModal}</Show>
    </BrowserRouter>
  );
};
