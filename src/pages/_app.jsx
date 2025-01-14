/* eslint-disable react/jsx-props-no-spreading */
import { SWRConfig } from "swr";

import "styles/globals.css";
import "styles/weather-icons.css";
import "styles/theme.css";

import "utils/i18n";
import { ColorProvider } from "utils/color-context";
import { ThemeProvider } from "utils/theme-context";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ColorProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorProvider>
    </SWRConfig>
  );
}

export default MyApp;
