import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/Button/Button";
import { InfoCNP } from "../ui/InfoCNP/InfoCNP";
import { Input } from "../ui/Input/Input";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { ButtonContainer, InputContainer } from "./Collect.styled";
import { CollectContext } from "./CollectContext";
import { Container } from "./DetailsStep.styled";

export const DetailsStep = () => {
  const { next, back, hasPsycholepticDrug } = useContext(CollectContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const onSubmit = useCallback(() => {
    next();
  }, [next]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          {...register("details.name")}
          label="Numele *"
          placeholder="EX: Popescu"
        />
        <ErrorMessage
          errors={errors}
          name={"details.name"}
          render={({ message }) => (
            <ValidationMessage>{message}</ValidationMessage>
          )}
        />
      </InputContainer>

      <InputContainer>
        <Input
          {...register("details.surname")}
          label="Prenume *"
          placeholder="EX: Ion"
        />
        <ErrorMessage
          errors={errors}
          name={"details.surname"}
          render={({ message }) => (
            <ValidationMessage>{message}</ValidationMessage>
          )}
        />
      </InputContainer>

      {hasPsycholepticDrug && (
        <>
          <InputContainer>
            <Input
              {...register("details.cnp")}
              type="number"
              label="CNP (Codul Numeric Personal) *"
              placeholder="EX: 2840302301499"
            />
            <InfoCNP />
            <ErrorMessage
              errors={errors}
              name={"details.cnp"}
              render={({ message }) => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
          </InputContainer>

          <InputContainer>
            <Input
              {...register("details.address")}
              label="Adresa de domiciliu *"
              placeholder="EX: Strada Victoriei Nr.4 Bloc A2 Scara B"
            />
            <ErrorMessage
              errors={errors}
              name={"details.address"}
              render={({ message }) => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
          </InputContainer>
        </>
      )}

      <InputContainer>
        <Input
          {...register("details.email")}
          label="Adresa de e-mail (optional)"
          placeholder="EX: ion_popescu@gmail.com"
        />
        <ErrorMessage
          errors={errors}
          name={"details.email"}
          render={({ message }) => (
            <ValidationMessage>{message}</ValidationMessage>
          )}
        />
      </InputContainer>

      <ButtonContainer>
        <Button type="button" variant="secondary" onClick={back}>
          Înapoi
        </Button>
        <Button type="submit">Continuă</Button>
      </ButtonContainer>
    </Container>
  );
};
