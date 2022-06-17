import { createTheme } from '@mui/material/styles'
import darkScrollbar from "@mui/material/darkScrollbar";

const theme = createTheme({
    palette: {
      primary: {
        main: "#2F4858",
        contrastText: "#FFFAF5"
      },
      secondary: {
        main: "#00C6AF"
      },
      text: {
        primary: "#2F4858",
        secondary: "#fff"
      }
    },
    typography: {
      button: {
        textTransform: "none"
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            ...darkScrollbar(),
            color: "#2F4858",
            background: "linear-gradient(216.96deg, rgba(255, 255, 255, 0.2) 4.2%, rgba(255, 255, 255, 0.151042) 8.76%, rgba(0, 0, 0, 0) 23.62%), #2F4858",
            padding: 0,
            margin: 0,
            fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            margin: "2rem 0",
            color: "#fff",
            borderRadius: 50
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none"
          }
        }
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            color: "#fff"
          },
          icon: {
            color: "#fff",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#283D4A"
          }
        }
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "#FFFAF5"
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            padding: "0.5rem 0",
            fontSize: "32px",
            fontWeight: 700
          },
          h2: {
            padding: "0.5rem 0",
            fontSize: "24px"
          },
          h3: {
            padding: "0.5rem 0",
            fontSize: "20px"
          },
          h4: {
            padding: "0.5rem 0",
            fontSize: "16px"
          }
        }
      }
    }
});

export default theme