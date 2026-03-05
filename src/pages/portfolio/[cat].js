import fs from 'fs'
import path from 'path'
import { Projects } from '../../components/Projects/Projects'

export default function Portfolio({ cat }) {
  return <Projects initialCat={cat} />
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'categories.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const paths = data.map((cat) => ({ params: { cat: cat.category } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { cat: params.cat } }
}
