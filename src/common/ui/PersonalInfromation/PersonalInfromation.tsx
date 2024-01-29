import { PersonalInfo } from '@/types/collect';
import { PRIVACY_BOX } from 'common/constants/steps';
import { useCollectState } from 'common/hooks/useCollectState';
import { Input } from 'common/ui/Input/Input';
import { PrivacyBox } from 'common/ui/PrivacyBox/PrivacyBox';
import { useCallback, useState } from 'react';
import { CNPInformation } from '../CNPInformation/CNPInformation';
import { ValidationMessage } from '../ValidationMessage/ValidationMessage';
import {
  Container,
  FormWrapper,
  InputWrapper,
} from './PersonalInfromation.styled';
import {
  FormFieldState,
  PersonalFormState,
  personalFormInitialState,
} from './PersonalInfromation.type';
import { usePersonalFormValidation } from './personalFormValidation';

interface PersonalInfromationProps {
  isPsycholeptic: boolean;
}

export const PersonalInfromation: React.FC<PersonalInfromationProps> = ({
  isPsycholeptic,
}) => {
  const { personalDetails, setPersonalDetails } = useCollectState();
  const validations = usePersonalFormValidation(personalDetails);

  const [formState, setFormState] = useState<PersonalFormState>(
    personalFormInitialState
  );

  const isFieldTouched = useCallback(
    (fieldName: keyof PersonalInfo) =>
      formState[fieldName] !== FormFieldState.pristine,
    [formState]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPersonalDetails(name, value);
    },
    [setPersonalDetails]
  );

  const handleTouch = useCallback(
    (event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      event.preventDefault();
      const { name } = event.target;
      setFormState((oldState) => {
        if (oldState[name as keyof PersonalInfo] !== FormFieldState.pristine) {
          return oldState;
        }
        return { ...oldState, [name]: FormFieldState.dirty };
      });
    },
    []
  );

  return (
    <Container>
      <PrivacyBox description={PRIVACY_BOX.DESCRIPTION_STEP_1} />
      <FormWrapper>
        <InputWrapper>
          <Input
            name="firstName"
            label="Nume *"
            valid={
              !isFieldTouched('firstName') || validations.firstName.isValid
            }
            value={personalDetails?.firstName}
            onChange={handleInputChange}
            onBlur={handleTouch}
            placeholder="EX: Ion"
          />
          <ValidationMessage
            show={isFieldTouched('firstName') && !validations.firstName.isValid}
          >
            {validations.firstName.errorMessage}
          </ValidationMessage>
        </InputWrapper>
        <InputWrapper>
          <Input
            name="lastName"
            label="Prenume *"
            placeholder="EX: Popescu"
            valid={!isFieldTouched('lastName') || validations.lastName.isValid}
            value={personalDetails?.lastName}
            onChange={handleInputChange}
            onBlur={handleTouch}
          />
          <ValidationMessage
            show={isFieldTouched('lastName') && !validations.lastName.isValid}
          >
            {validations.lastName.errorMessage}
          </ValidationMessage>
        </InputWrapper>
        {isPsycholeptic && (
          <>
            <InputWrapper>
              <Input
                type="number"
                name="cnp"
                label="CNP (Codul Numeric Personal) *"
                placeholder="EX: 1990106330211"
                valid={!isFieldTouched('cnp') || validations.cnp.isValid}
                value={personalDetails?.cnp}
                onChange={handleInputChange}
                onBlur={handleTouch}
              />
              <CNPInformation />
              <ValidationMessage
                show={isFieldTouched('cnp') && !validations.cnp.isValid}
              >
                {validations.cnp.errorMessage}
              </ValidationMessage>
            </InputWrapper>
            <InputWrapper>
              <Input
                name="address"
                label="Adresa de domiciliu *"
                placeholder="EX: Strada Victoriei Nr.16 Bloc F2 Scara B"
                valid={
                  !isFieldTouched('address') || validations.address.isValid
                }
                value={personalDetails?.address}
                onChange={handleInputChange}
                onBlur={handleTouch}
              />
              <ValidationMessage
                show={isFieldTouched('address') && !validations.address.isValid}
              >
                {validations.address.errorMessage}
              </ValidationMessage>
            </InputWrapper>
          </>
        )}
        <InputWrapper>
          <Input
            type="email"
            name="email"
            label="Adresa de e-mail (optional)"
            placeholder="EX: Doe"
            valid={!isFieldTouched('email') || validations.email.isValid}
            value={personalDetails?.email}
            onChange={handleInputChange}
            onBlur={handleTouch}
          />
          <ValidationMessage
            show={isFieldTouched('email') && !validations.email.isValid}
          >
            {validations.email.errorMessage}
          </ValidationMessage>
        </InputWrapper>
      </FormWrapper>
    </Container>
  );
};
