import { Suspense } from "react";
import { ThemeProvider } from "styled-components";

import "antd/dist/antd.less";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme";
import Routes from "./routes";
import SpinPage from "./components/SpinPage/index";
import { SessionProvider } from "./store/SessionProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SessionProvider>
        <Suspense fallback={<SpinPage />}>
          <Routes />
        </Suspense>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default App;
