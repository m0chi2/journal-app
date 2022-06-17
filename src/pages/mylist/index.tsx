import { useState } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { TitlePages } from "components/TitlePages"
import { CardLg } from "components/CardLg"
import { ButtonBase } from "components/ButtonBase"
import Layout from "components/Layout"

export default function MyList() {
  const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  //  テスト用データ　/ TODO: 削除
  const rows = [
    {id: 123, category_id: "1", category_name: "Science", terms: "Bioscience", keyword: "ビタミンADE", journal: "日経Bioscience"},
    {id: 124, category_id: "1", category_name: "Science", terms: "Bioscience", keyword: "環境ストレス応答機構", journal: "日経Bioscience"},
    {id: 125, category_id: "1", category_name: "Science", terms: "Bioscience", keyword: "植物の免疫システム", journal: "日経Bioscience"},
    {id: 126, category_id: "2", category_name: "Medicine", terms: "Pharmacy", keyword: "ビタミンADE", journal: "日経Bioscience"},
    {id: 327, category_id: "2", category_name: "Medicine", terms: "Pharmacy", keyword: "ビタミンADE", journal: "日経Bioscience"},
    {id: 425, category_id: "2", category_name: "Medicine", terms: "Pharmacy", keyword: "ビタミンADE", journal: "日経Bioscience"},
  ]

  return (
    <Layout>
      <>
      <TitlePages
        title="登録済み検索ワード"
        description="過去2ヶ月分の検索ワードを含む雑誌の結果を表示します。"
      />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          sx={{
            fontSize: "24px",
            fontWeight: 700
          }}
        >
          <MenuItem value="">
            Science / 科学
          </MenuItem>
          <MenuItem value={10}>バイオサイエンス</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Box>
        {rows && rows.map((row, index) => (
          <CardLg key={index} color="#fff" bgColor="rgba(255, 255, 255, 0.1)">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2} md={2}>
                <p>{row.terms}</p>
              </Grid>
              <Grid item xs={3} md={4}>
                <p>{row.keyword}</p>
              </Grid>
              <Grid item xs={4} md={3}>
                <p>{row.journal}</p>
              </Grid>
              <Grid item xs={3} md={3} sx={{ textAlign: "right" }}>
                <ButtonBase size="large" color="secondary" m={0}>
                  <span>結果をみる</span>
                </ButtonBase>
              </Grid>
            </Grid>
          </CardLg>
        ))
        }
      </Box>
      </>
    </Layout>
  )
}