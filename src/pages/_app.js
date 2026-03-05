import '../index.css'
import '../Routes/App.css'
import '../components/Navbar/Navbar.css'
import '../components/Sidebar/Sidebar.css'
import '../components/Banner/Banner.css'
import '../components/About/About.css'
import '../components/Categories/Categories.css'
import '../components/CategoryCard/CategoryCard.css'
import '../components/Projects/Projects.css'
import '../components/ProjectCard/ProjectCard.css'
import '../components/Footer/Footer.css'
import '../components/LanguageSelector.css'
import '../i18n'
import { useState } from 'react'
import { ThemeProvider } from '../context/ThemeContext'
import { Navbar } from '../components/Navbar/Navbar'
import { Footer } from '../components/Footer/Footer'
import { Sidebar } from '../components/Sidebar/Sidebar'
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://851837d2bf86a47bc593f529737d3257@o4507375139225600.ingest.us.sentry.io/4507387147780096',
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/gq4dev\.com\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return (
    <ThemeProvider>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
