import location from 'common/assets/location.svg'
import email from 'common/assets/mail.svg'
import phone from 'common/assets/phone.svg'
import { Formik } from 'formik'
import type { FC } from 'react'
// import { useContactMutation } from 'features/LandingPage/store/api/landingApi'
import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { validationSchema } from 'common/schema/validationSchema'
import { Button } from 'common/ui/Button/Button'
import { Input } from 'common/ui/Input/Input'
import { Textarea } from 'common/ui/Textarea/Textarea'
import {
  ContactDetails,
  Content,
  Error,
  FormContact,
  Icon,
  InputWrapper,
  LeftSide,
  RightSide,
  SubTitle,
  Title,
} from './Contact.styled'
import { Spinner } from '../Spinner/Spinner'

// TODO --> CHANGE THE LOCATION OF THIS ENUM
export enum CONTACT_SECTION {
  TITLE = 'Contact us',
  EMAIL = 'drugbin.solution@gmail.com',
  PHONE = '+40 755 493 184',
  LOCATION = 'Suceava, Romania',
}

interface IContact {
  id: string
}

export const Contact: FC<IContact> = ({ id }) => {
  // TODO --> INTEGRATE BACKEND
  // const [contact, { isLoading }] = useContactMutation()

  const handleSubmit = (values: any, { resetForm }: any) => {
    // contact(values)
    resetForm()
  }
  return (
    <ContentWrapper color='white' fullWidth={true} id={id}>
      <Content>
        <LeftSide>
          <Title>Contact</Title>
          <ContactDetails>
            <Icon src={email} />
            <SubTitle>{CONTACT_SECTION.EMAIL}</SubTitle>
          </ContactDetails>
          <ContactDetails>
            <Icon src={phone} />
            <SubTitle>{CONTACT_SECTION.PHONE}</SubTitle>
          </ContactDetails>
          <ContactDetails>
            <Icon src={location} />
            <SubTitle>{CONTACT_SECTION.LOCATION}</SubTitle>
          </ContactDetails>
        </LeftSide>
        <RightSide>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={validationSchema}>
            {({ values, handleChange, handleSubmit, errors }) => {
              return (
                <FormContact onSubmit={handleSubmit}>
                  <InputWrapper>
                    <Input
                      name='name'
                      placeholder='EX: John Doe'
                      label='Name'
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && <Error>{errors.name}</Error>}
                  </InputWrapper>
                  <InputWrapper>
                    <Input
                      name='email'
                      placeholder='EX: johndoe@gmail.com'
                      label='Email'
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <Error>{errors.email}</Error>}
                  </InputWrapper>
                  <Textarea
                    name='message'
                    value={values.message}
                    onChange={handleChange}
                    label='Message'
                  />
                  <div>
                    <Button type='submit'>
                      {false ? <Spinner /> : 'Trimite'}
                    </Button>
                  </div>
                </FormContact>
              )
            }}
          </Formik>
        </RightSide>
      </Content>
    </ContentWrapper>
  )
}
