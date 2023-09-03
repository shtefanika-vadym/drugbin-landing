import { Routes } from 'common/routes/Routes'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { store } from 'common/store/store'

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'ro', // Set the default language
  resources: {
    en: {
      translation: require('./common/translation/ro/translation.json'),
    },
    ro: {
      translation: require('./common/translation/en/translation.json'),
    },
  },
})

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <HashRouter>
          <I18nextProvider i18n={i18n}>
            <Routes />
          </I18nextProvider>
        </HashRouter>
      </React.StrictMode>
    </Provider>
  )
}

export default App
