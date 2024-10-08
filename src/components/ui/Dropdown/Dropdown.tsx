import type { FC } from "react";
import { useCallback, useRef } from "react";

import useToggle from "src/hooks/useToggle";
import { useOnClickOutside } from "usehooks-ts";
import { ChevronDown, ChevronUp } from "../Icon";
import {
  Container,
  DropdownList,
  DropdownWrapper,
  Label,
  Option,
  Select,
} from "./Dropdown.styled";
import type { DropdownProps } from "./Dropdown.types";

export const Dropdown: FC<DropdownProps> = ({
  placeholder,
  label,
  selectedOptions,
  callbackOnChange,
  options,
}) => {
  const [showDropdown, toggleShowDropdown] = useToggle(false);

  const handleClose = useCallback(() => {
    if (showDropdown) toggleShowDropdown(false);
  }, [showDropdown, toggleShowDropdown]);

  const handleChange = useCallback(
    (option: string) => {
      callbackOnChange && callbackOnChange(option);
      toggleShowDropdown(false);
    },
    [callbackOnChange, toggleShowDropdown]
  );

  const containerRef = useRef(null);
  useOnClickOutside(containerRef, handleClose);

  return (
    <Container ref={containerRef}>
      <Label>{label}</Label>
      <DropdownWrapper onClick={() => toggleShowDropdown(!showDropdown)}>
        {selectedOptions ? selectedOptions : placeholder}
        {showDropdown ? <ChevronUp /> : <ChevronDown />}
      </DropdownWrapper>
      {showDropdown && (
        <DropdownList>
          <Select>
            {options?.map((option: string) => (
              <Option
                key={option}
                onClick={() => handleChange(option)}
                isActive={selectedOptions === option}
              >
                {option}
              </Option>
            ))}
          </Select>
        </DropdownList>
      )}
    </Container>
  );
};
