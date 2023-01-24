import { Link } from "react-router-dom"

import { MvLink } from "../MvLink/MvLink"

/**
 * MvHeader.
 * 
 * Purpose:
 * - Render navbar with navigation.
 * 
 * @returns Navbar
 */
export const MvHeader = () => {
  return (
    <div className="MvHeader">
      <MvLink path="/characters" text="Characters" />
      <MvLink path="/comic" text="Comics" />
    </div>
  )
}

export default MvHeader