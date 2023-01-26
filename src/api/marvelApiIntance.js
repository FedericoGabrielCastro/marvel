import axios from 'axios';
import md5 from 'md5';
import { toast } from 'react-hot-toast';

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
  timeout: 5000,
  params: {
    ts: time,
    apikey: import.meta.env.VITE_MARVEL_PUBLIC_KEY,
    hash: hash,
  },
});

/**
 * Purpose:
 * - Dispatch a toast when marvelInstance return error status 409
 *
 * -Note:
 * - "Minimum error handling" can be handled from these interceptors or they are stored in redux.
 */
marvelInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 409:
        toast.error(`Error: ${error.response.data.code} - ${error.response.data.status}`);
        break;
      case 404:
        toast.error(`Error: ${error.response.status} - ${error.response.statusText}`);
        break;
      default:
        console.log('an interceptor is missing for that status');
    }
  },
);
