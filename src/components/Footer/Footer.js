import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=1156150502&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20.'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer" id="contact">
      <div className="footer-info">
        <div className="footer-brand">
          <h2 className="footer-title" aria-hidden="true"> </h2>
          <h3>Guillermo Quattrocchi</h3>
          <p>Full Stack Web Developer</p>
          <p>
            <a href="mailto:gq4dev@gmail.com">gq4dev@gmail.com</a>
          </p>
        </div>

        <div className="footer-icons">
          <h4>{t('footer.followMe')}</h4>
          <div role="list">
            <a
              href="https://www.linkedin.com/in/guillermoquattrocchi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/guillote87"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/gq4dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
