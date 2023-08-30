import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Formik } from 'formik'

import location from 'common/assets/service.svg'
import email from 'common/assets/mail.svg'
import phone from 'common/assets/phone.svg'

// import { useContactMutation } from 'features/LandingPage/store/api/landingApi'

import { validationSchema } from 'common/schema/validationSchema'
import { Button } from 'common/ui/Button/Button'
import { Input } from 'common/ui/Input/Input'
import Spinner from 'common/ui/Spinner/Spinner'
import { Textarea } from 'common/ui/Textarea/Textarea'
import {
  ContactDetails,
  ContactWrapper,
  Error,
  FormContact,
  Icon,
  InputWrapper,
  LeftSide,
  RightSide,
  SubTitle,
  Title,
} from './Contact.styled'

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
  const { t } = useTranslation()

  const handleSubmit = (values: any, { resetForm }: any) => {
    // contact(values)
    resetForm()
  }
  return (
    <ContactWrapper id={id}>
      <LeftSide>
        <Title>{t('landing_page.contact_title')}</Title>
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
                    {false ? <Spinner isLoading={false} /> : t('button.send')}
                  </Button>
                </div>
              </FormContact>
            )
          }}
        </Formik>
      </RightSide>
    </ContactWrapper>
  )
}
