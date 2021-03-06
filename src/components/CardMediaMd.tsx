import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

type CardLgProps = {
  children?: React.ReactElement,
  imgPath: string
}
export const CardMediaMd = ({ children, imgPath }: CardLgProps): JSX.Element =>
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        height="140"
        image={imgPath}
        alt="test"
      />
      <CardContent>
        {children}
      </CardContent>
  </Card>