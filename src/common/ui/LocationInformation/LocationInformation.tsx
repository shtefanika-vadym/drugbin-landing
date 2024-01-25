import { LocationProps } from '@/types/Location';
import { useHospitalsDetailsQuery } from 'common/api/recycleApi';
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
  const { data, isLoading } = useHospitalsDetailsQuery();

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
          selectedOptions={DROPDOWN_VALUES[0]}
          options={DROPDOWN_VALUES}
          callbackOnChange={() => console.log('Suceava')}
        />
        <LocationWrapper>
          {data?.map((item: LocationProps) => {
            return (
              <LocationCard
                key={item?.id}
                name={item?.name}
                location={item?.location}
                street={item?.street}
                schedule={item?.schedule}
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

const DROPDOWN_VALUES = ['Suceava'];
