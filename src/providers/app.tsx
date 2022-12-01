import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Button, Spinner } from '@/components/Elements';
import { theme } from '@/styles/theme';

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>Ooops, something went wrong :( </h2>
      <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div>
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <Router>{children}</Router>
          </ThemeProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
