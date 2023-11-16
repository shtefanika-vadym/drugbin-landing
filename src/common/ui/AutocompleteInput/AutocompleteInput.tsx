import { useDrugQuery } from 'common/api/addApi';
import useOnClickOutside from 'common/hooks/useOnClickOutside';
import { SelectValue } from '@/types/CollectInterface';
import { isEmpty } from 'lodash-es';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { Loader } from '../Loader/Loader';
import {
  AutoComplete,
  Dropdown,
  Label,
  Option,
  SearchInput,
  SelectedOption,
} from './AutoComplete.styled';

interface AutocompleteInputProps {
  placeholder: string;
  label?: string;
  value: SelectValue
  onSelect?: (selectedOption: SelectValue) => void;
}

export const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  placeholder,
  label,
  value,
  onSelect,
}) => {
  const containerRef = useRef(null);
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce(inputValue, 300);
  const { data: options, isLoading } = useDrugQuery(
    debouncedValue.toLowerCase()
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  }, []);

  const handleSelectOption = useCallback(
    (selectedOption: SelectValue) => {
      setInputValue(selectedOption.value);
      setShowDropdown(false);
      onSelect(selectedOption);
    },
    [onSelect]
  );

  const handleCreateOption = useCallback(() => {
    const newOption = {
      drugId: 0,
      name: inputValue,
      value: inputValue,
      isPsycholeptic: false,
    };

    setInputValue(newOption.value);
    setShowDropdown(false);
    onSelect(newOption);
  }, [inputValue, onSelect]);

  const handleClose = useCallback(() => {
    setShowDropdown(false);
  }, []);

  const handleOpen = useCallback(() => {
    setShowDropdown(!showDropdown)
  }, [showDropdown]);

  useOnClickOutside(containerRef, handleClose);

  return (
    <AutoComplete ref={containerRef}>
      <Label>{label}</Label>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleOpen}
      />
      {showDropdown && (
        <Dropdown>
          <Loader isLoading={isLoading} size={24} justify="center">
            {options?.map((option: SelectValue, index: number) => (
              <Option key={index} onClick={() => handleSelectOption(option)}>
                <SelectedOption isActive={option.drugId === value.drugId}>{option.value}</SelectedOption>
              </Option>
            ))}
            {isEmpty(options) && (
              <button onClick={handleCreateOption}>Create Option</button>
            )}
          </Loader>
        </Dropdown>
      )}
    </AutoComplete>
  );
};
