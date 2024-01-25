import { Metadata } from 'common/Metadata/Metadata';
import { Routes } from 'common/routes/Routes';
import { store } from 'common/store/store';
import { Provider } from 'react-redux';

function App() {
  // return null

  return (
    <Metadata
      title="DrugBin"
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <Provider store={store}>
        <Routes />
      </Provider>
    </Metadata>
  );
}

export default App;
