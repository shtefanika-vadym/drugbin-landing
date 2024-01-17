import { SelectValue } from '@/types/CollectInterface';
import { SearchProps } from '@/types/collect';
import { useDrugQuery } from 'common/api/addApi';
import { isEmpty } from 'lodash-es';
import {
  ChangeEvent,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react';
import { useDebounce, useOnClickOutside } from 'usehooks-ts';
import { Button } from '../Button';
import { Input } from '../Input';
import { Loader } from '../Loader';
import {
  Container,
  DeleteText,
  DropdownList,
  Label,
  LabelWrapper,
  ListItem,
  Placeholder,
  SelectDropdown,
  SelectWrapper,
  SelectedValue,
  WarningMessage,
} from './Select.styled';

interface SelectProps {
  value: SelectValue;
  onSelect: (selectedOption: SelectValue) => void;
  onDelete: MouseEventHandler<HTMLParagraphElement>;
  isDeleteButtonActive: boolean;
}

export const Select: React.FC<SelectProps> = ({
  value,
  isDeleteButtonActive,
  onSelect,
  onDelete,
}) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const debouncedValue = useDebounce(searchInput, 300);
  const { data: options, isLoading } = useDrugQuery(
    debouncedValue?.toLowerCase()
  );

  const handleToggleDropdown = useCallback(() => {
    setSearchInput('');
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleSelectOption = useCallback(
    (option: SelectValue) => {
      onSelect(option);
      setSearchInput('');
      setIsOpen(false);
    },
    [onSelect]
  );

  const handleSearchInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setSearchInput(inputValue);
    },
    []
  );

  const handleClose = useCallback(() => {
    setSearchInput('');
    setIsOpen(false);
  }, []);

  const handleCreateOption = useCallback(() => {
    const newOption = {
      drugId: 0,
      name: searchInput,
      value: searchInput,
      isPsycholeptic: false,
    };
    onSelect(newOption);
    setSearchInput('');
    setIsOpen(false);
  }, [onSelect, searchInput]);

  useOnClickOutside(containerRef, handleClose);

  return (
    <Container ref={containerRef}>
      <LabelWrapper>
        <Label>Numele *</Label>
        {isDeleteButtonActive && (
          <DeleteText onClick={onDelete}>Șterge</DeleteText>
        )}
      </LabelWrapper>
      <SelectWrapper onClick={handleToggleDropdown}>
        {value.name ? (
          <SelectedValue>{value.name}</SelectedValue>
        ) : (
          <Placeholder>EX: Ibuprofen</Placeholder>
        )}
      </SelectWrapper>
      {isOpen && (
        <SelectDropdown>
          <Input
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder="Cauta..."
          />
          <Loader isLoading={isLoading} size={24} justify="center">
            <DropdownList>
              {options?.map((option: SearchProps, index: number) => (
                <ListItem
                  key={index}
                  onClick={() => handleSelectOption(option)}
                  isActive={option?.drugId === value?.drugId}
                >
                  {option.value}
                </ListItem>
              ))}
              {isEmpty(options) && (
                <>
                  <WarningMessage>
                    Medicamentul nu există în baza de date.
                  </WarningMessage>
                  <hr />
                  <Button
                    variant="primaryFull"
                    size="S-round"
                    onClick={handleCreateOption}
                  >
                    Adaugă
                  </Button>
                </>
              )}
            </DropdownList>
          </Loader>
        </SelectDropdown>
      )}
    </Container>
  );
};
