import { BrowserRouter as Router } from 'react-router-dom';
import type { Decorator, Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { worker } from '../src/mocks/browser';
import '../src/styles/global.css';
import '../src/styles/reset.css';

// Start the MSW worker
worker.start();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const queryClient = new QueryClient();

export const decorators: Decorator[] = [
  (Story) => (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </Router>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
