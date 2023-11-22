import { PersonalDetailsProps } from '@/types/collect';
import { PRIVACY_BOX } from 'common/constants/steps';
import { Input } from 'common/ui/Input/Input';
import { PrivacyBox } from 'common/ui/PrivacyBox/PrivacyBox';
import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';
import { CNPInformation } from '../CNPInformation/CNPInformation';
import {
  Error,
  FormWrapper,
  InputWrapper,
  PersonalInfromationWrapper,
} from './PersonalInfromation.styled';

interface ErrorProps {
  firstName: string;
  lastName: string;
  email: string;
}

interface PersonalInfromationProps {
  isPsycholeptic: boolean;
  personalDetails: PersonalDetailsProps;
  setPersonalDetails: (details: PersonalDetailsProps) => void;
}

export const PersonalInfromation: React.FC<PersonalInfromationProps> = ({
  isPsycholeptic,
  personalDetails,
  setPersonalDetails,
}) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPersonalDetails({
        ...personalDetails,
        [name]: value,
      });
    },
    [personalDetails, setPersonalDetails]
  );

  // OLD
  const [errors] = useState<ErrorProps>({
    firstName: '',
    lastName: '',
    email: '',
  });

  return (
    <PersonalInfromationWrapper>
      <PrivacyBox description={PRIVACY_BOX.DESCRIPTION_STEP_1} />
      <FormWrapper>
        <InputWrapper>
          <Input
            name="firstName"
            label="Nume *"
            value={personalDetails?.firstName}
            onChange={handleInputChange}
            placeholder="EX: Ion"
          />
          {errors.firstName && <Error>{errors.firstName}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input
            name="lastName"
            label="Prenume *"
            value={personalDetails?.lastName}
            onChange={handleInputChange}
            placeholder="EX: Popescu"
          />
          {errors.lastName && <Error>{errors.lastName}</Error>}
        </InputWrapper>
        {isPsycholeptic && (
          <>
            <InputWrapper>
              <Input
                name="cnp"
                label="CNP (Codul Numeric Personal) *"
                value={personalDetails?.cnp}
                onChange={handleInputChange}
                placeholder="EX: 1990106330211"
                type='number'
              />
              <CNPInformation />
            </InputWrapper>
            <InputWrapper>
              <Input
                name="address"
                label="Adresa de domiciliu *"
                value={personalDetails?.address}
                onChange={handleInputChange}
                placeholder="EX: Strada Victoriei Nr.16 Bloc F2 Scara B"
              />
            </InputWrapper>
          </>
        )}
        <InputWrapper>
          <Input
            type="email"
            name="email"
            label="Adresa de e-mail (optional)"
            value={personalDetails?.email}
            onChange={handleInputChange}
            placeholder="EX: Doe"
          />
          {errors.email && <Error>{errors.email}</Error>}
        </InputWrapper>
      </FormWrapper>
    </PersonalInfromationWrapper>
  );
};
