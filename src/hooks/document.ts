import { SuccessDetails, SuccessResponse } from "@/types/success.types";
import { AxiosResponse } from "axios";
import { isNil } from "lodash-es";
import { api } from "src/api";
import { categoryLabels } from "src/components/ui/DrugIdentifier/DrugIdentifierBox";
import { toSuccessDetails } from "src/utils/mappers";
import useSWR from "swr";
import { useData } from "./useData";

const fetcher = async (url: string, category: number): Promise<{ pdfURL: string, label: string }> => {
  const response: AxiosResponse<ArrayBuffer> = await api.get(url, {
    headers: {
      Accept: 'application/pdf',
    },
    responseType: 'arraybuffer',
  });

  const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

  return { pdfURL: URL.createObjectURL(pdfBlob), label: `PV ${categoryLabels[category]}` };
};

const fetcherSuccessDetails = async (url: string): Promise<SuccessDetails> => {
  const response: AxiosResponse<any> =
    await api.get<SuccessResponse>(url);

  return toSuccessDetails(response.data);
};

export const useGetSuccessDetails = (
  id: string,
  shouldExecute?: boolean
) => {
  const { data, isError, isLoading } = useData(
    `/recycle/${id}`,
    fetcherSuccessDetails,
    shouldExecute
  );

  return { data, isError, isLoading };
};

export const useGetDocumentByCategories = (id: string, categories: number[]) => {
  const urls = categories.map(
    (category) => `/recycle/process/${id}?category=${category}`
  );

  const { data, error } = useSWR(
    () => (categories.length ? urls : null),
    async () => {
      const results = await Promise.all(
        urls.map((url, index) => fetcher(url, categories[index]))
      );
      return results;
    }
  );

  return {
    data, 
    isLoading: !error && isNil(data),
    isError: !!error,
  };
};