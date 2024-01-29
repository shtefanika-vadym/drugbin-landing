import { LocationProps } from '@/types/Location';
import { useHospitalsDetailsQuery } from 'common/api/recycleApi';
import { useCollectState } from 'common/hooks/useCollectState';
import { Dropdown } from '../Dropdown';
import { Loader } from '../Loader';
import { LocationCard } from '../LocationCard';
import { Content, LocationWrapper } from './LocationInformation.styled';

export const LocationInformation = () => {
  const { data, isLoading } = useHospitalsDetailsQuery();
  const { hospitalId, setHospitalId } = useCollectState();

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
                handleSelect={() => setHospitalId(item?.id)}
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
