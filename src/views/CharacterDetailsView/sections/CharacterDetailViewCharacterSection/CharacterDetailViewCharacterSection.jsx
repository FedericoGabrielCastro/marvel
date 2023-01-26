import { useSelector } from 'react-redux';
import { MvSection } from '@layout/MvSection/MvSection';
import { MvLink } from '@layout/MvLink/MvLink';
import { BsArrowRight } from 'react-icons/bs';
import { MvLoading } from '@layout/MvLoading/MvLoading';

/**
 * CharacterDetailViewCharacterSection.
 *
 * Purpose:
 * - Section with all data about character.
 *
 * @returns Character section.
 */
export const CharacterDetailViewCharacterSection = () => {
  /**
   * characterData.
   *
   * Purpose:
   * - Get data character from redux store.
   */
  const characterData = useSelector((store) => store.characterDetailReducer.character);

  /**
   * loadingStatus
   *
   * Purpose:
   * - Get boolean loading state.
   */
  const loadingStatus = useSelector((store) => store.characterDetailReducer.loading);

  /**
   * imageCharacter.
   *
   * Purpose:
   * - Load image character.
   */
  const imageCharacter = `${characterData?.thumbnail?.path}.${characterData?.thumbnail?.extension}`;

  /**
   * comicsData.
   *
   * Purpose:
   * - Map character comics.
   */
  const comicsData = characterData.comics;

  /**
   * Purpose:
   * - Check if the page is loading.
   */
  if (loadingStatus) return <MvLoading />;

  return (
    <MvSection>
      <div className='characterDetail'>
        <div className='characterDetail__description'>
          <img
            className='characterDetail__description__image'
            src={imageCharacter}
            alt={characterData.name}
          />
          <div className='characterDetail__description__data'>
            <h1 className='characterDetail__description__data__name'>{characterData.name}</h1>
            <p className='characterDetail__description__data__about'>{characterData.description}</p>
            <p> Comics avaible: {comicsData?.available}</p>
          </div>
        </div>
        <table className='characterDetail__table'>
          <thead className='characterDetail__table__thead'>
            <tr>
              <th>It appears in</th>
              <th>Character detail</th>
            </tr>
          </thead>
          <tbody className='characterDetail__table__thbody'>
            {comicsData?.items.map((comic, index) => (
              <tr key={index} className='characterDetail__table__thbody__tr'>
                <td className='characterDetail__table__thbody__tr__td'>{comic.name}</td>
                <td className='characterDetail__table__thbody__tr__td'>
                  <MvLink
                    path={`/comic/${comic.resourceURI?.split('/').pop()}`}
                    icon={<BsArrowRight />}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MvSection>
  );
};
