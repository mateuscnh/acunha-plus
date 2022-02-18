import { ThemeProvider } from "styled-components";

import "antd/dist/antd.less";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
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
