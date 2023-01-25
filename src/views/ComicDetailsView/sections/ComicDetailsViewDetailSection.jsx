import { useSelector } from "react-redux"
import { MvSection } from "@layout/MvSection/MvSection"

/**
 * ComicDetailsViewDetailSection.
 * 
 * Purpose:
 * - Show all data about the comic.
 * 
 * @returns comic detail section.
 */
export const ComicDetailsViewDetailSection = () => {

    /**
     * comicData.
     * 
     * Purpose:
     * - Get comic data from redux store.
     */
    const comicData = useSelector(store => store.comicDetailReducer.comic)

    /**
     * imageComic.
     * 
     * Purpose:
     * - Load image comic.
     */
    const imageComic = `${comicData?.thumbnail?.path}.${comicData?.thumbnail?.extension}`

    /**
     * priceComic.
     * 
     * Purpose:
     * - Load price comic.
     */
    const priceComic = `$ ${comicData?.prices?.map(price => price.price)}`

    return (
        <MvSection>
            <div className="comicDetail">
                <div className="comicDetail__title">
                    <h1>{comicData.title}</h1>
                    <span>{priceComic}</span>
                </div>
                <div className="comicDetail__data">
                    <img className="comicDetail__data__image" src={imageComic} alt={comicData.title} />
                    {
                        comicData.description ? 
                            <p className="comicDetail__data__description" >{comicData.description}</p>
                            : <p className="comicDetail__data__description">No data found in our database :(</p>
                    }
                </div>
            </div>
        </MvSection>
    )
}
