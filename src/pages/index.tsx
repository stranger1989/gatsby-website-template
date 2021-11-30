/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import tw from 'twin.macro';
import { gtmTrigger } from '../lib/analytics';
import { Layout } from '../components/common';
import { Logo, CheckIcon } from '../components/icons';
import { Container, Button } from '../components/ui';

const backCard = css`
  ${tw`bg-gradient-to-r from-color-main-light to-color-main-dark shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`}
`;

const forwardCard = css`
  ${tw`bg-white shadow-lg sm:rounded-3xl`}
`;

export default function IndexPage(): JSX.Element {
  const buttonClickHandler = () => gtmTrigger('trigger_identifier');
  const LIST_TEXT = [
    'Customizing your tailwind.config.js file',
    'Extracting classes with @apply',
    'Code completion with instant preview',
  ];

  return (
    <Layout title="web site" description="this is page description">
      <main className=" h-full bg-gray-100">
        <Container>
          <div className="h-full flex flex-col justify-center items-center">
            <div className="py-3 relative sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0" css={backCard}></div>
              <div className="relative px-4 py-10 sm:p-20" css={forwardCard}>
                <div className="max-w-md mx-auto">
                  <Logo className="w-48" />
                  <div>
                    <div className="mt-8">
                      <p className="text-body-sm leading-body-sm text-gray-700 sm:text-body-md sm:leading-body-md">
                        An advanced online playground for Tailwind CSS,
                        including support for things like:
                      </p>
                      <ul className="mt-5 list-disc space-y-1">
                        {LIST_TEXT.map((test, i) => (
                          <li key={`item-${i}`} className="flex items-start">
                            <span className="h-6 flex items-center sm:h-6">
                              <CheckIcon className="flex-shrink-0 h-5 w-5 text-color-main" />
                            </span>
                            <p className="ml-2">{test}</p>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-body-sm leading-body-sm text-gray-700 sm:text-body-md sm:leading-body-md">
                        Perfect for learning how the framework works,
                        prototyping a new idea, or creating a demo to share
                        online.
                      </p>
                    </div>
                    <div className="mt-5 border-t border-gray-200">
                      <p className="mt-5 text-body-lg leading-lg font-bold">
                        Want to dig deeper into Tailwind?
                      </p>
                      <p>
                        <a
                          href="https://tailwindcss.com/docs"
                          className="text-color-main-dark hover:text-hover-3"
                        >
                          {' '}
                          Read the docs &rarr;{' '}
                        </a>
                      </p>
                    </div>
                    <Button
                      className="mt-5 font-bold"
                      onClick={buttonClickHandler}
                    >
                      google analytics test trigger
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </Layout>
  );
}
