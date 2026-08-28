import React, { useState, useEffect } from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { getDataUrl } from '../../utils/publicUrl'

const CATEGORIES = [
  { id: 'sapui5', label: 'SAP UI5' },
  { id: 'react', label: 'React' },
  { id: 'nextjs', label: 'Next.js' },
]

export const Projects = ({ initialCat }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const [allProjects, setAllProjects] = useState([])
  // The route is the source of truth for the active filter, so derive it
  // during render rather than mirroring it into state from an effect.
  // No category means the home page, which shows everything.
  const category = router.query.cat || initialCat || null

  // Fetched once: switching filters should not re-download a file whose
  // contents we already hold.
  useEffect(() => {
    fetch(getDataUrl('data/projects.json'))
      .then((response) => response.json())
      .then(setAllProjects)
      .catch((err) => console.error('Error al cargar proyectos:', err))
  }, [])

  const projects = category
    ? allProjects.filter((p) => p.category === category)
    : allProjects

  return (
    <section className="portfolio" id="portfolio">
      <header className="portfolio-head">
        <h2 className="portfolio-heading">{t('portfolio.heading')}</h2>
      </header>

      <nav className="portfolio-tabs" aria-label="Filtrar proyectos por tecnología">
        <Link
          href="/#portfolio"
          className={`portfolio-tab${category ? '' : ' is-active'}`}
          aria-current={category ? undefined : 'page'}
        >
          {t('portfolio.all')}
          {allProjects.length > 0 && ` (${allProjects.length})`}
        </Link>
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === category
          const count = allProjects.filter((p) => p.category === cat.id).length

          return (
            <Link
              key={cat.id}
              href={`/portfolio/${cat.id}`}
              className={`portfolio-tab${isActive ? ' is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {cat.label}
              {count > 0 && ` (${count})`}
            </Link>
          )
        })}
      </nav>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} props={project} />
        ))}
      </div>
    </section>
  )
}
