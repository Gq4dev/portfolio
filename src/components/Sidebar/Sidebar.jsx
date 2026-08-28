import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export const Sidebar = ({ isOpen, toggle }) => {
  const { t } = useTranslation()
    const router = useRouter()
    const className = `sidebar-container ${isOpen ? "open" : ""}`;
    // const toggleHome = () => {
    //     scroll.scrollToTop()
    // }
    return (
        <aside className={className} onClick={toggle} role="dialog" aria-modal="true" aria-label={t('sidebar.navMenu')}>
            <button type="button" className="icon" onClick={toggle} aria-label={t('sidebar.closeMenu')}>
                <FaTimes />
            </button>
            {router.pathname === "/" ? (
                <div className='sidebar-wrapper'>
                    <div className='sidebar-menu'>
                        <LinkS to="/" 
                         className='sidebar-link'
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact='true'
                         offset={-80} onClick={toggle}>
                            {t('nav.home')}
                        </LinkS>
                        <LinkS to="about"
                            className='sidebar-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle} >{t('nav.about')}</LinkS>
                        <LinkS to="portfolio"
                            className='sidebar-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle} >{t('nav.portfolio')}</LinkS>
                        <LinkS to="contact"
                            className='sidebar-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle} >{t('nav.contact')}</LinkS>
                    </div>
                </div>
            ) : (
                <div className='sidebar-menu'>
                    <Link className='sidebar-link' href="/" onClick={toggle}>
                        {t('nav.home')}
                    </Link>
                    <LinkS to="contact"
                            className='sidebar-link'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={toggle} >{t('nav.contact')}</LinkS>
                </div>
            )}
        </aside>
    )
}


