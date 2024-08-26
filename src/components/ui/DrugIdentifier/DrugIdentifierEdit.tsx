import { Drugs } from "@/types/drug.types";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { getStringWidth } from "src/utils/utils";
import { useOnClickOutside } from "usehooks-ts";
import { CheckIcon, EditIcon } from "../Icon";
import { Container, CustomInput, MainText } from "./DrugIdentifierEdit.styled";

interface DrugIdentifierEditProps {
  children: string | number;
  index: number;
  field: keyof Drugs;
  handleModify: (
    index: number,
    field: keyof Drugs,
    value: ChangeEvent<HTMLInputElement>
  ) => void;
  disable?: boolean;
}

export const DrugIdentifierEdit: React.FC<DrugIdentifierEditProps> = ({
  children,
  index,
  field,
  handleModify,
  disable,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const contentRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleEdit = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const close = useCallback(() => {
    setIsEditing(false);
  }, []);

  useOnClickOutside(contentRef, close);

  if (disable) return <MainText>{children}</MainText>;

  return (
    <Container ref={contentRef}>
      {isEditing ? (
        <CustomInput
          ref={inputRef}
          value={children}
          onChange={(e) => handleModify(index, field, e)}
          style={{
            width: `${getStringWidth(children as string, "18px Arial")}px`,
          }}
        />
      ) : (
        <MainText>{children}</MainText>
      )}
      <div onClick={handleToggleEdit}>
        {isEditing ? (
          <CheckIcon height={14} width={14} />
        ) : (
          <EditIcon height={14} width={14} />
        )}
      </div>
    </Container>
  );
};
