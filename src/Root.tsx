import { FC, useEffect } from 'react';
import { SDKProvider, useLaunchParams } from '@telegram-apps/sdk-react';
import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { loadLocale } from './i18n/i18n-util.sync';
import TypesafeI18n from './i18n/i18n-react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { App } from './App';
import { Locales } from './i18n/i18n-types';

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

export const Root: FC = () => {
  const debug = useLaunchParams().startParam === 'debug';

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import('eruda').then((lib) => lib.default.init());
    }
  }, [debug]);

  const { initData } = retrieveLaunchParams();

  const getLocale = (localeString?: string): Locales =>
    localeString === 'ru' ? 'ru' : 'en';

  const locale = getLocale(initData?.user?.languageCode);

  loadLocale(locale);

  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <SDKProvider acceptCustomStyles debug={debug}>
        <TypesafeI18n locale={locale}>
          <App />
        </TypesafeI18n>
      </SDKProvider>
    </ErrorBoundary>
  );
};
