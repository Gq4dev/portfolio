import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import { Projects } from '../../components/Projects/Projects'

const TITLES = {
  sapui5: 'Proyectos SAP UI5',
  react: 'Proyectos React',
  nextjs: 'Proyectos Next.js',
}

export default function Portfolio({ cat }) {
  return (
    <>
      <Head>
        <title>{`${TITLES[cat] ?? 'Proyectos'} | Guillermo Quattrocchi`}</title>
      </Head>
      <Projects initialCat={cat} />
    </>
  )
}

// Paths come from the projects themselves so there is one source of truth:
// a category exists exactly when something is filed under it.
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'projects.json')
  const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  const categories = [...new Set(projects.map((p) => p.category))]
  return { paths: categories.map((cat) => ({ params: { cat } })), fallback: false }
}

export async function getStaticProps({ params }) {
  return { props: { cat: params.cat } }
}
