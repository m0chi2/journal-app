import CloseIcon from '@mui/icons-material/Close'
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import IconButton from '@mui/material/IconButton'
import Typography from "@mui/material/Typography"
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ButtonBase } from "components/ButtonBase"
import { CardLg } from "components/CardLg"
import Layout from "components/Layout"
import { TitlePages } from "components/TitlePages"

// const router = useRouter()
// const { pid } = router.query

// pidでmokujiDataをフィルタリング
const mokujiData = {
  id: "sdaf843fdasj",
  userId: "",
  mylistId: "", 
  journalId: "aa123",
  keyword: "ビタミンＡＤＥ",
  data: [{
    context: "ほにゃららビタミンとはあかさたなはまやらわはわわわほにゃららビタミンとはあかさたなはまやらわはわわわほにゃららビタミンとはあかさたなはまやらわはわわわほにゃららビタミンとはあかさたなはまやらわはわわわ",
    detail: "日経Bioscience XX巻 号",
  }]
}

export default function Result() {

  const [open, setOpen] = useState<boolean>(false)
  const handleButtonToggle = () => {
    setOpen(!open);
  };

  return(
    <Layout>
    <>
      <TitlePages title="検索結果" />
      <Typography color="text.secondary">雑誌： {mokujiData.journalId}</Typography>
      <Typography color="text.secondary">キーワード： {mokujiData.keyword}</Typography>
      <CardLg color="#fff" bgColor="rgba(255, 255, 255, 0.1)">
        <Grid container alignItems="center">
          <Grid item xs={4}>{mokujiData.data[0].context.slice(0,14)}</Grid>
          <Grid item xs={4}>{mokujiData.data[0].detail}</Grid>
          <Grid item xs={4} sx={{ textAlign: "right" }}>
            {!open ?
              <ButtonBase onClick={handleButtonToggle} color="secondary">
                <span>目次をみる</span>
              </ButtonBase> : 
              <IconButton onClick={handleButtonToggle}>
                <CloseIcon />
              </IconButton>
            }
          </Grid>
          {open && <>
            <Grid item xs={12} mt={2}>
              <Divider sx={{ backgroundColor: "#8096AA" }} />
              <Box p={2}>
                {mokujiData.data[0].context}
              </Box>
            </Grid>
            </>
          }
        </Grid>
      </CardLg>
    </>
    </Layout>
  )
}