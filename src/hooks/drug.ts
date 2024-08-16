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

// const fetchDrugs = async (url: string): Promise<any> => {
//   const response: AxiosResponse<any> = await api.get<any>(url);

//   return toDrugSearch(response.data);
// };

// export const useGetDrugs = (name?: string) => {
//   const queryParams = new URLSearchParams({
//     limit: "10",
//     ...(name && { name }),
//   }).toString();

//   const { data, isError, isLoading } = useData(
//     `/drugs/search?${queryParams}`,
//     fetchDrugs
//   );

//   return { data, isError, isLoading };
// };
