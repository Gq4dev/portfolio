# Análisis del portfolio y propuestas de mejora (2025)

## Resumen del estado actual

- **Stack:** React 18, React Router v6, react-icons, react-scroll, Sentry, react-pdf
- **Estructura:** Home (Banner, About, Categories) → Portfolio por categoría (SAP UI5, React, Next.js)
- **Diseño:** Fondo negro, acento naranja/magenta, tipografía League Spartan + Days One
- **Datos:** JSON estático en `public/data` (categories.json, projects.json)

---

## 1. UX y accesibilidad (tendencias 2025)

### Problemas detectados
- **Navbar:** En móvil el menú no muestra los enlaces (solo el ícono de hamburguesa); el Sidebar se abre al hacer clic, pero no hay indicación visual de que el menú está disponible.
- **Banner:** Falta CTA claro (“Contrátame”, “Ver proyectos”, “Descargar CV”).
- **About:** Uso de `class` en lugar de `className` en algunos elementos (About.js líneas 75, 108).
- **Imagen de perfil:** El “profile-img” es un `div` con `background-image` y ruta relativa que puede fallar en build; mejor usar `<img>` con `src` desde `process.env.PUBLIC_URL` o import.
- **Footer:** No hay sección “Contact” real (formulario o CTA); solo enlaces sociales y email.
- **Focus y teclado:** No se aprecia gestión explícita de focus en Sidebar/menú para navegación por teclado.

### Propuestas
- Añadir **botón flotante o CTA** en el Banner: “Ver mi trabajo” (scroll a Portfolio) y “Descargar CV” (PDF).
- Corregir **class → className** y reemplazar el div de perfil por `<img>` con ruta correcta.
- Añadir **área de contacto** en Home o página dedicada: formulario (ej. Formspree/Netlify Forms) o botón “Hablemos” que lleve a WhatsApp/email.
- Mejorar **accesibilidad:** `aria-label` en iconos, `role="navigation"` en nav/sidebar, focus visible en enlaces y botones.
- **Reducir movimiento:** ofrecer `prefers-reduced-motion` para animaciones (nav, scroll, hovers).

---

## 2. Diseño visual y tendencias

### Estado actual
- Paleta: negro + blanco + naranja + magenta (hover).
- Tipografía: League Spartan (cuerpo), Days One (logo).
- Poco uso de gradientes, glassmorphism o modo oscuro/claro.

### Propuestas
- **Modo claro/oscuro:** Añadir toggle (por ejemplo en Navbar) y guardar preferencia en `localStorage`; mantener negro como default para coherencia con tu marca.
- **Micro-interacciones:** Botones con hover/active más definidos; cards de proyecto con ligero “lift” y sombra al hover (ya tienes algo en CategoryCard).
- **Jerarquía tipográfica:** Definir escala clara (ej. 1.25rem, 1.5rem, 2rem, 3rem) y usarla de forma consistente en títulos y subtítulos.
- **Espaciado:** Usar variables CSS para `--space-xs/sm/md/lg` y aplicar en secciones para ritmo visual más uniforme.
- **Hero/Banner:** Opción de fondo con gradiente sutil o imagen con overlay para mejorar legibilidad del texto.

---

## 3. SEO y rendimiento

### Problemas
- **index.html:** Solo un meta description genérico; falta Open Graph, Twitter Cards y posiblemente `lang="es"` si el contenido es en español.
- **Imágenes:** Uso de rutas como `./images/...` o `../images/...` que pueden romperse según la ruta (ej. en `/portfolio/react`); no hay `loading="lazy"` ni tamaños explícitos.
- **Datos:** Fetch a `./data/categories.json` en Home y `../data/projects.json` en Portfolio; en rutas anidadas `../data` puede no resolver bien en producción.

