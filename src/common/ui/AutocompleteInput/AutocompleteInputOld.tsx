// import { useDrugQuery } from 'common/api/addApi';
// import type { FC } from 'react';
// import { useCallback, useState } from 'react';
// import Creatable from 'react-select/creatable';
// import { useDebounce } from 'usehooks-ts';
// import { Content, Label } from './AutoComplete.styled';

// interface AutocompleteInputProps {
//   name: string;
//   type?: string;
//   placeholder: string;
//   label?: string;
//   value?: {
//     name: string;
//     drugId: number;
//     isPsycholeptic: boolean;
//   };
//   onSelect?: (selectedOption: ValueType) => void;
// }

// interface ValueType {
//   drugId: number
//   isPsycholeptic: boolean
//   name: string
//   value: string
// }

// export const AutocompleteInput: FC<AutocompleteInputProps> = ({
//   name,
//   placeholder,
//   label,
//   onSelect,
//   value,
// }) => {
//   const [inputValue, setInputValue] = useState<string>('');
//   const debouncedValue = useDebounce(inputValue, 300);
//   const { data: options } = useDrugQuery(debouncedValue.toLowerCase());

//   const handleInputChange = useCallback((value: string) => {
//     setInputValue(value);
//   }, []);

//   const getOptionLabel = useCallback((option: any) => {
//     return option.name;
//   }, []);

//   const handleOnChange = useCallback((value: ValueType) => {
//     onSelect(value);
//   }, [onSelect]);

//   const valueObj = {
//     value: value?.name,
//     name: value?.name,
//     drugId: value?.drugId,
//     isPsycholeptic: value?.isPsycholeptic,
//   };

//   return (
//     <Content>
//       <Label>{label}</Label>
//       <Creatable
//         name={name}
//         value={valueObj.name && valueObj}
//         placeholder={placeholder}
//         options={options}
//         onInputChange={handleInputChange}
//         onChange={handleOnChange}
//         getOptionLabel={getOptionLabel}
//       />
//     </Content>
//   );
// };
