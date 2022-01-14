import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyles';
import Router from './routes';
import { AuthProvider } from './context/AuthContext';
import FontStyles from './styles/fonts/FontStyles';
import { CompanyProvider } from './context/CompanyContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontStyles>
        <AuthProvider>
          <CompanyProvider>
            <GlobalStyle />
            <Router />
          </CompanyProvider>
        </AuthProvider>
      </FontStyles>
    </ThemeProvider>
  );
}

export default App;
