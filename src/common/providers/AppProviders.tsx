import { QueryClient, QueryClientProvider } from 'react-query';
import { queryDefaultConfig } from '../api/queryConfig';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/globalStyle';

interface AppProvidersProps {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}
const AppProviders = ({ children }: AppProvidersProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: queryDefaultConfig,
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
