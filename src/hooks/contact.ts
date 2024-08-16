import { AxiosResponse } from "axios";
import { useState } from "react";
import { api } from "src/api";
import { ToastType, notify } from "src/components/ui/Toast/CustomToast";

interface ContactProps {
  email: string;
  message: string;
  name: string;
}

export const postContact = async (data: ContactProps): Promise<string> => {
  try {
    const response: AxiosResponse<string> = await api.post<string>(
      "/contact-us",
      data
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed");
  }
};

export const useContact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessagess = async (data: ContactProps, callback: () => void) => {
    setIsLoading(true);
    try {
      await postContact(data);
      notify(
        "Mulțumim pentru mesaj! Vom reveni în curând. Echipa DrugBin.",
        ToastType.SUCCES
      );
      callback();
    } catch (err) {
      notify(
        "Oops! Ceva nu a mers conform planului. Te rog să încerci din nou mai târziu.",
        ToastType.ERROR
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendMessagess,
    isLoading,
  };
};
