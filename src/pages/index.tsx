/** @jsx jsx */
import tw, { GlobalStyles } from 'twin.macro';
import { css, jsx } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

const pageStyles = css`
  ${tw`text-gray-800 font-family['-apple-system, Roboto, sans-serif, serif']`}
`;

const container = css`
  ${tw`min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12`}
`;

const width = css`
  ${tw`relative py-3 sm:max-w-xl sm:mx-auto`}
`;

const backCard = css`
  ${tw`absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`}
`;

const forwardCard = css`
  ${tw`relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20`}
`;

const cardContents = css`
  ${tw`max-w-md mx-auto`}
`;

const divider = css`
  ${tw`divide-y divide-gray-200`}
`;

const headText = css`
  ${tw`py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7`}
`;

const listBox = css`
  ${tw`list-disc space-y-2`}
`;

const listItem = css`
  ${tw`flex items-start`}
`;

const listIcon = css`
  ${tw`h-6 flex items-center sm:h-7`}
`;

const checkIcon = css`
  ${tw`flex-shrink-0 h-5 w-5 text-blue-500`}
`;

const listText = css`
  ${tw`ml-2`}
`;

const code = css`
  ${tw`text-sm font-bold text-gray-900`}
`;

const boldText = css`
  ${tw`pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7`}
`;

const linkText = css`
  ${tw`text-blue-600 hover:text-blue-700`}
`;

export default function IndexPage(): JSX.Element {
  return (
    <main css={pageStyles}>
      <title>Home Page</title>
      <GlobalStyles />
      <div css={container}>
        <div css={width}>
          <div css={backCard}></div>
          <div css={forwardCard}>
            <div css={cardContents}>
              <div>
                <StaticImage src="../images/logo.svg" alt="logo" />
              </div>
              <div css={divider}>
                <div css={headText}>
                  <p>
                    An advanced online playground for Tailwind CSS, including
                    support for things like:
                  </p>
                  <ul css={listBox}>
                    <li css={listItem}>
                      <span css={listIcon}>
                        <svg
                          css={checkIcon}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p css={listText}>
                        Customizing your
                        <code css={code}>tailwind.config.js</code> file
                      </p>
                    </li>
                    <li css={listItem}>
                      <span css={listIcon}>
                        <svg
                          css={checkIcon}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p css={listText}>
                        Extracting classes with
                        <code css={code}>@apply</code>
                      </p>
                    </li>
                    <li css={listItem}>
                      <span css={listIcon}>
                        <svg
                          css={checkIcon}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <p css={listText}>Code completion with instant preview</p>
                    </li>
                  </ul>
                  <p>
                    Perfect for learning how the framework works, prototyping a
                    new idea, or creating a demo to share online.
                  </p>
                </div>
                <div css={boldText}>
                  <p>Want to dig deeper into Tailwind?</p>
                  <p>
                    <a href="https://tailwindcss.com/docs" css={linkText}>
                      {' '}
                      Read the docs &rarr;{' '}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
