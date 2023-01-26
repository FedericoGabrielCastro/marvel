import { MvPagination } from '@layout/MvPagination/MvPagination';
import { useDispatch, useSelector } from 'react-redux';
import { changeCharctersOffsetAction } from '@redux/actions/changeCharctersOffsetAction';

export const CharacterViewPaginationSection = () => {
  const dispatch = useDispatch();

  /**
   * totalResults.
   *
   * Purpose:
   * - Get total characters.
   */
  const totalResults = useSelector((store) => store.charactersReducer.totalResults);

  /**
   * pageCount.
   *
   * Purpose:
   * - Math ciel totalResults
   * - items por page for default and only for this app is always 20.
   */
  const pageCount = Math.ceil(totalResults / 20);

  /**
   * handleClickPagination.
   *
   * Purpose:
   * - Send to api a number to get characters.
   */
  const handleClickPagination = (data) => {
    const newOffset = (data.selected * 20) % totalResults;

    dispatch(
      changeCharctersOffsetAction({
        offset: newOffset,
      }),
    );
  };

  return <MvPagination clickPagination={handleClickPagination} pageCount={pageCount} />;
};
