import React, { useState, useEffect } from 'react'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getDataUrl, getImageUrl } from '../../utils/publicUrl'

const CATEGORIES = [
  { id: 'sapui5', label: 'SAP UI5', icon: 'images/categories/sap.svg' },
  { id: 'react', label: 'React', icon: 'images/categories/react.svg' },
  { id: 'nextjs', label: 'Next.js', icon: 'images/categories/nextjs.svg' },
]

export const Projects = ({ initialCat }) => {
  const router = useRouter()
  const [projects, setProjects] = useState([])
  // The route is the source of truth for the active filter, so derive it
  // during render rather than mirroring it into state from an effect.
  const category = router.query.cat || initialCat

  useEffect(() => {
    fetch(getDataUrl('data/projects.json'))
      .then((response) => response.json())
      .then((data) => setProjects(data.filter((p) => p.category === category)))
      .catch((err) => console.error('Error al cargar proyectos:', err))
  }, [category])

  return (
    <>
      <section className="categories-container" id="portfolio">
        <h2 className="categories-title">Portfolio</h2>
        <div className="portfolio-icons">
          <ul role="navigation" aria-label="Filtrar por tecnología">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <Link href={`/portfolio/${cat.id}`} aria-label={cat.label}>
                  <img
                    src={getImageUrl(cat.icon)}
                    alt=""
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} props={project} />
          ))}
        </div>
      </section>
    </>
  )
}
