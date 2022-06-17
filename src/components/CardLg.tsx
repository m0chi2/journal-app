import { css } from '@emotion/react'
import Card from '@mui/material/Card'

const CardStyle = (textColor: string, bgColor:string)  => css({
  margin: '1rem 0',
  padding: '1.5rem 1.2rem',
  boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.25)',
  color: textColor,
  backgroundColor: bgColor
})

type CardLgProps = {
  children?: React.ReactElement
  color?: string
  bgColor?: string
}
export const CardLg = ({ children, color = "theme.palette.primary.main", bgColor = '#fff' }: CardLgProps): JSX.Element =>
  <Card css={CardStyle(color, bgColor)}>
    {children}
  </Card>