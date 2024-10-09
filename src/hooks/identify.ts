import {
  DrugsIdentify,
  DrugsIdentifyListResponse,
} from "@/types/drugsIdentify.types";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { api } from "src/api";
import { ToastType, notify } from "src/components/ui/Toast/CustomToast";
import { toDrugsIdentify } from "src/utils/mappers";

export const identifyDrugsFromImage = async (
  data: File
): Promise<DrugsIdentify> => {
  try {
    const response: AxiosResponse<DrugsIdentifyListResponse[]> = await api.post<
      DrugsIdentifyListResponse[]
    >("/drugs/identify", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return toDrugsIdentify(response.data);
  } catch (error) {
    throw new Error("Failed to post image");
  }
};

export const useDrugsIdentify = () => {
  const [data, setData] = useState<DrugsIdentify>();
  const [loading, setLoading] = useState<boolean>(false);

  const drugsIdentify = async (image: any, callback: () => void) => {
    setLoading(true);
    try {
      const result: DrugsIdentify = await identifyDrugsFromImage(image);
      setData(result);
      callback();
    } catch (err) {
      notify("A apărut o eroare necunoscută!", ToastType.ERROR);
    } finally {
      setLoading(false);
    }
  };

  return {
    drugsIdentify,
    data: data as DrugsIdentify,
    isLoading: loading,
  };
};
