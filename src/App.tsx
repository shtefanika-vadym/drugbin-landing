import { Metadata } from 'common/Metadata/Metadata';
import { Routes } from 'common/routes/Routes';
import { store } from 'common/store/store';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from 'i18next';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'ro',
  resources: {
    ro: {
      translation: require('./common/translation/ro/translation.json'),
    },
    en: {
      translation: require('./common/translation/en/translation.json'),
    },
  },
});

function App() {
  return (
    <Metadata
      title="DrugBin"
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Routes />
        </I18nextProvider>
      </Provider>
    </Metadata>
  );
}

export default App;
