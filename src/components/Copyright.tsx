import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="#8096AA"
      sx={{
        p: 2,
        position: "absolute",
        right: 0,
        bottom: 0,
        backgroundColor: "primary.main"
      }}
    >
      {'Copyright © '}
      <MuiLink color="#8096AA" href="/">
        Pattmi
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}