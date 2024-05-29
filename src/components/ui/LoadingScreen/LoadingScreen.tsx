import { WDS_COLOR_BLUE_300 } from "src/styles/tokens";
import { Text } from "../Text/Text";
import { ButtonWrapper, CloseButton, Container, Spinner } from "./LoadingScreen.styled";
import { useScrollLock } from "usehooks-ts";
import { CloseIcon } from "../Icon";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const LoadingScreen = () => {
  const navigate = useNavigate()
  useScrollLock();

  const handleClose = useCallback(
    () => {
      navigate('/')
    },
    [navigate],
  )
  
  return (
    <Container>
      <ButtonWrapper>
        <CloseButton variant="ghost" size="XS" onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </ButtonWrapper>
      <Text variant="titleS" color={WDS_COLOR_BLUE_300}>
        Apreciem că rămâi cu noi până procesăm imaginea.
      </Text>
      <Text variant="bodyS" color={WDS_COLOR_BLUE_300}>
        Promitem că nu va dura mai mult de un minut! Îți mulțumim.
      </Text>
      <Spinner />
    </Container>
  );
};
