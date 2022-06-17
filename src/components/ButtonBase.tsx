import Button from '@mui/material/Button'

type ButtonProps = {
  children: React.ReactElement
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
  size?: "small"| "medium" | "large"
  m?: number | string
  onClick?: () => void
}


export const ButtonBase = ({ children, color = "primary", size = "large", m = 0, onClick }: ButtonProps): JSX.Element => 
  <Button
    variant="contained"
    onClick={(onClick)}
    color={color}
    size={size}
    sx={{margin: m}}
  >
    {children}
  </Button>
