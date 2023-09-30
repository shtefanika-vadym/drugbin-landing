import { Routes } from 'common/routes/Routes'
import { Provider } from 'react-redux'
import { store } from 'common/store/store'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
