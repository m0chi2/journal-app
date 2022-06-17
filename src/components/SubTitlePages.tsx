import Typography from "@mui/material/Typography"

type SubTitlePagesProps = {
  title: string
  en?: string
}

export const SubTitlePages = ({title, en } :SubTitlePagesProps): JSX.Element =>
  <Typography
      variant="h2"
      sx={{
        marginBottom: "0.5rem",
        color: "text.secondary",
        lineHeight: 1.4
      }}
    >
      <Typography 
        variant="overline"
        sx={{
          display: "block",
          background: "linear-gradient(0deg, #258579 0%, #00C6AF 76.32%)",
          backgroundClip: "text",
          textFillColor: "transparent",
          fontSize: "16px"
        }}
      >
        {en}
      </Typography>
      {title}
    </Typography>