import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  {
    ignores: ['node_modules/**', 'dist/**', '.next/**', 'out/**', 'build/**'],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      // next/image optimizes nothing under `output: 'export'` with
      // `images.unoptimized`, and every <img> here already sets explicit
      // dimensions and lazy loading. Revisit if the site stops being static.
      '@next/next/no-img-element': 'off',
    },
  },
]

export default config
