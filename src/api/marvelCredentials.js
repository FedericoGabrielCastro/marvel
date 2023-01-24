/**
 * marvelCredentials.
 * 
 * Purpose:
 * - Provider credentials request to fetch api.
 * 
 */
export const marvelCredentials = `?ts=${import.meta.env.VITE_MARVEL_API_TS}&apikey=${import.meta.env.VITE_MARVEL_API_KEY}&hash=${import.meta.env.VITE_MARVEL_API_HASH}`