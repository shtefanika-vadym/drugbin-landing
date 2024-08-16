import { DrugName } from "@/types/drug.types";
import { useCallback } from "react";
import { SingleValue } from "react-select";
import AsyncCreatableSelect from "react-select/async-creatable";
import { getDrugsRequest } from "src/hooks/drug";
import { WDS_COLOR_NEUTRAL_RICHBLACK } from "src/styles/tokens";
import { ChevronDown, ChevronUp } from "../ui/Icon";
import { Text } from "../ui/Text/Text";
import { selectDrugStyles } from "./SelectDrug.styled";

interface SelectDrugProps {
  callbackOnChange: (value: SingleValue<string>) => void;
  selectedValue: DrugName;
  placeholder: string;
  label: string;
}

// TODO: Resolve multiple api call
export const SelectDrug: React.FC<SelectDrugProps> = ({
  callbackOnChange,
  selectedValue,
  placeholder,
  label,
}) => {
  const loadOptions = useCallback((inputValue: string) => {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const response = await getDrugsRequest(inputValue, 10);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }, []);

  const handleChange = useCallback(
    (value: SingleValue<any>) => {
      callbackOnChange(value);
    },
    [callbackOnChange]
  );

  return (
    <>
      <Text variant="inputLabel" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
        {label}
      </Text>
      <AsyncCreatableSelect
        cacheOptions={false}
        placeholder={placeholder}
        defaultOptions
        value={selectedValue.label ? selectedValue : null}
        loadOptions={loadOptions}
        onChange={handleChange}
        allowCreateWhileLoading={false}
        styles={selectDrugStyles}
        components={customComponents}
      />
    </>
  );
};

export const customComponents = {
  // TODO: Find other approach
  DropdownIndicator: ({ ...props }) => {
    return props.selectProps.menuIsOpen ? (
      <div style={{ padding: "0px 8px" }}>
        <ChevronUp />
      </div>
    ) : (
      <div style={{ padding: "0px 8px" }}>
        <ChevronDown />
      </div>
    );
  },
};
