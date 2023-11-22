import { LocationProps } from '@/types/Location';
import { usePharmasDetailsQuery } from 'common/api/recycleApi';
import { useCallback } from 'react';
import { Dropdown } from '../Dropdown';
import { Loader } from '../Loader';
import { LocationCard } from '../LocationCard';
import { Content, LocationWrapper } from './LocationInformation.styled';

interface LocationInformationProps {
  hospitalId: number;
  setHospitalId: (id: number) => void;
}

export const LocationInformation: React.FC<LocationInformationProps> = ({
  hospitalId,
  setHospitalId,
}) => {
  const { data, isLoading } = usePharmasDetailsQuery();

  const handleSelectLocation = useCallback(
    (id: number) => {
      setHospitalId(id);
    },
    [setHospitalId]
  );

  return (
    <Loader isLoading={isLoading} justify="center">
      <Content>
        <Dropdown
          name="pack"
          placeholder="EX: Suceava"
          label="Selectează județul *"
          selectedOptions={''}
          options={DROPDOWN_VALUES}
        />
        <LocationWrapper>
          {data?.map((item: LocationProps) => {
            return (
              <LocationCard
                key={item?.id}
                name={item?.name}
                handleSelect={() => handleSelectLocation(item?.id)}
                isActive={hospitalId === item?.id}
              />
            );
          })}
        </LocationWrapper>
      </Content>
    </Loader>
  );
};

const DROPDOWN_VALUES = ['Suceava', 'Iasi', 'Bucuresti'];
