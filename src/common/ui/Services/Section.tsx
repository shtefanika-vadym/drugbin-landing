import type { FC, ReactNode } from 'react';

import { Content, SubTitle, Title } from './Services.styled';
// eslint-disable-next-line no-restricted-imports
import { useTranslation } from 'react-i18next';

interface ISection {
  content: {
    tag?: string;
    title: string;
    subTitle: string;
    otherTitle?: string;
    otherContent?: string;
    list?: Array<string>;
  };
  right: boolean;
  children: ReactNode;
}

export const Section: FC<ISection> = ({ content, right, children }) => {
  const { t } = useTranslation();

  return (
    <Content>
      {!right && <div>{children}</div>}
      <div>
        <Title>{t(`services.${content.title}`)}</Title>
        <SubTitle>{t(`services.${content.subTitle}`)}</SubTitle>
      </div>
      {right && <div>{children}</div>}
    </Content>
  );
};
