import { ErrorMessage } from "@hookform/error-message";
import { some } from "lodash-es";
import { useCallback, useContext, useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { MultipleFormContext } from "src/hooks/useMultipleForm";
import { Button } from "../ui/Button/Button";
import { InfoCNP } from "../ui/InfoCNP/InfoCNP";
import { Input } from "../ui/Input/Input";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { ButtonContainer, InputContainer } from "./Collect.styled";
import { Container } from "./DetailsStep.styled";

export const DetailsStep = () => {
  const { nextStep, prevStep } = useContext(MultipleFormContext);
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();

  const watchedDrugFields = useWatch({
    control,
    name: "drug",
  });

  const isPsycholeptic = useMemo(
    () => some(watchedDrugFields, (item) => item.name.isPsycholeptic === true),
    [watchedDrugFields]
  );

  const onSubmit = useCallback(() => {
    nextStep();
  }, [nextStep]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          label="Numele *"
          placeholder="EX: Ion"
          {...register("details.name", {
            required: "Numele este un câmp obligatoriu.",
          })}
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
          label="Prenume *"
          placeholder="EX: Popescu"
          {...register("details.surname", {
            required: "Prenume este un câmp obligatoriu.",
          })}
        />
        <ErrorMessage
          errors={errors}
          name={"details.surname"}
          render={({ message }) => (
            <ValidationMessage>{message}</ValidationMessage>
          )}
        />
      </InputContainer>
      {isPsycholeptic && (
        <>
          <InputContainer>
            <Input
              type="number"
              label="CNP (Codul Numeric Personal) *"
              placeholder="EX: 18903543356"
              {...register("details.cnp", {
                required: "CNP este un câmp obligatoriu.",
                valueAsNumber: true,
                validate: {
                  validLength: (value) =>
                    value.toString().length === 13 ||
                    "Te rugăm să introduci un CNP valid",
                },
              })}
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
              label="Adresa de domiciliu *"
              placeholder="EX: Strada Victoriei Nr.4 Bloc A2 Scara B"
              {...register("details.address", {
                required: "Adresa este un câmp obligatoriu.",
              })}
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
          label="Adresa de e-mail (optional)"
          placeholder="EX: ion_popescu@gmail.com"
          {...register("details.email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
      </InputContainer>

      <ButtonContainer>
        <Button variant="secondary" onClick={prevStep}>
          Înapoi
        </Button>
        <Button type="submit">Continuă</Button>
      </ButtonContainer>
    </Container>
  );
};
