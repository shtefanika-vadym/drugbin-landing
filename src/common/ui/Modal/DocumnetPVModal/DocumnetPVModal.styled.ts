import styled from "styled-components";
import { WDS_COLOR_BLUE_100, WDS_COLOR_BLUE_400 } from "styles/colors";
import { flex } from "styles/mixins/flex.mixin";
import { textVariant } from "styles/mixins/typography.mixin";

export const Container = styled.div`
width: 100%;
  height: 100vh; /* 100% of the viewport height */
`

export const Border = styled.div`
    border-bottom: 1px solid ${WDS_COLOR_BLUE_100};
    margin-top: 4px;
`

export const DataContent = styled.div`
  ${textVariant('bodyXS')};
  margin-top: 8px;
  text-align: end;
`

export const Title = styled.h1`
  ${textVariant('titleH4')};
  text-align: center;
  margin: 24px 0;
`

export const Content = styled.p`
  ${textVariant('bodyS')};
`

export const Span = styled.span`
  font-weight: bold;
`

export const ReasonContent = styled.div`
  ${textVariant('bodyS')};
  font-weight: bold;
  margin-top: 24px;
`

export const HeaderTable = styled.div`
   display: grid;
   grid-template-columns: 2fr 1fr;
   background-color: ${WDS_COLOR_BLUE_100};
   color: ${WDS_COLOR_BLUE_400};
   border-radius: 8px;
   padding: 8px;
  margin: 24px 0 4px 0;
`

export const ContentTable = styled.div`
   display: grid;
   grid-template-columns: 2fr 1fr;
   padding: 8px;
  margin-bottom: 8px;
`

export const SignatureWrapper = styled.div`
  ${flex({ direction: 'column', gap: '4px' })};
  margin-top: 24px;
  font-weight: bold;
`

export const IconWrapper = styled.div`
  ${flex({ justifyContent: 'space-between' })};
`