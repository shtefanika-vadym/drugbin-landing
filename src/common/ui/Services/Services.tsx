import list1 from 'common/assets/line1.png';
import list3 from 'common/assets/line3.png';
import list4 from 'common/assets/line4.png';
import useBreakpoints from 'common/hooks/useBreakpoints';
import { ContentWrapper } from 'common/layout/ContentWrapper/ContentWrapper';
import { Navigation } from '../About/About.styled';
import { Section } from './Section';
import { Image, ServicesWrapper } from './Services.styled';
// eslint-disable-next-line no-restricted-imports
import { useTranslation } from 'react-i18next';

export const Services: React.FC<{ id?: string }> = ({ id }) => {
  const { isBelowDesktop } = useBreakpoints();
  const { t } = useTranslation();

  const LIST_SECTION_1 = {
    title: 's1_title',
    subTitle: 's1_subTitle',
  };

  const LIST_SECTION_2 = {
    title: 's2_title',
    subTitle: 's2_subTitle',
  };

  const LIST_SECTION_3 = {
    title: 's3_title',
    subTitle: 's3_subTitle',
  };

  return (
    <ContentWrapper id={id}>
      <Navigation>{t('services.guide')}</Navigation>
      <ServicesWrapper>
        <Section content={LIST_SECTION_1} right>
          <Image src={list1} alt="identificare" />
        </Section>
        <Section content={LIST_SECTION_2} right={isBelowDesktop}>
          <Image src={list3} alt="app" />
        </Section>
        <Section content={LIST_SECTION_3} right>
          <Image src={list4} alt="predare" />
        </Section>
      </ServicesWrapper>
    </ContentWrapper>
  );
};
