import { Container }  from '@mui/system'
import Box from '@mui/material/Box'
import Copyright from 'components/Copyright'

type FrameProps = {
  children: React.ReactElement
}

export default function Frame({ children }: FrameProps ) {
  return (
    <Box 
      component="main"
      sx={{
        minHeight: "100vh",
        p: "4rem 0",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        background: "linear-gradient(216.96deg, rgba(255, 255, 255, 0.2) 4.2%, rgba(255, 255, 255, 0.151042) 8.76%, rgba(0, 0, 0, 0) 23.62%), #2F4858"
      }}
    >
      <Container
        disableGutters={true}
        fixed
        sx={{
          width: "78vw",
          maxHeight: {xs: 800, md: 560},
          aspectRatio: {xs: "inherit", md: "8 / 5"},
          padding: "2rem 4rem",
          background: "rgba(255,255,255,0.8)",
          borderRadius: 6
        }}
      >
        {children}
      </Container>
      <Copyright />
    </Box>
  )
}