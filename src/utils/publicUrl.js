/**
 * Root-relative URL for assets and data served from public/.
 * Keeping paths absolute lets them resolve from any route depth
 * (e.g. /portfolio/react).
 */
const toPublicPath = (path) => `/${path}`.replace(/\/+/g, '/')

export const getDataUrl = toPublicPath
export const getImageUrl = toPublicPath
