import React from 'react'
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import { FaBars, FaSun, FaMoon } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from '../../context/ThemeContext'
import LanguageSelector from '../LanguageSelector.js'
import { useTranslation } from 'react-i18next'

export const Navbar = ({ toggle }) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { isDark, toggleTheme } = useTheme()

  const toggleHome = () => scroll.scrollToTop()
  const isHome = router.pathname === '/'

  return (
    <nav className="navbar" role="navigation" aria-label="Menú principal">
      <div className="navbar-logo">
        <Link href="/" onClick={toggleHome} aria-label="Ir al inicio">
          <div className="title">
            <span className="span1" />
            <span className="span2" />
          </div>
        </Link>
      </div>

      {isHome ? (
        <div className="navbar-menu">
          <LinkS to="/" onClick={toggleHome}>{t('nav.home')}</LinkS>
          <LinkS to="about" smooth duration={500} spy exact="true" offset={-80}>{t('nav.about')}</LinkS>
          <LinkS to="portfolio" smooth duration={500} spy exact="true" offset={-80}>{t('nav.portfolio')}</LinkS>
          <LinkS to="contact" smooth duration={500} spy exact="true" offset={-80}>{t('nav.contact')}</LinkS>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <LanguageSelector />
        </div>
      ) : (
        <div className="navbar-menu">
          <Link href="/" onClick={toggleHome}>{t('nav.home')}</Link>
          <LinkS to="contact" smooth duration={500} spy exact="true" offset={-80}>{t('nav.contact')}</LinkS>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <LanguageSelector />
        </div>
      )}

      <button
        type="button"
        className="mobile-menu"
        onClick={toggle}
        aria-label="Abrir menú"
        aria-expanded={false}
      >
        <FaBars />
      </button>
    </nav>
  )
}
