import { SearchDrug, SearchDrugResponse } from "@/types/drug.types";
import { AxiosResponse } from "axios";
import { api } from "src/api";
import { toDrugSearch } from "src/utils/mappers";

export const getDrugsRequest = async (
  query?: string,
  limit?: number
): Promise<SearchDrug[]> => {
  const response: AxiosResponse<SearchDrugResponse[]> = await api.get<
    SearchDrugResponse[]
  >("/drugs/search", {
    params: {
      ...(query && { name: query }),
      ...(limit && { limit }),
    },
  });

  return toDrugSearch(response?.data);
};

export const getSearch = async (
  name?: string,
  limit?: number
): Promise<SearchDrug[]> => {
  try {
    const response: AxiosResponse<SearchDrugResponse[]> = await api.get<
      SearchDrugResponse[]
    >(`/drugs/search?limit=${limit}${name ? `&name=${name}` : ""}`);

    return toDrugSearch(response?.data);
  } catch (error) {
    throw new Error("Failed");
  }
};
