import styled from "styled-components";
import { flex } from "styles/mixins/flex.mixin";
import { textVariant } from "styles/mixins/typography.mixin";

export const Content = styled.div`
    margin-top: 4px;
`

export const TopContent = styled.div`
    ${flex({justifyContent: 'space-between'})};
`

export const Text = styled.p`
    ${textVariant('bodyXS')};
    color: #1C3375;
`

export const BottomContent = styled(Text)`
    margin: 4px 8px;
    color: #01102E;
`