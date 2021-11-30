/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode, AnchorHTMLAttributes } from 'react';
import { primaryDesign } from './design';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode | ReactNode[];
}

export default function ExternalLinkButton({
  children,
  ...rest
}: Props): JSX.Element {
  return (
    <a css={primaryDesign} {...rest}>
      {children}
    </a>
  );
}
