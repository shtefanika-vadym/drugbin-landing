import { PRIVACY_BOX } from 'common/constants/steps';
import { SET_DATA } from 'common/slices/recycleSlice';
import { useAppDispatch, useAppSelector } from 'common/store/hooks';
import { Button } from 'common/ui/Button/Button';
import { Input } from 'common/ui/Input/Input';
import { PrivacyBox } from 'common/ui/PrivacyBox/PrivacyBox';
import { isEmail, isStringNotEmpty } from 'common/utils/stringUtils';
import type { ChangeEvent, FC, FormEvent, MouseEvent } from 'react';
import { useCallback, useState } from 'react';
import {
  ButtonWrapper,
  Error,
  FormWrapper,
  InputWrapper,
  PersonalInfromationWrapper,
} from './PersonalInfromation.styled';

interface PersonalInfromationProps {
  setActiveStep: (step: (prevActiveStep: number) => number) => void;
}

interface ErrorProps {
  firstName: string;
  lastName: string;
  email: string;
}

export const PersonalInfromation: FC<PersonalInfromationProps> = ({
  setActiveStep,
}) => {
  const dispatch = useAppDispatch();
  const { collectData } = useAppSelector((state) => state.recycleReducer);
  const { firstName, lastName, email } = collectData;

  const [errors, setErrors] = useState<ErrorProps>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = useCallback(
    (props: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = props.target;
      dispatch(SET_DATA({ name: name, value: value }));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (
      event: FormEvent | MouseEvent<HTMLButtonElement, MouseEvent> | undefined
    ) => {
      event?.preventDefault();
      setErrors((prevErrors: ErrorProps) => ({
        ...prevErrors,
        firstName: firstName === '' ? 'Please fill in your first name' : '',
        lastName: lastName === '' ? 'Please fill in your last name' : '',
        email:
          email === null || email === ''
            ? ''
            : isEmail(email)
            ? ''
            : 'Email is not valid.',
      }));

      const isFirstNameValid = isStringNotEmpty(firstName);
      const isLastNameValid = isStringNotEmpty(lastName);
      const isEmailValide =
        email === null || email === '' ? true : isEmail(email) ? true : false;

      if (isFirstNameValid && isLastNameValid && isEmailValide) {
        setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
      }
    },
    [firstName, lastName, email, setActiveStep]
  );

  const handleGoBack = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  }, [setActiveStep]);

  return (
    <PersonalInfromationWrapper>
      <PrivacyBox description={PRIVACY_BOX.DESCRIPTION_STEP_1} />
      <FormWrapper>
        <InputWrapper>
          <Input
            name="firstName"
            label="Nume *"
            value={firstName}
            onChange={handleChange}
            placeholder="EX: John"
          />
          {errors.firstName && <Error>{errors.firstName}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input
            name="lastName"
            label="Prenume *"
            value={lastName}
            onChange={handleChange}
            placeholder="EX: Doe"
          />
          {errors.lastName && <Error>{errors.lastName}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email"
            name="email"
            label="Adresa de e-mail (optional)"
            value={email}
            onChange={handleChange}
            placeholder="EX: Doe"
          />
          {errors.email && <Error>{errors.email}</Error>}
        </InputWrapper>
      </FormWrapper>
      <ButtonWrapper>
        <Button variant="empty" onClick={handleGoBack}>
          Înapoi
        </Button>
        <Button onClick={handleSubmit}>Continuă</Button>
      </ButtonWrapper>
    </PersonalInfromationWrapper>
  );
};
