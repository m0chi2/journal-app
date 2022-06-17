import Layout from "components/Layout"
import { TitlePages } from "components/TitlePages"

// ダミー TODO 削除
type Items = {
  id: string
  name: string
  published: string
}
const JournalList: Items[] = [
  {id: "a45f", name: "EARTH JOURNAL", published: Date()},
  {id: "a45s", name: "Newton", published: Date()},
  {id: "a45h", name: "環境ビジネス", published: Date()}
]
// 削除ここまで

export default function Journal() {
  return (
    <Layout>
      <TitlePages title="あああ" description="いいい" />
    </Layout>
  )
}