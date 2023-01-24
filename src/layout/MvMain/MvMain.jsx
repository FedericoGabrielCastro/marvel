import React from 'react'

/**
 * MvMain
 * 
 * Purpose:
 * - Envolve pages with a mian.
 * 
 * @param children Render a Function Component. 
 * @returns Main with children.
 */
export const MvMain = ({children}) => {
  return (
    <main className='MvMain'>
      {children}
    </main>
  )
}
