import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="Portfolio de Guillermo Quattrocchi - Senior SAP UI5 / Fiori Developer. Apps Fiori a medida para ecosistemas SAP enterprise, y fullstack React y Node." />
        <meta name="author" content="Guillermo Quattrocchi" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gq4dev.com/" />
        <meta property="og:title" content="Guillermo Quattrocchi | Senior SAP BTP Developer" />
        <meta property="og:description" content="SAP UI5, Fiori, BTP y CAP. 15+ años en IT, 5+ en desarrollo." />
        <meta property="og:image" content="/images/portfolio.jpeg" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guillermo Quattrocchi | Senior SAP BTP Developer" />
        <meta name="twitter:description" content="SAP UI5, Fiori, BTP y CAP. 15+ años en IT, 5+ en desarrollo." />
        <meta name="twitter:image" content="/images/portfolio.jpeg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@200;400;700&display=swap&family=Days+One&family=Secular+One&family=Stick+No+Bills:wght@500&display=swap"
          rel="stylesheet"
        />

        {/* Theme init: evita flash de tema incorrecto */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
