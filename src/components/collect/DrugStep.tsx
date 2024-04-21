import { ErrorMessage } from "@hookform/error-message";
import { every, gt, isEmpty } from "lodash-es";
import { useCallback, useContext, useMemo } from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import {
  MultipleFormContext,
  initialDrugValue,
} from "src/hooks/useMultipleForm";
import useToast from "src/hooks/useToast";
import { Button } from "../ui/Button/Button";
import { Dropdown } from "../ui/Dropdown";
import { Input } from "../ui/Input/Input";
import { Toast, ToastType } from "../ui/Toast/Toast";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { InputContainer } from "./Collect.styled";
import { Container, Delete, DrugData } from "./DrugStep.styled";
import { SelectDrug } from "./SelectDrug";

// TODO: Get from API
export const DROPDOWN_VALUES = ["Cutie", "Blister", "Pastila"];

export const DrugStep = () => {
  const { notify, toastVisible, toastMessage, disableButtons } = useToast();
  const { nextStep } = useContext(MultipleFormContext);

  const {
    control,
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "drug",
    rules: { minLength: 1 },
  });

  const watchedFields = useWatch({
    control,
    name: "drug",
  });

  const areFieldsValid = useMemo(
    () =>
      every(watchedFields, (item) => !isEmpty(item.name) && item.amount > 0),
    [watchedFields]
  );

  const handleAddEntry = useCallback(() => {
    if (isEmpty(errors) && areFieldsValid) {
      append(initialDrugValue);
    } else {
      !disableButtons &&
        notify(
          "Vă rugăm să completați detaliile medicamentelor curente înainte de a adăuga altele."
        );
    }
  }, [errors, areFieldsValid, append, disableButtons, notify]);

  const handleSubmit = useCallback(() => {
    return areFieldsValid
      ? nextStep()
      : notify(
          "Vă rugăm să completați detaliile medicamentelor curente."
        );
  }, [areFieldsValid, nextStep, notify]);

  return (
    <Container>
      <Toast
        message={toastMessage}
        show={toastVisible}
        type={ToastType.ERROR}
      />
      {fields.map((field, index) => (
        <DrugData key={field.id}>
          {gt(watchedFields.length, 1) && (
            <Delete onClick={() => remove(index)}>Șterge</Delete>
          )}
          <InputContainer>
            <SelectDrug
              {...register(`drug.${index}.name`, {
                required: "Numele este un câmp obligatoriu.",
              })}
              label="Numele *"
              placeholder="EX: Ibuprofen"
              selectedValue={watchedFields[index]?.name}
              callbackOnChange={(name) => setValue(`drug.${index}.name`, name)}
            />
            <ErrorMessage
              errors={errors}
              name={`drug.${index}.name`}
              render={({ message }) => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
          </InputContainer>

          <Dropdown
            {...register(`drug.${index}.pack`, {
              required: "Tipul de ambalaj este un câmp obligatoriu.",
            })}
            placeholder="Cutie"
            label="Tipul de ambalaj *"
            selectedOptions={watchedFields[index]?.pack}
            options={DROPDOWN_VALUES}
            callbackOnChange={(pack) => setValue(`drug.${index}.pack`, pack)}
          />

          <InputContainer>
            <Input
              type="number"
              label="Cantitatea *"
              {...register(`drug.${index}.amount`, {
                required: "Cantitatea este un câmp obligatoriu.",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Cantitatea trebuie să fie mai mare de 0.",
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name={`drug.${index}.amount`}
              render={({ message }) => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
          </InputContainer>
        </DrugData>
      ))}
      <Button
        type="button"
        variant="secondary"
        size="FULL"
        onClick={handleAddEntry}
      >
        Adaugă alt medicament
      </Button>
      <Button onClick={handleSubmit} size="FULL">
        Continuă
      </Button>
    </Container>
  );
};
