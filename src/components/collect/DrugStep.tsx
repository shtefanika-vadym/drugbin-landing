import { Drugs } from "@/types/drug.types";
import { ErrorMessage } from "@hookform/error-message";
import { every, gt } from "lodash-es";
import { useCallback, useContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import {
  MultipleFormContext,
  initialDrugValue,
} from "src/hooks/useMultipleForm";
import { Button } from "../ui/Button/Button";
import { Dropdown } from "../ui/Dropdown";
import { QuantityInput } from "../ui/QuantityInput/QuantityInput";
import { ToastType, notify } from "../ui/Toast/CustomToast";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { InputContainer } from "./Collect.styled";
import { Container, Delete, DrugData } from "./DrugStep.styled";
import { SelectDrug } from "./SelectDrug";

// TODO: Get from API
export const DROPDOWN_VALUES = ["Cutie", "Unitate"];

export const DrugStep = () => {
  const { nextStep } = useContext(MultipleFormContext);
  const {
    control,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const { append, remove } = useFieldArray({
    control,
    name: "drug",
    rules: { minLength: 1 },
  });

  const currentDrugList: Drugs[] = watch("drug");

  const isDrugListValid = every(
    currentDrugList,
    (item) => item?.name?.value && item.amount > 0
  );

  const handleAddEntry = useCallback(() => {
    if (isDrugListValid) {
      append(initialDrugValue);
    } else {
      notify(
        "Vă rugăm să completați detaliile medicamentelor curente înainte de a adăuga altele.",
        ToastType.ERROR
      );
    }
  }, [isDrugListValid, append]);

  const handleSubmit = useCallback(() => {
    return isDrugListValid
      ? nextStep()
      : notify(
          "Vă rugăm să completați detaliile medicamentelor curente.",
          ToastType.ERROR
        );
  }, [isDrugListValid, nextStep]);

  return (
    <Container>
      {currentDrugList.map((field: any, index: number) => (
        <DrugData key={`${field.id}-${index}`}>
          {gt(currentDrugList.length, 1) && (
            <Delete onClick={() => remove(index)}>Șterge</Delete>
          )}
          <InputContainer>
            <SelectDrug
              {...register(`drug.${index}.name`, {
                required: "Numele este un câmp obligatoriu.",
              })}
              label="Numele *"
              placeholder="EX: Ibuprofen"
              selectedValue={currentDrugList[index]?.name}
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
            selectedOptions={currentDrugList[index]?.pack}
            options={DROPDOWN_VALUES}
            callbackOnChange={(pack) => setValue(`drug.${index}.pack`, pack)}
          />

          <InputContainer>
            <QuantityInput
              callbackOnChange={(number) =>
                setValue(`drug.${index}.amount`, number)
              }
              label="Cantitatea *"
              value={currentDrugList[index]?.amount}
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
