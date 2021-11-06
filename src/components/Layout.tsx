import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from 'twin.macro';

interface LayoutProps {
  children: JSX.Element;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = '',
  description = '',
}: LayoutProps): JSX.Element {
  return (
    <Fragment>
      <Helmet
        htmlAttributes={{
          lang: 'ja',
        }}
      >
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
      </Helmet>
      <GlobalStyles />
      {children}
    </Fragment>
  );
}
