import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "src/components/ui/Icon";
import { Container, LogoXS, Navigation } from "./TopBlockCollect.styled";

export const TopBlockCollect = () => {
  const navigate = useNavigate();

  const handleAbort = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container>
      <Navigation>
        <LogoXS onClick={handleAbort} />
        <CloseIcon onClick={handleAbort} />
      </Navigation>
    </Container>
  );
};
