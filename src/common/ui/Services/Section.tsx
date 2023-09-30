import type { FC, ReactNode } from 'react'

import starIcon from 'common/assets/star.svg'

import {
  Content,
  Icon,
  List,
  ListContent,
  ListWrapper,
  Other,
  SubTitle,
  Title,
} from './Services.styled'
import { isEmpty } from 'lodash-es'

interface ISection {
  content: {
    tag?: string
    title: string
    subTitle: string
    otherTitle?: string
    otherContent?: string
    list?: Array<string>
  }
  right: boolean
  children: ReactNode
}

export const Section: FC<ISection> = ({ content, right, children }) => {
  return (
    <Content>
      {!right && <div>{children}</div>}
      <div>
        <Title>{content.title}</Title>
        <SubTitle>{content.subTitle}</SubTitle>

        <Other>
          <SubTitle bold>{content.otherTitle}</SubTitle>
          <SubTitle>{content.otherContent}</SubTitle>
        </Other>

        <ListWrapper>
          {!isEmpty(content.list) &&
            content.list.map((element: string) => (
              <List>
                <Icon src={starIcon} />
                <ListContent>{element}</ListContent>
              </List>
            ))}
        </ListWrapper>
      </div>
      {right && <div>{children}</div>}
    </Content>
  )
}
