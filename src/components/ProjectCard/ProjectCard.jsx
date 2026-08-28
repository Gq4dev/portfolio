import React from 'react'
import { getImageUrl } from '../../utils/publicUrl'

export const ProjectCard = ({ props }) => {
  const { title, img, url, subtitle, description, tech } = props

  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <img
        src={getImageUrl(`images/projects/${img}`)}
        alt={title}
        loading="lazy"
        width={400}
        height={250}
      />
      <div className="project-buttons">
        <a
          className="demo-button"
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Ver demo de ${title}`}
        >
          Demo
        </a>
      </div>
      {Array.isArray(tech) && tech.length > 0 && (
        <div className="project-tech">
          {tech.map((t) => (
            <span key={t} className="project-tech-tag">
              {t}
            </span>
          ))}
        </div>
      )}
      <h3 className="project-subtitle">{subtitle}</h3>
      <p className="project-description">{description}</p>
    </div>
  )
}
