import { useCallback, useRef, useState } from "react";
import { WDS_COLOR_BLUE_100 } from "src/styles/tokens";
import { useOnClickOutside } from "usehooks-ts";
import { ChevronDown, ChevronUp } from "../Icon";
import { Text } from "../Text/Text";
import { Content, Description, Title } from "./InfoCNP.styled";

// TODO --> REFACTOR
export const InfoCNP = () => {
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
      <Title onClick={handleOpen}>
        <Text variant="bodyInfo" color={WDS_COLOR_BLUE_100}>
          De ce avem nevoie de CNP?
        </Text>
        {isOpen ? (
          <ChevronDown height={16} width={16} />
        ) : (
          <ChevronUp height={16} width={16} />
        )}
      </Title>
      {isOpen && (
        <Description>
          Avem nevoie de CNP-ul tau pentru că ai introdus medicamente de tip
          stupefiant. Datele tale sunt în siguranță cu noi.
        </Description>
      )}
    </Content>
  );
};
