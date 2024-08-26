import { DrugName, Drugs } from "@/types/drug.types";
import { ErrorMessage } from "@hookform/error-message";
import { gt } from "lodash-es";
import { useCallback, useContext, useRef } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import { SelectInstance, SingleValue } from "react-select";
import "react-toastify/dist/ReactToastify.css";
import { initialDrugValue } from "src/hooks/useCollectForm";
import { PACK_VALUES } from "src/utils/consts";
import { Button } from "../ui/Button/Button";
import { Dropdown } from "../ui/Dropdown";
import { QuantityInput } from "../ui/QuantityInput/QuantityInput";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { InputContainer } from "./Collect.styled";
import { CollectContext } from "./CollectContext";
import { Container, Delete, DrugData } from "./DrugStep.styled";
import { SelectDrug } from "./SelectDrug";

export const DrugStep = () => {
  const selectRef = useRef<SelectInstance<DrugName> | null>(null);

  const { next } = useContext(CollectContext);
  const {
    control,
    register,
    formState: { errors },
    setValue,
    watch,
    handleSubmit,
    clearErrors,
    trigger,
    setFocus,
  } = useFormContext();
  const { append, remove } = useFieldArray({
    control,
    name: "drug",
    rules: { minLength: 1 },
  });

  const currentDrugList: Drugs[] = watch("drug");

  const handleAddEntry = useCallback(async () => {
    const response = await trigger();
    if (response) {
      await append(initialDrugValue);
      selectRef.current?.focus();
    }
  }, [trigger, append]);

  const onSubmit: SubmitHandler<FieldValues> = useCallback(() => {
    next();
  }, [next]);

  const handleDrugSelect = useCallback(
    (index: number, name: SingleValue<DrugName>) => {
      setValue(`drug.${index}.name`, name);
      clearErrors(`drug.${index}.name`);
    },
    [setValue, clearErrors]
  );

  const handleQuantityChange = useCallback(
    (index: number, number: number) => {
      setValue(`drug.${index}.amount`, number);
      clearErrors(`drug.${index}.amount`);
    },
    [setValue, clearErrors]
  );

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {currentDrugList.map((field, index) => (
        <DrugData key={`${field.name.id}-${index}`}>
          {gt(currentDrugList.length, 1) && (
            <Delete onClick={() => remove(index)}>Șterge</Delete>
          )}
          <InputContainer>
            <Controller
              control={control}
              name={`drug.${index}.name`}
              render={() => (
                <SelectDrug
                  selectRef={selectRef}
                  label="Numele *"
                  placeholder="EX: Ibuprofen"
                  selectedValue={field.name}
                  onChange={(name) => {
                    handleDrugSelect(index, name);
                  }}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name={`drug.${index}.name.value`}
              render={({ message }) => {
                message && selectRef.current?.focus();
                return <ValidationMessage>{message}</ValidationMessage>;
              }}
            />
          </InputContainer>

          <Controller
            control={control}
            name={`drug.${index}.pack`}
            render={() => (
              <Dropdown
                placeholder="Cutie"
                label="Tipul de ambalaj *"
                selectedOptions={field.pack}
                options={PACK_VALUES}
                callbackOnChange={(pack) =>
                  setValue(`drug.${index}.pack`, pack)
                }
              />
            )}
          />

          <InputContainer>
            <QuantityInput
              {...register(`drug.${index}.amount`)}
              label="Cantitatea *"
              value={currentDrugList[index]?.amount}
              callbackOnChange={(number) => handleQuantityChange(index, number)}
            />
            <ErrorMessage
              errors={errors}
              name={`drug.${index}.amount`}
              render={({ message }) => {
                message && setFocus(`drug.${index}.amount`);
                return <ValidationMessage>{message}</ValidationMessage>;
              }}
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
      <Button type="submit" size="FULL">
        Continuă
      </Button>
    </Container>
  );
};
