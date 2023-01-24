import { MvMain } from "@layout/MvMain/MvMain"
import { HomeViewOptionSection } from "./sections/HomeViewOptionSection/HomeViewOptionSection"


/**
 * HomeView.
 * 
 * Purpose:
 * - Render a presentation page.
 * 
 * @returns Home view
 */
const HomeView = () => {
  return (
    <MvMain>
      <HomeViewOptionSection />
    </MvMain>
  )
}

export default HomeView