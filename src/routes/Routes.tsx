import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import { CollectPage } from "src/pages/CollectPage";
import { HomePage } from "src/pages/HomePage";
import { PrivacyPage } from "src/pages/PrivacyPage";
import { SuccessPage } from "src/pages/SuccessPage";
import { TermsPage } from "src/pages/TermsPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collect" element={<CollectPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/success/collect/:id" element={<SuccessPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};
