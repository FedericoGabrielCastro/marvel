import axios from 'axios';
import md5 from 'md5';

/**
 * time.
 *
 * Purpose:
 * - Its required to use marvel api.
 */
const time = Number(new Date());

/**
 * hash.
 *
 * Purpose:
 * - Md5 time + PrivateKey + PublicKey (required to use marvel api.)
 *
 * References:
 * - https://www.npmjs.com/package/md5
 */
const hash = md5(
  time + import.meta.env.VITE_MARVEL_PRIVATE_KEY + import.meta.env.VITE_MARVEL_PUBLIC_KEY,
);

/**
 * marvelInstance.
 *
 * Purpose:
 * - Create an axios instance to manage all request.
 *
 * Reference:
 * - https://axios-http.com/docs/intro
 */
export const marvelInstance = axios.create({
  baseURL: import.meta.env.VITE_MARVEL_BASE_URL,
  timeout: 15000,
  params: {
    ts: time,
    apikey: import.meta.env.VITE_MARVEL_PUBLIC_KEY,
    hash: hash,
  },
});
