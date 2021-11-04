/** @jsx jsx */
import { Fragment } from 'react';
import tw from 'twin.macro';
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';

const pageStyles = css`
  ${tw`p-24 text-gray-900 font-family['-apple-system, Roboto, sans-serif, serif']`}
`;

const headingStyles = css`
  ${tw`mt-0 mb-16 max-w-xs`}
`;

const paragraphStyles = css`
  ${tw`mb-4`}
`;

const codeStyles = css`
  ${tw`p-1 text-yellow-700 font-size[1.25rem] border-radius[4px]`}
`;

export default function NotFoundPage(): JSX.Element {
  return (
    <main css={pageStyles}>
      <title>Not found</title>
      <h1 css={headingStyles}>Page not found</h1>
      <p css={paragraphStyles}>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' && (
          <Fragment>
            <br />
            Try creating a page in <code css={codeStyles}>src/pages/</code>.
            <br />
          </Fragment>
        )}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
}
