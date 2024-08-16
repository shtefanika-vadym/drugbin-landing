import { AxiosResponse } from "axios";
import { api } from "src/api";
import { useData } from "./useData";
import { DocumentType } from "@/types/document.types";

const fetcher = async (url: string): Promise<string> => {
  const response: AxiosResponse<ArrayBuffer> = await api.get(url, {
    headers: {
      Accept: "application/pdf",
    },
    responseType: "arraybuffer",
  });

  const pdfBlob = new Blob([response.data], { type: "application/pdf" });

  return URL.createObjectURL(pdfBlob);
};

export const useGetDocument = (id: string, type: DocumentType) => {
  const { data, isLoading, isError } = useData(
    `/recycle/process/${id}?type=${type}`,
    fetcher
  );

  return { data, isLoading, isError };
};
