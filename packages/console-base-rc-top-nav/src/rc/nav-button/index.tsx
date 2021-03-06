import React from 'react';
import styled, {
  css
} from 'styled-components';

import Button, {
  ButtonProps,
  ButtonTheme
} from '@alicloud/console-base-rc-button';

interface IProps extends Omit<ButtonProps, 'theme'> {
  responsive?: boolean;
}

// `display: block !important;` 让 button 和 a 水平对齐，防止 Button 自身的样式干扰
const ScNavButton = styled(Button)<IProps>`
  display: block !important;
  position: relative;
  padding: 0 10px;
  border: 0;
  height: 50px;
  line-height: 50px;
  
  ${props => (props.responsive ? css`
    @media screen and (max-width: 1208px) {
      padding: 0 6px;
    }
  ` : null)};
  
  img {
    display: inline;
    max-width: 160px;
    max-height: 36px;
  }
`;

/**
 * 顶栏按钮
 */
export default function NavButton(props: IProps): JSX.Element {
  return <ScNavButton {...{
    theme: ButtonTheme.TEXT_BRAND_SECONDARY,
    ...props
  }} />;
}
