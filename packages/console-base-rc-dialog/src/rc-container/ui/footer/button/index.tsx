import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import Button, {
  EButtonPreset,
  ButtonProps
} from '@alicloud/console-base-rc-button';

import {
  IDialogButtonProps
} from '../../../../types';
import {
  useDialog,
  useDispatchLock,
  useDispatchUnlock,
  useDispatchCloseWithValue
} from '../../../../model';

const ScButton = styled(Button)`
  margin-right: 8px;
  min-width: 64px;
  
  &:last-child {
    margin-right: 0;
  }
`;

export default function FooterButton({
  result,
  primary,
  onClick,
  ...buttonProps
}: IDialogButtonProps<any>): JSX.Element {
  const dialog = useDialog();
  const dispatchLock = useDispatchLock();
  const dispatchUnlock = useDispatchUnlock();
  const dispatchCloseWithValue = useDispatchCloseWithValue();
  
  const handleClick = useCallback(e => {
    let willClose: boolean | void;
    
    if (onClick) {
      willClose = onClick(dialog, e);
    }
    
    if (willClose === false) {
      return;
    }
    
    let finalResult = result;
    
    if (typeof result === 'function') {
      finalResult = result(dialog.data);
      
      if ((finalResult as Promise<any>).then) { // 弱判
        dispatchLock(true);
        
        (finalResult as Promise<any>).then(resultResult => {
          dispatchUnlock();
          dispatchCloseWithValue(resultResult);
        }, err => {
          dispatchUnlock();
          dispatchCloseWithValue(err, true);
        });
        
        return;
      }
    }
    
    dispatchCloseWithValue(finalResult);
  }, [onClick, result, dispatchCloseWithValue, dialog, dispatchLock, dispatchUnlock]);
  
  return <ScButton {...{
    ...buttonProps as ButtonProps, // spm 参数一定存在，由上游保证
    preset: primary ? EButtonPreset.PRIMARY : EButtonPreset.SECONDARY,
    onClick: handleClick
  }} />;
}