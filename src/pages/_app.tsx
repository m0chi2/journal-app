import { ThemeProvider, CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from "@mui/material/CssBaseline"
import { Amplify } from 'aws-amplify'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import awsconfig from './../aws-exports'
import createEmotionCache from 'createEmotionCache'
import theme from 'themes'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

Amplify.configure(awsconfig);

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])
  
  return (<>
    <Head>
      <title>Pattmi | 雑誌の目次検索アプリ</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ visibility: !mounted ? "hidden" : "visible" }}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
    </>
  )
}

export default MyApp
