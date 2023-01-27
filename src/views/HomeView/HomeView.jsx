import { MvMain } from '@layout/MvMain/MvMain';
import { HomeViewOptionSection } from '@views/HomeView/sections/HomeViewOptionSection/HomeViewOptionSection';
import { HomeViewTaskSection } from '@views/HomeView/sections/HomeViewTaskSection/HomeViewTaskSection';

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
      <HomeViewTaskSection />
    </MvMain>
  );
};

export default HomeView;
