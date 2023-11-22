import styled from "styled-components";
import { flex } from "styles/mixins/flex.mixin";
import { textVariant } from "styles/mixins/typography.mixin";

export const Content = styled.div`
    background-color: #EBF0FB;
    ${flex({ gap: '8px' })};
    padding: 8px 16px;
    border-radius: 8px;
`

export const Text = styled.p`
    ${textVariant('bodyM')};
    color: #011640;
`

export const Icon = styled.img`
    height: 24px;
`