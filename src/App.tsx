import { Provider } from "react-redux";
import { Container } from "./App.styled";
import { StyledContainer } from "./components/ui/Toast/CustomToast.styled";
import { Routes } from "./routes/Routes";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Routes />
        <StyledContainer position="top-center" hideProgressBar limit={1} />
      </Container>
    </Provider>
  );
}

export default App;
