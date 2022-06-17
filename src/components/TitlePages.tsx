import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

type TitlePagesProps = {
  title: string
  description?: string
}

export const TitlePages =  ({ title, description } :TitlePagesProps) :JSX.Element => 
  <Box sx={{ marginBottom: "2rem" }}>
    <Typography variant="h1" color="text.secondary">
      {title}
    </Typography>
    {description  &&
      <Typography sx={{ color: "text.secondary" }}>{description}</Typography>
    }
  </Box>
