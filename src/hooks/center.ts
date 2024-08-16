import { CenterResponse, CenterType } from "@/types/center.types";
import { AxiosResponse } from "axios";
import { orderBy } from "lodash-es";
import { api } from "src/api";
import { PositionType } from "./useCurrentLocation";
import { useData } from "./useData";

const fetchAllCenter = async (url: string): Promise<CenterResponse> => {
  const response: AxiosResponse<CenterResponse> =
    await api.get<CenterResponse>(url);

  return response.data;
};

const fetchClosestCenter = async (url: string): Promise<CenterType> => {
  const response: AxiosResponse<CenterType> = await api.get<CenterType>(
    url
  );

  return response.data;
};

const fetchCenterByCity = async (url: string): Promise<CenterResponse> => {
  const response: AxiosResponse<CenterResponse> =
    await api.get<CenterResponse>(url);

  return response.data;
};

const fetchCities = async (url: string): Promise<string[]> => {
  return await api
    .get<{ data: string }>(url)
    .then((response) => orderBy(response.data, [], ["asc"]));
};

export const useGetAllCenter = () => {
  const { data, isError, isLoading } = useData(
    "/hospitals?page=1&limit=20",
    fetchAllCenter
  );

  return { data, isError, isLoading };
};

export const useGetClosestCenter = (
  location: PositionType,
  shouldExecute?: boolean
) => {
  const { data, isError, isLoading } = useData(
    `/hospitals/location?lat=${location.latitude}&lng=${location.longitude}`,
    fetchClosestCenter,
    shouldExecute
  );

  return { data, isError, isLoading };
};

export const useGetCenterByCity = (city: string, shouldExecute?: boolean) => {
  const { data, isError, isLoading } = useData(
    `/hospitals?county=${city}&page=1&limit=20`,
    fetchCenterByCity,
    shouldExecute
  );

  return { data, isError, isLoading };
};

export const useGetCities = () => {
  const { data, isError, isLoading } = useData(
    `/hospitals/counties`,
    fetchCities
  );

  return { data, isError, isLoading };
};
