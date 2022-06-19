import Box from '@mui/material/Box'
import Head from 'next/head'
import Navigation from 'components/Navigation'

type LayoutProps =  {
  children?: React.ReactElement
}

export default function Layout({ children }: LayoutProps):JSX.Element {
  return(<>
    <Head>
      <title>Pattmi | 雑誌の目次検索アプリ</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box
      sx={{
        display: 'flex',
        position: "relative",
        zIndex: 1
      }}
    >
      <Navigation />
      <Box component="main" sx={{ flexGrow: 1, maxWidth: 1200, minHeight: '100vh', padding: '4rem' }}>
        {children}
      </Box>
    </Box>
    </>
  )
}