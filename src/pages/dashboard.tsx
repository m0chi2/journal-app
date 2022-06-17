import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import Layout from 'components/Layout'
import { CardLg } from 'components/CardLg'
import { CardMediaMd } from 'components/CardMediaMd'
import { SubTitlePages } from 'components/SubTitlePages'

export default function Dashboard() {
  const rows = [
    {id: 1, title: "ううう", description: "説明文です", imgPath: "images/test.jpg",},
    {id: 2, title: "えええ", description: "説明文です", imgPath: "images/test.jpg",},
    {id: 3, title: "おおお", description: "説明文です", imgPath: "images/test.jpg",}
  ]
  return (
    <Layout>
      <>
        <CardLg>
          <h1>いいい</h1>
        </CardLg>
        <CardLg color="#fff" bgColor="rgba(255, 255, 255, 0.1)">
          <p>あああ</p>
        </CardLg>

        <SubTitlePages title="あなたの登録済みカテゴリー" en="YOUR CATEGORIES" />
        <Grid container spacing={4} wrap={'nowrap'}>
          {rows && rows.map((row, index) => (
            <Grid item key={index}>
              <CardActionArea 
                sx={{
                  transition: "0.2s",
                  "&:hover": {
                    transform: "scale(1.1)"
                  }
                }}
              >
                <CardMediaMd imgPath={"images/test.jpg"}>
                  <>
                    <Typography variant="h3">{row.title}</Typography>
                    <div>{row.description}</div>
                  </>
                </CardMediaMd>
              </CardActionArea>
            </Grid>
          ))
          }
        </Grid>
      </>
    </Layout>
  )
}