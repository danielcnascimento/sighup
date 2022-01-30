import GlobalStyle from '../styles/globals'
import type { AppProps } from 'next/app'
import { ReactElement } from "react";
import { theme } from '../styles/theme';
import { ThemeProvider } from "@material-ui/styles";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
