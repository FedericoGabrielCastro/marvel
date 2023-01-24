import React from 'react'

/**
 * MvMain
 * 
 * Purpose:
 * - Envolve pages with a mian.
 * 
 * @param children Render a Function Component. 
 * @returns 
 */
export const MvMain = ({children}) => {
  return (
    <main data-testid="main-page">
      {children}
    </main>
  )
}
