import { Routes } from 'common/routes/Routes';
import { store } from 'common/store/store';
import { Provider } from 'react-redux';

function App() {

  return null
  
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
