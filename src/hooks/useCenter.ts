import {
  useCenterDetailsQuery,
  useClosestCenterDetailsQuery,
  useCountiesCenterDetailsQuery,
} from "src/api/drug";
import { useCurrentLocation } from "./useCurrentLocation";

export const useCenter = (city?: string) => {
  const { location, isLocationValid } = useCurrentLocation();

  const { data: allCenter, isLoading: isLoadingAllCenter } =
    useCenterDetailsQuery("");
  const { data: closestCenter, isLoading: isLoadingClosestCenter } =
    useClosestCenterDetailsQuery(location, {
      skip: !isLocationValid,
    });
  const { data: cityCenters, isLoading: isLoadingCityCenters } =
    useCountiesCenterDetailsQuery(city, {
      skip: !city,
    });

  const centers = closestCenter ?? cityCenters ?? allCenter;
  const isLoading =
    isLoadingAllCenter || isLoadingClosestCenter || isLoadingCityCenters;

  return { centers, isLoading };
};
