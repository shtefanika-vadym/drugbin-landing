import "react-loading-skeleton/dist/skeleton.css";
import { Container } from "./App.styled";
import { Metadata } from "./components/ui/Metadata/Metadata";
import { StyledContainer } from "./components/ui/Toast/CustomToast.styled";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <Metadata
      title="DrugBin"
      description="Ajutăm la eliminarea în siguranță a medicamentelor expirate sau neutilizate. Împreună, susținem un mediu mai sănătos."
    >
      <Container>
        <Routes />
        <StyledContainer position="top-center" hideProgressBar limit={1} />
      </Container>
    </Metadata>
  );
}

export default App;
