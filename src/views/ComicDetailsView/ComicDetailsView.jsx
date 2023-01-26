import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MvMain } from '@layout/MvMain/MvMain';
import { getComicDetailAction } from '@redux/actions/getComicDetailAction';
import { ComicDetailsViewDetailSection } from '@views/ComicDetailsView/sections/ComicDetailsViewDetailSection';
import { setLoadingAction } from '@redux/actions/setLoadingAction';

/**
 * ComicDetailsView.
 *
 * Purpose:
 * - Render the comic view.
 *
 * @returns ComicView page.
 */
const ComicDetailsView = () => {
  /**
   * id.
   *
   * Purpose:
   * - Obtain ID from url.
   */
  let { id } = useParams();

  const dispatch = useDispatch();

  /**
   * useEffect.
   *
   * Purpose:
   * - Dispatch an action to get details about one comic.
   */
  useEffect(() => {
    dispatch(setLoadingAction());
    dispatch(
      getComicDetailAction({
        id: id,
      }),
    );
  }, [dispatch]);

  return (
    <MvMain>
      <ComicDetailsViewDetailSection />
    </MvMain>
  );
};

export default ComicDetailsView;
