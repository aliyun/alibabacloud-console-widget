import React from 'react';
import styled, {
  css,
  keyframes
} from 'styled-components';

import {
  IconBase,
  injectIconFont
} from '@alicloud/iconfont-helper';

import {
  IPropsIconPure,
  IPropsIcon
} from '../types';
import {
  EIconType
} from '../const';

function getCode(props: IPropsIconPure): string {
  const code = EIconType[props.type];
  
  return code ? `\\${code}` : '';
}

const fontFamily = injectIconFont('1256165', '6dakf3hjlfe', 'data:application/x-font-woff2;charset=utf-8;base64,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');

const kfRotate = keyframes`
  0% {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
  
  100% {
    transform: rotate(1turn);
    transform-origin: 50% 50%;
  }
`;

const cssLoading = css`
  animation: ${kfRotate} 1s linear infinite;
`;

const cssRotate = css<IPropsIconPure>`
  ${props => {
    if (props.type === 'loading') {
      return cssLoading;
    }
    
    if (typeof props.rotate === 'number' && props.rotate > 0) {
      return css`
        transform: rotate(${props.rotate}deg);
      `;
    }
  }}
`;

const ScIcon = styled(IconBase)<IPropsIconPure>`
  font-family: ${fontFamily} !important;
  
  &:before {
    content: '${props => getCode(props)}';
    ${cssRotate}
  }
`;

/**
 * ConsoleBase 项目自用的图标组件
 */
export default function Icon(props: IPropsIcon): JSX.Element {
  return <ScIcon {...props} />;
}
