import {
  InputHTMLAttributes,
  ChangeEvent
} from 'react';

export type TInner = string | JSX.Element;
export type TFnInner = (focused: boolean) => TInner;

export interface IPropsLook {
  block?: boolean;
  round?: boolean;
  borderless?: boolean;
}

export interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>, IPropsLook {
  innerLeft?: TInner | TFnInner;
  innerRight?: TInner | TFnInner;
  onChange?(value: string, e?: ChangeEvent<HTMLInputElement>): void;
}