import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import list1 from 'common/assets/list1.jpg'
import list2 from 'common/assets/list2.jpg'
import list3 from 'common/assets/list3.jpg'

import useBreakpoints from 'common/hooks/useBreakpoints'

import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper'
import { Section } from './Section'
import { Image, ServicesWrapper } from './Services.styled'
interface IServices {
  id: string
}

export const Services: FC<IServices> = ({ id }) => {
  const { isBelowDesktop } = useBreakpoints()
  const isRO = localStorage?.getItem('selectedLanguage') === `"ro"`
  const { t } = useTranslation()

  const LIST_SECTION_1 = {
    tag: t('list_section_1.tag'),
    title: t('list_section_1.title'),
    subTitle: t('list_section_1.subTitle'),
    list: [t('list_section_1.list.0'), t('list_section_1.list.1'), t('list_section_1.list.2')],
  }

  const LIST_SECTION_2 = {
    title: t('list_section_2.title'),
    subTitle: !isRO ? t('list_section_2.subTitle') : '',
    list: [t('list_section_2.list.0'), t('list_section_2.list.1'), t('list_section_2.list.2')],
  }

  const LIST_SECTION_3 = {
    title: t('list_section_3.title'),
    subTitle: !isRO ? t('list_section_3.subTitle') : '',
    list: [t('list_section_3.list.0'), t('list_section_3.list.1')],
  }
  return (
    <ContentWrapper id={id}>
      <ServicesWrapper>
        <Section content={LIST_SECTION_1} right>
          <Image src={list1} />
        </Section>
        <Section content={LIST_SECTION_2} right={!isBelowDesktop ? false : true}>
          <Image src={list2} />
        </Section>
        <Section content={LIST_SECTION_3} right>
          <Image src={list3} />
        </Section>
      </ServicesWrapper>
    </ContentWrapper>
  )
}
