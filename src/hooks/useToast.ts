import { useState } from "react";

const useToast = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [disableButtons, setDisableButtons] = useState(false);

  const notify = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setDisableButtons(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 5000);
  };

  return {
    notify,
    toastVisible,
    toastMessage,
    disableButtons,
    setToastVisible,
    setToastMessage,
  };
};

export default useToast;
