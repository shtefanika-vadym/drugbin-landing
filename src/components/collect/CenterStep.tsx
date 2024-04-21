import { CenterDetails } from "@/types/drug.types";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useContext } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useCenterDetailsQuery } from "src/api/drug";
import { MultipleFormContext } from "src/hooks/useMultipleForm";
import useToast from "src/hooks/useToast";
import { Button } from "../ui/Button/Button";
import { CenterCard } from "../ui/CenterCard/CenterCard";
import { Dropdown } from "../ui/Dropdown";
import { Toast, ToastType } from "../ui/Toast/Toast";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { Container } from "./CenterStep.styled";
import { ButtonContainer } from "./Collect.styled";

const DROPDOWN_VALUES = ["Suceava"];

export const CenterStep = () => {
  const { nextStep, prevStep } = useContext(MultipleFormContext);
  const { notify, toastVisible, toastMessage } = useToast();
  const { data } = useCenterDetailsQuery("");

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useFormContext();

  const watchedCenter = useWatch({
    control,
    name: "center",
  });

  const onSubmit = useCallback(() => {
    if (!watchedCenter) {
      notify(
        "Te rugăm să selectezi un centru de colectare înainte de a continua."
      );
    } else {
      nextStep();
    }
  }, [nextStep, notify, watchedCenter]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Toast
        message={toastMessage}
        show={toastVisible}
        type={ToastType.ERROR}
      />
      <Dropdown
        name="pack"
        placeholder="EX: Suceava"
        label="Selectează județul *"
        selectedOptions={DROPDOWN_VALUES[0]}
        options={DROPDOWN_VALUES}
        callbackOnChange={() => console.log("Suceava")}
      />
      {data?.map((item: CenterDetails) => {
        return (
          <CenterCard
            key={item?.id}
            name={item?.name}
            location={item?.location}
            street={item?.street}
            schedule={item?.schedule}
            handleSelect={() => setValue("center", item.id)}
            isActive={watchedCenter === item?.id}
          />
        );
      })}
      <ErrorMessage
        errors={errors}
        name={"center"}
        render={({ message }) => (
          <ValidationMessage>{message}</ValidationMessage>
        )}
      />
      <ButtonContainer>
        <Button variant="secondary" onClick={prevStep}>
          Înapoi
        </Button>
        <Button type="submit">Selectează</Button>
      </ButtonContainer>
    </Container>
  );
};
