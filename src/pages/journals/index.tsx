import SearchIcon from '@mui/icons-material/Search'
import Box from "@mui/material/Box"
import FormControl from '@mui/material/FormControl'
import Grid from "@mui/material/Grid"
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from "@mui/material/Typography"
import Image from "next/image"
import { useState } from "react"
import { CardLg } from "components/CardLg"
import Layout from "components/Layout"
import { SubTitlePages } from "components/SubTitlePages"
import { TitlePages } from "components/TitlePages"

type SearchItem = {
  id: string
  name: string
  imgPath: string
}

type HeightProps = {
  md: number
  lg: number
}

const backgroundHeight: HeightProps = {md: 270, lg: 360}

const JournalList: SearchItem[] = [
  {id: "a45f", name: "EARTH JOURNAL", imgPath: "images/test2.png"},
  {id: "a45s", name: "Newton", imgPath: "images/test2.png"},
  {id: "a45h", name: "環境ビジネス", imgPath: "images/test2.png"},
  {id: "a45r", name: "科学史研究", imgPath: "images/test2.png"},
  {id: "a45p", name: "BIOCITY", imgPath: "images/test2.png"},
]

export default function Journals() {
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<SearchItem[] | undefined>();

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setQuery(enteredName);
  };

  const search = () => {
    setResult(undefined)
    const foundJournals = JournalList.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResult(foundJournals);
  };

  return(
    <Layout>
      <>
        <TitlePages title="雑誌を検索する" description="気になる雑誌を検索してみましょう" />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "relative",
            top: 0,
            left: "-4rem",
            width: "100vw",
            height: backgroundHeight
          }}
        >
          <Grid item sx={{ width: 730 }}>
            <CardLg color="#fff" bgColor="rgba(255, 255, 255, 0.1)">
              <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h3" sx={{ width: 250, fontWeight: 500 }}>雑誌名で検索する</Typography>
                <Input
                  value={query}
                  onChange={inputHandler}
                  placeholder="入力してください.. "
                  disableUnderline
                  required={true}
                  fullWidth={true}
                  sx={{
                    mx: 2,
                    px: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    fontSize: "18px",
                    color: "text.secondary",
                    borderRadius: "4px"
                  }}
                />
                <IconButton
                  onClick={search}
                  sx={{ 
                    width: 36,
                    height: 36,
                    borderRadius: "4px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.25)"
                  }}>
                  <SearchIcon />
                </IconButton>
                </Box>
              </>
            </CardLg>
          </Grid>
          <Grid
            item
            sx={{
              position: "absolute",
              width: "100vw",
              height: backgroundHeight,
              overflow: "hidden",
              zIndex: -1
            }}
          >
            <Image
              alt=""
              layout="fill"
              objectFit="cover"
              src="/images/test.jpg"
              quality={100}
            />
          </Grid>
        </Grid>
        <SubTitlePages title="カテゴリー別一覧" en="BY CATEGORY" />
        <CardLg color="#fff" bgColor="rgba(255, 255, 255, 0.1)">
          <>
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
          {result && result.length > 0 ? (
            result.map((item) => ( <>
                <Image
                  src="/images/test2.png"
                  alt={item.name}
                  width={160}
                  height={234}
                />
                <p key={item.id}>{item.name}</p>
                <p key={item.name}>{item.id}</p>
              </>
            ))
          ): <h2>雑誌が見つかりませんでした。</h2>}
          </>
        </CardLg>
      </>
    </Layout>
  )
}