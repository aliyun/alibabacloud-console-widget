import React from 'react';
import styled from 'styled-components';

import {
  H2,
  List
} from '@alicloud/demo-rc-elements';

import {
  mixinTextBrand,
  mixinTextAccent,
  mixinTextPrimary,
  mixinTextSecondary,
  mixinTextTertiary,
  mixinTextDisabled,
  mixinTextInfo,
  mixinTextSuccess,
  mixinTextWarning,
  mixinTextError,
  mixinTextDanger,
  mixinTextTitle,
  mixinTextEmphasis,
  mixinTextCode
} from '../../../src';

const ScMixinTextBrand = styled.span`
  ${mixinTextBrand}
`;
const ScMixinTextAccent = styled.span`
  ${mixinTextAccent}
`;
const ScMixinTextPrimary = styled.span`
  ${mixinTextPrimary}
`;
const ScMixinTextSecondary = styled.span`
  ${mixinTextSecondary}
`;
const ScMixinTextTertiary = styled.span`
  ${mixinTextTertiary}
`;
const ScMixinTextDisabled = styled.span`
  ${mixinTextDisabled}
`;
const ScMixinTextInfo = styled.span`
  ${mixinTextInfo}
`;
const ScMixinTextSuccess = styled.span`
  ${mixinTextSuccess}
`;
const ScMixinTextWarning = styled.span`
  ${mixinTextWarning}
`;
const ScMixinTextError = styled.span`
  ${mixinTextError}
`;
const ScMixinTextDanger = styled.span`
  ${mixinTextDanger}
`;
const ScMixinTextTitle = styled.span`
  ${mixinTextTitle}
`;
const ScMixinTextEmphasis = styled.span`
  ${mixinTextEmphasis}
`;
const ScMixinTextCode = styled.span`
  ${mixinTextCode}
`;

export default function MixinText(): JSX.Element {
  return <>
    <H2>mixins for text</H2>
    <List>
      <ScMixinTextBrand>mixinTextBrand</ScMixinTextBrand>
      <ScMixinTextAccent>mixinTextAccent</ScMixinTextAccent>
      <ScMixinTextPrimary>mixinTextPrimary</ScMixinTextPrimary>
      <ScMixinTextSecondary>mixinTextSecondary</ScMixinTextSecondary>
      <ScMixinTextTertiary>mixinTextTertiary</ScMixinTextTertiary>
      <ScMixinTextDisabled>mixinTextDisabled</ScMixinTextDisabled>
      <ScMixinTextInfo>mixinTextInfo</ScMixinTextInfo>
      <ScMixinTextSuccess>mixinTextSuccess</ScMixinTextSuccess>
      <ScMixinTextWarning>mixinTextWarning</ScMixinTextWarning>
      <ScMixinTextError>mixinTextError</ScMixinTextError>
      <ScMixinTextDanger>mixinTextDanger</ScMixinTextDanger>
      <ScMixinTextTitle>mixinTextTitle</ScMixinTextTitle>
      <ScMixinTextEmphasis>mixinTextEmphasis</ScMixinTextEmphasis>
      <ScMixinTextCode>mixinTextCode</ScMixinTextCode>
    </List>
  </>;
}