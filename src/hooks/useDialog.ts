import React, { useCallback, useState } from "react";
import { isUndefined } from "lodash-es";
import { Dialog, DialogProps } from "src/components/ui/Dialog/Dialog";

export interface toggleDialog {
  (isOpenOverride?: boolean): void;
}
type useDialogReturn = [
  React.FC<DialogProps>,
  DialogProps,
  toggleDialog,
  boolean,
  () => void
];
type useDialogConfig = Pick<DialogProps, "heading" | "dismissIcon" | "zIndex">;

const useDialog = (config?: useDialogConfig): useDialogReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog: toggleDialog = useCallback(
    (isOpenOverride) => {
      setIsOpen(isUndefined(isOpenOverride) ? !isOpen : isOpenOverride);
    },
    [isOpen]
  );

  const closeDialog = useCallback(() => {
    toggleDialog(false);
  }, [toggleDialog]);

  return [
    Dialog,
    {
      onClose: closeDialog,
      open: isOpen,
      ...config,
    },
    toggleDialog,
    isOpen,
    closeDialog,
  ];
};

export default useDialog;
