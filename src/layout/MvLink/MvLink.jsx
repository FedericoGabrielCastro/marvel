import { Link } from "react-router-dom"

/**
 * MvLink.
 * 
 * Purpose:
 * - Render a custom link.
 * 
 * @param text Text to show.
 * @param path Link require string path. 
 * @returns 
 */
export const MvLink = ({path, text}) => {
  return (
    <Link className="MvLink" to={path}>{text}</Link>
  )
}
