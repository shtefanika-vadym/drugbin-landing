import type { FC, ReactNode } from 'react';


import {
  Content,
  SubTitle,
  Title
} from './Services.styled';

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
  return (
    <Content>
      {!right && <div>{children}</div>}
      <div>
        <Title>{content.title}</Title>
        <SubTitle>{content.subTitle}</SubTitle>
      </div>
      {right && <div>{children}</div>}
    </Content>
  );
};
