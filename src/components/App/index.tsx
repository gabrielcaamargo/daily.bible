import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from '../../Router';
import GlobalStyles from '../../styles/GlobalStyles';
import theme from '../../styles/themes/theme';
import Header from '../Header';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
