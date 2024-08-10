import {
  useCenterDetailsQuery,
  useClosestCenterDetailsQuery,
  useCountiesCenterDetailsQuery,
} from "src/api/drug";

interface UseCenterProps {
  city?: string;
  isLocationValid: boolean;
  location: {
    latitude: number | null;
    longitude: number | null;
  };
}

export const useCenter = ({
  city,
  isLocationValid,
  location,
}: UseCenterProps) => {
  const { data: allCenters, isLoading: isLoadingAllCenters } =
    useCenterDetailsQuery("");
  const { data: nearestCenter, isLoading: isLoadingNearestCenter } =
    useClosestCenterDetailsQuery(location, {
      skip: !isLocationValid,
    });
  const { data: citySpecificCenters, isLoading: isLoadingCitySpecificCenters } =
    useCountiesCenterDetailsQuery(city, {
      skip: !city,
    });

  // TODO: make this code easy to understand
  const centersToReturn = city
    ? citySpecificCenters?.data
    : isLocationValid
    ? [nearestCenter]
    : allCenters?.data;
  const isLoading =
    isLoadingAllCenters ||
    isLoadingNearestCenter ||
    isLoadingCitySpecificCenters;

  return { centers: centersToReturn, isLoading };
};
