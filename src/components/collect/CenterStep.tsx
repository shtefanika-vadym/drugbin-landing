import { ErrorMessage } from "@hookform/error-message";
import { isEmpty } from "lodash-es";
import { useCallback, useContext, useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Select from "react-select";
import { Button } from "src/components/ui/Button/Button";
import { CenterCard } from "src/components/ui/CenterCard/CenterCard";
import { Empty } from "src/components/ui/Empty";
import { Loader } from "src/components/ui/Loader";
import { ToastType, notify } from "src/components/ui/Toast/CustomToast";
import { ValidationMessage } from "src/components/ui/ValidationMessage/ValidationMessage";
import { useGetCities } from "src/hooks/center";
import { useCenter } from "src/hooks/useCenter";
import { MultipleFormContext } from "src/hooks/useMultipleForm";
import { Container, DropdownWrapper } from "./CenterStep.styled";
import { CenterStepSkeleton } from "./CenterStepSkeleton";
import { ButtonContainer } from "./Collect.styled";
import { selectDrugStyles } from "./SelectDrug.styled";

export const CenterStep = () => {
  const {
    nextStep,
    prevStep,
    verifyLocationAccess,
    location,
    isLocationLoading,
  } = useContext(MultipleFormContext);
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useFormContext();

  const currentCenter = useWatch({
    control,
    name: "center",
  });

  const { data: cities } = useGetCities();
  const { centers, isLoading } = useCenter({
    city: currentCenter?.centerCity,
    location,
  });

  const handleChangeCenter = useCallback(
    (centerID: number | null) => {
      setValue("center.centerID", centerID);
    },
    [setValue]
  );

  const handleCurrentLocation = async () => {
    await verifyLocationAccess();
    setValue("center.centerCity", null);
    handleChangeCenter(null);
  };

  const handleChangeCities = (newValue: any) => {
    setValue("center.centerCity", newValue.value);
    handleChangeCenter(null);
  };

  const onSubmit = useCallback(() => {
    if (!currentCenter.centerID) {
      notify(
        "Te rugăm să selectezi un centru de colectare înainte de a continua.",
        ToastType.ERROR
      );
    } else {
      nextStep();
    }
  }, [nextStep, currentCenter.centerID]);

  const cityOptions = useMemo(() => {
    return cities?.map((city) => ({
      label: city,
      value: city,
    }));
  }, [cities]);

  const cityValue = currentCenter?.centerCity
    ? {
        label: currentCenter?.centerCity,
        value: currentCenter?.centerCity,
      }
    : null;

  const renderCenterCard = () => {
    if (isLoading || isLocationLoading) {
      return <CenterStepSkeleton />;
    }

    if (isEmpty(centers)) return <Empty />;

    return (
      <>
        {centers.map((item) => {
          return (
            <CenterCard
              isActive={currentCenter.centerID === item?.id}
              fullAddress={item?.fullAddress as string}
              id={item?.id as number}
              name={item?.name as string}
              handleSelect={handleChangeCenter}
            />
          );
        })}
      </>
    );
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <DropdownWrapper>
        <Select
          isLoading={isLoading}
          placeholder="Alege un judet"
          options={cityOptions}
          value={cityValue}
          onChange={handleChangeCities}
          styles={selectDrugStyles}
          defaultValue={cityValue}
        />
      </DropdownWrapper>
      <Button
        variant="secondary"
        type="button"
        disabled={isLocationLoading}
        onClick={handleCurrentLocation}
      >
        <Loader isLoading={isLocationLoading} size={14} justify="center">
          Găsește locația cea mai apropiată
        </Loader>
      </Button>
      {renderCenterCard()}
      <ErrorMessage
        errors={errors}
        name={"center"}
        render={({ message }) => (
          <ValidationMessage>{message}</ValidationMessage>
        )}
      />
      <ButtonContainer>
        <Button variant="secondary" onClick={prevStep}>
          Înapoi
        </Button>
        <Button type="submit">Selectează</Button>
      </ButtonContainer>
    </Container>
  );
};
