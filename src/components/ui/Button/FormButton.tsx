/** @jsx jsx */
import { jsx } from '@emotion/react';
import { InputHTMLAttributes } from 'react';
import { primaryDesign } from './design';

type Props = InputHTMLAttributes<HTMLInputElement>;

function FormButton(props: Props): JSX.Element {
  return <input css={primaryDesign} {...props} />;
}

export default FormButton;
