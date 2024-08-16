import { isNil } from "lodash-es";
import {
  useGetAllCenter,
  useGetCenterByCity,
  useGetClosestCenter,
} from "./center";
import { PositionType } from "./useCurrentLocation";

interface useCenterProps {
  city: string;
  location: PositionType;
}

// TODO: Refactor
export const useCenter = ({ city, location }: useCenterProps) => {
  const shouldExecuteClosestCenter =
    !isNil(location?.latitude) && !isNil(location?.longitude);
  const shouldExecuteCenterByCity = !!city;

  const { data: allCenter, isLoading: isLoadingAllCenters } = useGetAllCenter();
  const { data: closestCenter, isLoading: isLoadingNearestCenter } =
    useGetClosestCenter(location, shouldExecuteClosestCenter);
  const { data: centerByCity, isLoading: isLoadingCitySpecificCenters } =
    useGetCenterByCity(city, shouldExecuteCenterByCity);

  const centersToReturn = city
    ? centerByCity?.data
    : shouldExecuteClosestCenter
    ? [closestCenter]
    : allCenter?.data;

  const isLoading =
    isLoadingAllCenters ||
    isLoadingNearestCenter ||
    isLoadingCitySpecificCenters;

  return { centers: centersToReturn ?? [], isLoading };
};
