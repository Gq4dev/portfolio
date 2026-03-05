/**
 * Base URL para assets y datos en public/.
 * Usar en todas las rutas para que funcionen en cualquier nivel de la app (ej. /portfolio/react).
 */
export const PUBLIC_URL = '';

export const getDataUrl = (path) => `${PUBLIC_URL}/${path}`.replace(/\/+/g, '/');
export const getImageUrl = (path) => `${PUBLIC_URL}/${path}`.replace(/\/+/g, '/');
