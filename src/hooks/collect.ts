import { CollectData, CollectPayload, CollectResponse } from "@/types/collect.types";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "src/api";
import { ToastType, notify } from "src/components/ui/Toast/CustomToast";
import { toCollectDrugs } from "src/utils/mappers";

export const postCollect = async (data: CollectData): Promise<string> => {
  try {
    const response: AxiosResponse<CollectResponse> =
      await api.post<CollectResponse>("/recycle", data);

    return `/success/collect/${response.data.recycleId}`;
  } catch (error) {
    throw new Error("Failed");
  }
};

export const useCollectData = () => {
  const navigate = useNavigate();

  const postCollectData = async (product: CollectPayload) => {
    const data = toCollectDrugs(product);

    try {
      const result = await postCollect(data);
      navigate(result);
    } catch (error) {
      notify("A apărut o eroare necunoscută.", ToastType.ERROR);
    }
  };

  return {
    postCollectData,
  };
};
