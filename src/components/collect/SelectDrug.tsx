import { DrugName } from "@/types/drug.types";
import { useCallback } from "react";
import { SelectInstance, SingleValue } from "react-select";
import AsyncCreatableSelect from "react-select/async-creatable";
import { getSearch } from "src/hooks/drug";
import { WDS_COLOR_NEUTRAL_RICHBLACK } from "src/styles/tokens";
import { ChevronDown, ChevronUp } from "../ui/Icon";
import { Text } from "../ui/Text/Text";
import { selectDrugStyles } from "./SelectDrug.styled";

interface SelectDrugProps {
  onChange: (value: SingleValue<DrugName>) => void;
  selectedValue: DrugName;
  placeholder: string;
  label: string;
  selectRef: React.MutableRefObject<SelectInstance<DrugName> | null>;
}

// TODO: Resolve multiple api call
export const SelectDrug: React.FC<SelectDrugProps> = ({
  onChange,
  selectedValue,
  placeholder,
  label,
  selectRef,
}) => {
  const loadOptions = useCallback((inputValue: string) => {
    return new Promise<any>(
      async (resolve, reject) => {
        try {
          const response = await getSearch(inputValue, 10);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }
    );
  }, []);

  const handleChange = useCallback(
    (value: SingleValue<DrugName>) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <>
      <Text variant="inputLabel" color={WDS_COLOR_NEUTRAL_RICHBLACK}>
        {label}
      </Text>
      <AsyncCreatableSelect
        ref={selectRef}
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
