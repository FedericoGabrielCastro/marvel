import { useEffect } from 'react';
import { motion } from 'framer-motion';

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
   * fadeInUp
   *
   * Purpose:
   * - Animation on change page.
   */
  const fadeInUP = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  /**
   * Purpose:
   * - scroll to top when something change.
   */
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.main variants={fadeInUP} initial='initial' animate='animate' className='MvMain'>
      {children}
    </motion.main>
  );
};
