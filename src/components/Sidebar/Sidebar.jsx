import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { animateScroll as scroll, Link as LinkS } from 'react-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export const Sidebar = ({ isOpen, toggle }) => {
  const { t } = useTranslation()
    const router = useRouter()
    const className = `sidebar-container ${isOpen ? "open" : ""}`;

    // The aside declares aria-modal, so Escape has to dismiss it —
    // otherwise keyboard users have only a mouse target to get out.
    useEffect(() => {
        if (!isOpen) return undefined
        const onKeyDown = (e) => {
            if (e.key === 'Escape') toggle()
        }
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [isOpen, toggle])
    // const toggleHome = () => {
    //     scroll.scrollToTop()
    // }
    return (
        <aside
            className={className}
            // Only a click on the backdrop itself closes. Handing this to
            // every descendant meant the close button and the links fired
            // toggle twice — once themselves, once on the way up — which
            // cancelled out and left the menu open.
            onClick={(e) => {
                if (e.target === e.currentTarget) toggle()
            }}
            role="dialog"
            aria-modal="true"
            aria-label={t('sidebar.navMenu')}
        >
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


