import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import { useOnClickOutside, useScrollLock } from "usehooks-ts";
import { CloseIcon } from "../Icon";
import { Text } from "../Text/Text";
import {
  ButtonWrapper,
  CloseButton,
  DialogContainer,
  DialogContainerWithMaxWidth,
  DialogContent,
  DialogForm,
} from "./Dialog.styled";

export type DialogProps = {
  onClose: () => void;
  onCloseRight?: () => void;
  children?: React.ReactNode;
  open: boolean;
  heading?: React.ReactNode | string;
  dismissIcon?: ReactNode;
  closeIcon?: ReactNode;
  isMaxWidthFixed?: boolean;
  preventClosingOnClickOutside?: boolean;
  zIndex?: number;
  hasRightCloseIcon?: boolean;
};

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  heading,
  dismissIcon = <CloseIcon />,
  closeIcon = <CloseIcon />,
  isMaxWidthFixed = false,
  preventClosingOnClickOutside = true,
  zIndex,
  hasRightCloseIcon = true,
}) => {
  const contentRef = useRef(null);

  const { lock, unlock, isLocked } = useScrollLock({
    autoLock: false,
    lockTarget: "root",
  });

  const toggleLocked = () => {
    isLocked ? unlock() : lock();
  };

  const handleCloseIfOpen = useCallback(() => {
    if (open) {
      onClose();
      unlock();
    }
  }, [open, onClose, unlock]);

  const DialogWrapper = isMaxWidthFixed
    ? DialogContainerWithMaxWidth
    : DialogContainer;

  useOnClickOutside(contentRef, handleCloseIfOpen);

  useEffect(() => {
    if (open) {
      toggleLocked();
    } else {
      unlock();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <DialogWrapper zIndex={zIndex}>
      <DialogContent ref={contentRef}>
        <DialogForm>
          <ButtonWrapper>
            <CloseButton variant="ghost" size="XS" onClick={handleCloseIfOpen}>
              {closeIcon}
            </CloseButton>
          </ButtonWrapper>
          {heading && (
            <Text variant="bodyM" element="h1">
              {heading}
            </Text>
          )}
        </DialogForm>
        {children}
      </DialogContent>
    </DialogWrapper>
  );
};
