import { Suspense } from "react";
import { ThemeProvider } from "styled-components";

import "antd/dist/antd.less";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import Routes from "./routes";
import SpinPage from "./components/SpinPage/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<SpinPage />}>
        <Routes />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
