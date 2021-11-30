import React, { ComponentType, HTMLAttributes, ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

export default function Container({
  children,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  el: Component = 'div' as any,
}: Props): JSX.Element {
  return <Component className="h-full mx-auto container">{children}</Component>;
}
