import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useContact } from "src/hooks/contact";
import { Layout } from "src/layout/Layout/Layout";
import {
  WDS_COLOR_NEUTRAL_WHITE,
  WDS_COLOR_PRIMARY_50,
} from "src/styles/tokens";
import * as Yup from "yup";
import { Button } from "../ui/Button/Button";
import { Checkbox } from "../ui/CheckboxInput/Checkbox";
import { EmailIcon, LocationIcon, PhoneIcon } from "../ui/Icon";
import { Input } from "../ui/Input/Input";
import { Text } from "../ui/Text/Text";
import { Textarea } from "../ui/Textarea/Textarea";
import { ValidationMessage } from "../ui/ValidationMessage/ValidationMessage";
import {
  Container,
  Data,
  Details,
  InputContainer,
  LeftSection,
  RightSection,
} from "./Contact.styled";

type ContactProps = {
  name: string;
  email: string;
  message: string;
  checkbox: boolean;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Numele este un câmp obligatoriu."),
  email: Yup.string()
    .email("Adresa de email invalida")
    .required("Email este un câmp obligatoriu."),
  message: Yup.string().required("Mesaj este un câmp obligatoriu."),
  checkbox: Yup.boolean()
    .oneOf(
      [true],
      "Pentru a trimite mesajul, este necesar să fiți de acord cu Termenii și Condițiile."
    )
    .required(),
});

export const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  const { sendMessagess } = useContact();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactProps>({
    resolver: yupResolver(validationSchema) as Resolver<ContactProps>,
  });

  const onSubmit: SubmitHandler<ContactProps> = async (data) => {
    const { name, email, message } = data;
    await sendMessagess({ name, email, message }, reset);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
    setValue("checkbox", checked);
  };

  return (
    <Layout fullWidth color={WDS_COLOR_NEUTRAL_WHITE}>
      <Container>
        <LeftSection>
          <Text variant="titleL" element="h1">
            Contactează-ne
          </Text>
          <Details>
            <Data>
              <EmailIcon />
              <Text element="p">drugbin.solution@gmail.com</Text>
            </Data>
            <Data>
              <PhoneIcon />
              <Text element="p">+40 755 493 184</Text>
            </Data>
            <Data>
              <LocationIcon />
              <Text element="p">Suceava, Romania</Text>
            </Data>
          </Details>
        </LeftSection>
        <RightSection onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              label="Nume și prenume *"
              placeholder="EX: Ion"
              {...register("name")}
            />
            <ErrorMessage
              errors={errors}
              name={"name"}
              render={({ message }) => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
          </InputContainer>
          <InputContainer>
            <Input
              label="Email *"
              placeholder="EX: johndoe@gmail.com"
              {...register("email")}
            />
            <ErrorMessage
              errors={errors}
              name={"email"}
              render={({ message }) => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
          </InputContainer>
          <InputContainer>
            <Textarea
              label="Mesaj *"
              placeholder="Introduceți mesajul dvs. aici..."
              {...register("message")}
            />
            <ErrorMessage
              errors={errors}
              name={"message"}
              render={({ message }) => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
          </InputContainer>
          <InputContainer>
            <Checkbox
              {...register("checkbox", {})}
              checked={isChecked}
              onChange={handleCheckboxChange}
              checkAlignment={"left"}
              id={"exempleCheckbox"}
            >
              <Text variant="bodyXS" color={WDS_COLOR_PRIMARY_50}>
                Accept Termenii și Condițiile
              </Text>
            </Checkbox>
            <ErrorMessage
              errors={errors}
              name={"checkbox"}
              render={({ message }) => (
                <ValidationMessage>{message}</ValidationMessage>
              )}
            />
          </InputContainer>
          <div>
            <Button type="submit">Trimite</Button>
          </div>
        </RightSection>
      </Container>
    </Layout>
  );
};
