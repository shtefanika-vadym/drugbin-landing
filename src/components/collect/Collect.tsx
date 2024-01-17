import { DrugProps, PersonalDetailsProps } from '@/types/collect';
import { useRecycleDrugMutation } from 'common/api/recycleApi';
import { STEP_1, STEP_2, STEP_3, STEP_4 } from 'common/constants/steps';
import { DrugInformation } from 'common/ui/DrugInformation/DrugInformation';
import { FinishCollect } from 'common/ui/FinishCollect';
import { LocationInformation } from 'common/ui/LocationInformation/LocationInformation';
import { MultiStep } from 'common/ui/MultiStep';
import { PersonalInfromation } from 'common/ui/PersonalInfromation/PersonalInfromation';
import { Stepper } from 'common/ui/Stepper';
import { VerbalProcess } from 'common/ui/VerbalProcess';
import { toCollectDrugs } from 'common/utils/mappers';
import { isCNP, isStringNotEmpty } from 'common/utils/stringUtils';
import { gt, isNumber } from 'lodash-es';
import { useCallback, useMemo, useState } from 'react';
import { initialDrug, initialPersonalDetails } from './Collect.config';
import { Content } from './Collect.styled';

export const Collect = () => {
  const [recycleDrug, { data, isLoading }] = useRecycleDrugMutation();
  const [personalDetails, setPersonalDetails] = useState<PersonalDetailsProps>(
    initialPersonalDetails
  );
  const [drugList, setDrugList] = useState<DrugProps[]>([{ ...initialDrug }]);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [hospitalId, setHospitalId] = useState<number>(null);

  const isFirstNameValid = isStringNotEmpty(personalDetails?.firstName);
  const isLastNameValid = isStringNotEmpty(personalDetails?.lastName);
  const isHospitalValid = isNumber(hospitalId);
  const isLastDrugValid = useMemo(() => {
    const lastDrugIndex = drugList?.length - 1;
    return (
      drugList[lastDrugIndex]?.drugName?.name !== '' &&
      gt(drugList[lastDrugIndex]?.quantity, 0)
    );
  }, [drugList]);
  const isPsycholeptic = useMemo(
    () => drugList.some((obj) => obj.drugName.isPsycholeptic),
    [drugList]
  );
  const isCNPValid = isPsycholeptic ? isCNP(personalDetails.cnp) : true;
  const isAddressValid = isPsycholeptic
    ? isStringNotEmpty(personalDetails?.address)
    : true;

  const handleNextStep = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
  }, []);

  const handlePrevStep = useCallback(() => {
    setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
  }, []);

  const handleFinishCollect = useCallback(() => {
    recycleDrug(toCollectDrugs(personalDetails, drugList, hospitalId));
    handleNextStep();
  }, [drugList, handleNextStep, hospitalId, personalDetails, recycleDrug]);

  const collectStep = useMemo(() => {
    switch (activeStep) {
      case 1:
        return {
          title: STEP_1.TITLE,
          description: STEP_1.DESCRIPTION,
          component: () => (
            <DrugInformation
              drugList={drugList}
              setDrugList={setDrugList}
              isLastDrugValid={isLastDrugValid}
            />
          ),
          onNext: handleNextStep,
          nextDisabled: !isLastDrugValid,
          backDisabled: true,
        };
      case 2:
        return {
          title: STEP_2.TITLE,
          description: STEP_2.DESCRIPTION,
          component: () => (
            <PersonalInfromation
              isPsycholeptic={isPsycholeptic}
              personalDetails={personalDetails}
              setPersonalDetails={setPersonalDetails}
            />
          ),
          onNext: handleNextStep,
          nextDisabled:
            !isLastNameValid ||
            !isFirstNameValid ||
            !isCNPValid ||
            !isAddressValid,
        };
      case 3:
        return {
          title: STEP_3.TITLE,
          description: STEP_3.DESCRIPTION,
          component: () => (
            <LocationInformation
              hospitalId={hospitalId}
              setHospitalId={setHospitalId}
            />
          ),
          onNext: handleNextStep,
          nextDisabled: !isHospitalValid,
        };
      case 4:
        return {
          title: STEP_4.TITLE,
          component: () => <VerbalProcess />,
          onNext: handleFinishCollect,
        };
      case 5:
        return {
          component: () => <FinishCollect data={data} isLoading={isLoading} />,
        };
    }
  }, [
    activeStep,
    data,
    drugList,
    handleFinishCollect,
    handleNextStep,
    hospitalId,
    isAddressValid,
    isCNPValid,
    isFirstNameValid,
    isHospitalValid,
    isLastDrugValid,
    isLastNameValid,
    isLoading,
    isPsycholeptic,
    personalDetails,
  ]);

  return (
    <Content>
      {!gt(activeStep, 3) && <MultiStep activeStep={activeStep} />}
      <Stepper
        title={collectStep?.title}
        description={collectStep?.description}
        onNext={collectStep?.onNext}
        onBack={handlePrevStep}
        nextDisabled={collectStep?.nextDisabled}
        backDisabled={collectStep?.backDisabled}
      >
        {collectStep?.component && collectStep.component()}
      </Stepper>
    </Content>
  );
};
