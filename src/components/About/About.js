import React from 'react'
import { Skills } from '../Skills/skills'
import { useTranslation } from 'react-i18next'
import { getImageUrl } from '../../utils/publicUrl'

const PUBLIC_URL = process.env.PUBLIC_URL || ''
const PDF_PATH = `${PUBLIC_URL}/files/MasterSapui5.pdf`.replace(/\/+/g, '/')

export const About = () => {
  const { t } = useTranslation()
  const onResumeClick = (e) => {
    e.preventDefault()
    window.open(PDF_PATH)
  }

  return (
    <div>
      <section className="about" id="about">
        <h1 className="about-title">{t('about.title')}</h1>
        <div className="about-main">
          <img
            className="profile-img"
            src={getImageUrl('images/portfolio.jpeg')}
            alt="Guillermo Quattrocchi"
            width={200}
            height={200}
            loading="lazy"
          />
          <div className="about-bio">
            <h2 className="bio-title">{t('about.bioTitle')}</h2>
            <p className="bio-description">
              {t('about.bio')}
            </p>
          </div>
        </div>
        <div className="info-sections">
          <div className="info-section">
            <h2 className="info-title">{t('about.workHistory')}</h2>
            <h3 className="info-subtitle">
              {t('about.fixsur')}
            </h3>
            <p className="info-date">12/2008 - 12/2020</p>
            <h3 className="info-subtitle">
              {t('about.pulpou')}
            </h3>
            <p className="info-date">04/2023 - Today</p>
            <h3 className="info-subtitle">
              {t('about.altromondo')}
            </h3>
            <p className="info-date">06/2024 - Today</p>
          </div>
          <div className="info-section">
            <h2 className="info-title">Education</h2>
            <h3 className="info-subtitle">
              Digital House Full Stack Web Developer - Buenos Aires, Argentina
            </h3>
            <p className="info-date">8/2021 - 12/2021</p>
            <h3 className="info-subtitle">
              Aceleracion Alkemy Node JOB READY - Buenos Aires, Argentina
            </h3>
            <p className="info-date">5/2022 - Finalizado</p>
            <h3 className="info-subtitle">
              Master SAP FIORI - Desarrollo con SAPUI5 - Logali Group
            </h3>
            <p className="info-date">1/2023 - 5/2023</p>
            <a
              className="certificate"
              href="/"
              onClick={onResumeClick}
              aria-label={t('about.certificate')}
            >
              <p className="info-subtitle">{t('about.certificate')}</p>
            </a>
          </div>
          <div className="info-section">
            <h2 className="info-title">{t('about.skills')}</h2>
            <div className="skills">
              <Skills />
            </div>
          </div>
          <div className="info-section">
            <h2 className="info-title">{t('about.languages')}</h2>
            <h3 className="info-subtitle">{t('about.english')}</h3>
            <p className="info-date">
              {t('about.englishDesc')}
            </p>
            <a
              className="certificate"
              href="https://www.efset.org/cert/4AJTB1"
              target="_blank"
              rel="noreferrer"
              aria-label="Ver certificado EF"
            >
              <p className="info-subtitle">EF Certificate</p>
            </a>
          </div>
          <div className="info-section">
            <h2 className="info-title">{t('about.certifications')}</h2>
            <h3 className="info-subtitle">{t('about.sapAbap')}</h3>
            <p className="info-date">Logali Group - 2022</p>
            <h3 className="info-subtitle">
              {t('about.webinar1')}
            </h3>
            <p className="info-date">Logali Group - 2022</p>
            <h3 className="info-subtitle">
              {t('about.webinar2')}
            </h3>
            <p className="info-date">Logali Group - 2022</p>
            <h3 className="info-subtitle">
              {t('about.webinar3')}
            </h3>
            <p className="info-date">Logali Group - 2022</p>
          </div>
        </div>
      </section>
    </div>
  )
}
