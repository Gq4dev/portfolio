import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="Portfolio de Guillermo Quattrocchi - Full Stack Web Developer. React, Node.js, SAP UI5. Desarrollo web y aplicaciones." />
        <meta name="author" content="Guillermo Quattrocchi" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gq4dev.com/" />
        <meta property="og:title" content="Guillermo Quattrocchi | Full Stack Web Developer" />
        <meta property="og:description" content="Portfolio - React, Node.js, SAP UI5. +15 años en IT, enfocado en desarrollo web." />
        <meta property="og:image" content="/images/portfolio.jpeg" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guillermo Quattrocchi | Full Stack Web Developer" />
        <meta name="twitter:description" content="Portfolio - React, Node.js, SAP UI5." />
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
