import React from 'react'
import { getImageUrl } from '../../utils/publicUrl'

export const ProjectCard = ({ props }) => {
  const { title, img, url, client, subtitle, description, tech, deploy } = props

  return (
    <article className="project">
      <div className="project-media">
        {img ? (
          <img
            src={getImageUrl(`images/projects/${img}`)}
            alt={title}
            loading="lazy"
            width={800}
            height={500}
          />
        ) : (
          // Client work built inside customer environments has no capture to
          // show, so the slot states that rather than sitting empty.
          <span className="project-media-empty">sin captura disponible</span>
        )}
        {description && (
          <div className="project-overlay">
            <p>{description}</p>
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-head">
          <h3 className="project-title">{title}</h3>
          {deploy && <span className="project-year">{deploy}</span>}
        </div>

        {(client || subtitle) && (
          <p className="project-role">{client || subtitle}</p>
        )}
        {description && <p className="project-description">{description}</p>}

        {Array.isArray(tech) && tech.length > 0 && (
          <ul className="project-tech">
            {tech.map((t) => (
              <li key={t} className="project-tech-tag">
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="project-links">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              Ver demo ↗
            </a>
          ) : (
            <span className="project-private">Sin demo pública</span>
          )}
        </div>
      </div>
    </article>
  )
}
