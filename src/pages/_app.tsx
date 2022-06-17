import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react'
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from 'themes'
import createEmotionCache from 'createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
