import Box from '@mui/material/Box'
import { Container }  from '@mui/system'
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
        position: "relative"
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