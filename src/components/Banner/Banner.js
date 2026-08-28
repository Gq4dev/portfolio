import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const CV_URL = '/CV-2026.pdf'

export const Banner = () => {
  const { t } = useTranslation()

  return (
    <header className="banner" id="/">
      <div className="banner-info">
        <h1 className="banner-title">{t('banner.title')}</h1>
        <p className="banner-paragraph">{t('banner.subtitle')}</p>
        <div className="banner-ctas">
          <LinkScroll
            to="portfolio"
            smooth
            duration={500}
            offset={-80}
            className="banner-cta banner-cta-primary"
          >
            {t('banner.viewWork')}
          </LinkScroll>
          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="banner-cta banner-cta-secondary"
            aria-label={t('banner.downloadCVAria')}
          >
            {t('banner.downloadCV')}
          </a>
        </div>
        <ul className="banner-icons" aria-label="Redes sociales">
          <li>
            <a
              href="https://www.linkedin.com/in/guillermoquattrocchi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/guillote87"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gq4dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5491156150502&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20."
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
      <div className="banner-img">
        <svg
          className="banner-icon"
          width="500"
          height="500"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Code brackets"
        >
          {/* Left bracket < */}
          <path
            d="M 50 60 L 30 100 L 50 140"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
          {/* Center backslash \ */}
          <line
            x1="130"
            y1="40"
            x2="70"
            y2="160"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Right bracket > */}
          <path
            d="M 150 60 L 170 100 L 150 140"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
      </div>
    </header>
  )
}
