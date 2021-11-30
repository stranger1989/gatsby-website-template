/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { primaryDesign } from './design';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

export default function Button({ children, ...rest }: Props): JSX.Element {
  return (
    <button css={primaryDesign} {...rest}>
      {children}
    </button>
  );
}