### Propuestas
- **SEO:** Añadir en `<head>`: `og:title`, `og:description`, `og:image`, `twitter:card`; considerar React Helmet o similar para títulos por página.
- **Idioma:** Si el sitio es en español, usar `<html lang="es">` y meta en español.
- **Imágenes:** Usar `process.env.PUBLIC_URL + '/images/...'` (o import) en todos los componentes; añadir `loading="lazy"` y `width`/`height` (o aspect-ratio) para evitar CLS.
- **JSON:** Servir datos desde `process.env.PUBLIC_URL + '/data/...'` para que la ruta sea correcta en cualquier nivel de la app.
- **Core Web Vitals:** Revisar que las fuentes no bloqueen el primer render (ya usas preconnect a Google Fonts, correcto).

---

## 4. Estructura y código

### Mejoras recomendadas
- **Keys en listas:** En `Projects.jsx` usar `key={project.title}` o un `id` único en cada proyecto (evitar índice).
- **Rutas de datos:** Centralizar la base URL de los JSON (const o env) y usarla en Categories y Projects.
- **Componentes:** Extraer secciones largas de About (Work History, Education, Certifications) a subcomponentes o datos en JSON para facilitar mantenimiento.
- **Sentry:** Revisar que `tracePropagationTargets` incluya tu dominio real (gq4dev.com) si usas backend propio.

---

## 5. Contenido y propuesta de valor

### Tendencias en portfolios dev (2025)
- **Mensaje claro en 5 segundos:** “Full Stack Web Developer” está bien; se puede reforzar con una línea tipo “React, Node, SAP UI5” o “+15 años en IT, ahora enfocado en desarrollo”.
- **Proyectos con impacto:** Incluir 1–2 frases por proyecto: problema, solución, stack y resultado (métricas si las hay).
- **Testimonios o recomendaciones:** Aunque sea una sola cita de LinkedIn o de un cliente, da confianza.
- **Blog o notas técnicas:** Opcional; un enlace a Medium/Dev.to o a una sección “Artículos” puede diferenciar.

### Propuestas
- Añadir en el Banner una **tagline** corta que refuerce tu especialización (ej. “React · Node.js · SAP UI5”).
- En **ProjectCard:** Mostrar tecnologías (tags) por proyecto si añades un campo `tech` en `projects.json`.
- Considerar una sección **“Por qué trabajar conmigo”** o **“Servicios”** (desarrollo web, SAP UI5, consultoría) con iconos o bullets.

---

## 6. Priorización sugerida

| Prioridad | Mejora | Esfuerzo |
|-----------|--------|----------|
| Alta | Corregir rutas de imágenes y JSON (PUBLIC_URL) | Bajo |
| Alta | Añadir CTA en Banner (CV + Ver proyectos) | Bajo |
| Alta | class → className y perfil como `<img>` | Bajo |
| Media | SEO: meta OG, lang, descripción | Bajo |
| Media | Toggle modo claro/oscuro | Medio |
| Media | Sección contacto (formulario o CTA) | Medio |
| Media | Lazy loading y atributos en imágenes | Bajo |
| Baja | Keys únicas y centralizar fetch de datos | Bajo |
| Baja | Subcomponentes o JSON para About | Medio |
| Baja | Tags de tecnologías en proyectos | Bajo |

---

## 7. Checklist rápido

- [x] Reemplazar todas las rutas de assets por `process.env.PUBLIC_URL + '/...'` (o import).
- [x] Corregir `class` → `className` en About.js y Footer.
- [x] Cambiar profile-img a `<img>` con src correcto.
- [ ] Añadir en Banner: botón “Ver portfolio” y “Descargar CV”.
- [x] Añadir meta OG/Twitter y lang es en index.html.
- [x] Añadir `loading="lazy"` en imágenes below the fold.
- [x] Mejorar keys en listas de proyectos (key={project.title}).
- [x] Añadir aria-labels en iconos sociales y menú.
- [x] Toggle dark/light y sección de contacto (CTA WhatsApp en Footer).

**Implementado en rama `feature/portfolio-mejoras-2025`.**
