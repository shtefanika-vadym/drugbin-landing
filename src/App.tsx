import { Provider } from "react-redux";
import { Container } from "./App.styled";
import { Metadata } from "./components/ui/Metadata/Metadata";
import { StyledContainer } from "./components/ui/Toast/CustomToast.styled";
import { Routes } from "./routes/Routes";
import store from "./store/store";

function App() {
  return (
    <Metadata
      title="DrugBin"
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <Provider store={store}>
        <Container>
          <Routes />
          <StyledContainer position="top-center" hideProgressBar limit={1} />
        </Container>
      </Provider>
    </Metadata>
  );
}

export default App;
