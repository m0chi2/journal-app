import { ArrowForward } from '@mui/icons-material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { ButtonBase } from './ButtonBase'

export default function HomeTabContent() {
  return(
    <Grid container sx={{position:{ xs: "relative", md: "inherit" }}}>
      <Grid item
        xs={12}
        md={6}
        sx={{
          position: { xs:"unset", md: "relative" },
          textAlign: { xs: "center", md: "left" }
        }}
      >
        <Typography 
          variant="h1"
          sx={{
            display: "inline-block",
            margin: "3rem 0 0.5rem",
            background: "linear-gradient(73deg, rgba(47,72,88,1) 0%, rgba(0,198,175,1) 100%);",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontSize: "48px",
            lineHeight: 1.2,
            letterSpacing: "0.04em",
            "& > span": {
              display: "block"
            }
          }}>
          <span>雑誌の目次を</span>
          <span>横断検索</span>
        </Typography>
        <Typography sx={{ paddingBottom: "0.2rem", fontWeight: 700 }}>キャッチアップしたいキーワードを検索して</Typography>
        <Typography sx={{ paddingBottom: "0.2rem", fontWeight: 700 }}>効率的に情報を収集※しよう！</Typography>
        <ButtonBase color="secondary" m="2rem auto 0">
          {<>
            無料ではじめる
            <ArrowForward sx={{ position: "relative", left: 2 }}/>
          </>
          }
        </ButtonBase>
        <Typography
          variant="caption"
          component="span"
          sx={{
            display: "block",
            fontSize: "10px",
            position: "absolute",
            bottom: 0
          }}
        >
          β版、対応ジャンル（現在一部医療系のみ）は今後追加を予定
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{ maxWidth: { xs: 320, md: "inherit" }, margin: "1rem auto" }}>
        <Image
          src="/images/home-kv.png"
          alt=""
          width={350}
          height={370}
          layout={"responsive"}
        />
      </Grid>
    </Grid>
  )
}