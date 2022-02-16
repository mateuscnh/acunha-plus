import { ThemeProvider } from "styled-components";

import GlobalStyles from "./assets/styles/GlobalStyles";
import theme from "./assets/styles/Theme";

import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
