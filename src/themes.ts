import { createTheme } from '@mui/material/styles'

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