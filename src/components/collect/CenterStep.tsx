import { CenterDetails } from "@/types/drug.types";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback, useContext, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useCenterDetailsQuery } from "src/api/drug";
import { useCurrentLocation } from "src/hooks/useCurrentLocation";
import { MultipleFormContext } from "src/hooks/useMultipleForm";
import { Button } from "../ui/Button/Button";
import { CenterCard } from "../ui/CenterCard/CenterCard";
import { Dropdown } from "../ui/Dropdown";
import { ToastType, notify } from "../ui/Toast/CustomToast";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import { Container } from "./CenterStep.styled";
import { ButtonContainer } from "./Collect.styled";

export const CenterStep = () => {
  const [city, setCity] = useState<string>(JUDETE_ROMANIA[0]);

  const { nextStep, prevStep } = useContext(MultipleFormContext);
  const { location, isLoading } = useCurrentLocation();
  const { data } = useCenterDetailsQuery("");

  console.log("location", isLoading, location);

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useFormContext();

  const watchedCenter = useWatch({
    control,
    name: "center",
  });

  const handleChangeCities = useCallback((city: string) => {
    setCity(city);
  }, []);

  const onSubmit = useCallback(() => {
    if (!watchedCenter) {
      notify(
        "Te rugăm să selectezi un centru de colectare înainte de a continua.",
        ToastType.ERROR
      );
    } else {
      nextStep();
    }
  }, [nextStep, watchedCenter]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Dropdown
        name="pack"
        placeholder="EX: Suceava"
        label="Selectează județul *"
        selectedOptions={city}
        options={JUDETE_ROMANIA}
        callbackOnChange={handleChangeCities}
      />
      {data?.map((item: CenterDetails) => {
        return (
          <CenterCard
            key={item?.id}
            name={item?.name}
            location={item?.location}
            street={item?.street}
            schedule={item?.schedule}
            handleSelect={() => setValue("center", item.id)}
            isActive={watchedCenter === item?.id}
          />
        );
      })}
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
      <>{JSON.stringify(location)}</>
    </Container>
  );
};

const JUDETE_ROMANIA = [
  "Alba",
  "Arad",
  "Argeș",
  "Bacău",
  "Bihor",
  "Bistrița-Năsăud",
  "Botoșani",
  "Brașov",
  "Brăila",
  "Buzău",
  "Caraș-Severin",
  "Călărași",
  "Cluj",
  "Constanța",
  "Covasna",
  "Dâmbovița",
  "Dolj",
  "Galați",
  "Giurgiu",
  "Gorj",
  "Harghita",
  "Hunedoara",
  "Ialomița",
  "Iași",
  "Ilfov",
  "Maramureș",
  "Mehedinți",
  "Mureș",
  "Neamț",
  "Olt",
  "Prahova",
  "Satu Mare",
  "Sălaj",
  "Sibiu",
  "Suceava",
  "Teleorman",
  "Timiș",
  "Tulcea",
  "Vaslui",
  "Vâlcea",
  "Vrancea",
  "Municipiul București",
];
