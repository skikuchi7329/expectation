import path from "path"
import { data } from "../../../data/data"
import StyledArticles from "../articles.styled"


type Props = {
  title?: string
  aim?: string | number
  yamedoki?: string
  additional?: string
}



export default function page({title, aim, yamedoki, additional}:Props) {
  return (
    <StyledArticles>
      <h1>title</h1>
      <p>titleの狙い目・やめ時等を紹介</p>
      <table>
        <tbody>
          <tr>
            <th>狙い目</th>
            <th>aim</th>
          </tr>
          <tr>
            <th>やめ時</th>
            <th>yamedoki</th>
          </tr>
          <tr>
            <th>補足</th>
            <th>addiotional</th>
          </tr>
        </tbody>
      </table>
    </StyledArticles>
  )
}