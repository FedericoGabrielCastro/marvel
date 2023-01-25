import { Link } from "react-router-dom"

/**
 * MvLink.
 * 
 * Purpose:
 * - Render a custom link.
 * 
 * @param text Text to show.
 * @param path Link require string path. 
 * @param icon icon to show.
 * @returns 
 */
export const MvLink = ({path, text, icon}) => {
  return (
    <Link className="MvLink" to={path}>{text}{icon}</Link>
  )
}
