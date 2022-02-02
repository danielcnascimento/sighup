import GlobalStyle from "../styles/globals";
import Script from "next/script";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@material-ui/styles";
import { StepperFormProvider } from "../context/use-stepper-form.context";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StepperFormProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </StepperFormProvider>
      </ThemeProvider>
      <Script src="https://unpkg.com/styled-components/dist/styled-components.min.js" />
    </>
  );
}

export default MyApp;
