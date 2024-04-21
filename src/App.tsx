import { Provider } from 'react-redux';
import { Container } from "./App.styled";
import { Routes } from "./routes/Routes";
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Routes />
      </Container>
    </Provider>
  );
}

export default App;
