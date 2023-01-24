/**
 * MvSection.
 * 
 * Purpose:
 * - Envolve sections pages with a section.
 * 
 * @param children Render a Function Component. 
 * @returns section with children.
 */
export const MvSection = ({children}) => {
  return (
    <section className="MpSection">
      {children}
    </section>
  )
}
