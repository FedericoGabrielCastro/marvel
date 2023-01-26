import { useEffect } from 'react';

/**
 * MvMain
 *
 * Purpose:
 * - Envolve pages with a mian.
 *
 * @param children Render a Function Component.
 * @returns Main with children.
 */
export const MvMain = ({ children }) => {
  /**
   * Purpose:
   * - scroll to top when something change.
   */
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return <main className='MvMain'>{children}</main>;
};
