import { useCallback, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import {
  BottomContent,
  Content,
  Text,
  TopContent,
} from './CNPInformation.styled';
import { ChevronDown, ChevronUp } from '../Icon/Icon';

export const CNPInformation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const topNavRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOnClickOutside(topNavRef, handleClose);

  return (
    <Content ref={topNavRef}>
      <TopContent onClick={handleOpen}>
        <Text>De ce avem nevoie de CNP?</Text>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </TopContent>
      {isOpen && (
        <BottomContent>
          Avem nevoie de CNP-ul tau pentru că ai introdus medicamente de tip
          stupefiant. Datele tale sunt în siguranță cu noi.
        </BottomContent>
      )}
    </Content>
  );
};
