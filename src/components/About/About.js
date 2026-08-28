import React from 'react'
import { Skills } from '../Skills/skills'
import { useTranslation } from 'react-i18next'

const PDF_PATH = '/files/MasterSapui5.pdf'
const EF_CERT_URL = 'https://www.efset.org/cert/4AJTB1'

// Newest first. The four most recent are SAP, which is what the profile
// leads with; everything older sits behind a disclosure.
const VISIBLE_TRAINING = 4
const TRAINING = [
  { title: 'Taller Automatización SAP con n8n e IA Agéntica - Logali Group', date: '6/2026' },
  { title: 'SAP BTP CAP - Cloud Application Programming Model - Logali Group', date: '5/2026' },
  { title: 'SAP BTP - Administración, Seguridad y Conectividad - Logali Group', date: '4/2026' },
  { title: 'Master SAP FIORI - Desarrollo con SAPUI5 - Logali Group', date: '5/2023', certificate: PDF_PATH },
  { title: 'Desarrollo de aplicaciones FIORI con SAPUI5 en SAP BAS - Logali Group', date: '2022' },
  { title: 'Aceleración Alkemy Node JOB READY - Buenos Aires, Argentina', date: '5/2022' },
  { title: 'Digital House Full Stack Web Developer - Buenos Aires, Argentina', date: '12/2021' },
]

const TrainingEntry = ({ item, label }) => (
  <>
    <h3 className="info-subtitle">{item.title}</h3>
    <p className="info-date">{item.date}</p>
    {item.certificate && (
      <a
        className="certificate"
        href={item.certificate}
        target="_blank"
        rel="noreferrer"
        aria-label={`${label} — ${item.title}`}
      >
        {label}
      </a>
    )}
  </>
)

const WorkEntry = ({ job, detailLabel }) => (
  <article className="work-entry">
    <h3 className="work-company">{job.company}</h3>
    <p className="work-role">{job.role}</p>
    <p className="info-date">{job.period}</p>
    <p className="work-summary">{job.summary}</p>

    {job.highlights.length > 0 && (
      <details className="work-detail">
        <summary>
          {detailLabel} ({job.highlights.length})
        </summary>
        {job.highlights.map((h) => (
          <div key={h.title} className="work-highlight">
            <h4 className="work-highlight-title">{h.title}</h4>
            <p className="work-highlight-detail">{h.detail}</p>
            <ul className="work-highlight-tech">
              {h.tech.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </details>
    )}
  </article>
)

export const About = () => {
  const { t } = useTranslation()

  return (
    <div>
      <section className="about" id="about">
        <h1 className="about-title">{t('about.title')}</h1>
        <div className="about-main">
          <div className="about-bio">
            <h2 className="bio-title">{t('about.bioTitle')}</h2>
            {t('about.bio')
              .split('\n\n')
              .map((paragraph) => (
                <p key={paragraph} className="bio-description">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
        <div className="info-sections">
          <div className="info-section">
            <h2 className="info-title">{t('about.workHistory')}</h2>
            {t('about.work', { returnObjects: true }).map((job) => (
              <WorkEntry
                key={job.company}
                job={job}
                detailLabel={t('about.showDetail')}
              />
            ))}
          </div>
          <div className="info-section">
            <h2 className="info-title">{t('about.training')}</h2>
            {TRAINING.slice(0, VISIBLE_TRAINING).map((item) => (
              <TrainingEntry key={item.title} item={item} label={t('about.certificate')} />
            ))}
            <details className="training-more">
              <summary>{t('about.showMore')}</summary>
              {TRAINING.slice(VISIBLE_TRAINING).map((item) => (
                <TrainingEntry key={item.title} item={item} label={t('about.certificate')} />
              ))}
            </details>
          </div>
          <div className="info-section">
            <h2 className="info-title">{t('about.languages')}</h2>
            <h3 className="info-subtitle">{t('about.english')}</h3>
            <p className="info-date">{t('about.englishDesc')}</p>
            <a
              className="certificate"
              href={EF_CERT_URL}
              target="_blank"
              rel="noreferrer"
              aria-label={t('about.english')}
            >
              EF Certificate
            </a>
          </div>
          <div className="info-section">
            <h2 className="info-title">{t('about.skills')}</h2>
            <div className="skills">
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
