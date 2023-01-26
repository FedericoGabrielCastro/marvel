import { Link } from 'react-router-dom';

import { MvLink } from '../MvLink/MvLink';

/**
 * MvHeader.
 *
 * Purpose:
 * - Render navbar with navigation.
 *
 * @returns Navbar
 */
export const MvHeader = () => {
  /**
   * Purpose:
   * - scroll to top when something change.
   */
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className='MvHeader'>
      <MvLink path='/' text='Home' />
      <MvLink path='/character' text='Characters' />
      <MvLink path='/comic' text='Comics' />
    </div>
  );
};

export default MvHeader;
