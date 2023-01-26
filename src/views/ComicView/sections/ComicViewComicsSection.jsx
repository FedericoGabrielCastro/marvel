import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { MvSection } from "@layout/MvSection/MvSection"
import { MvLink } from "@layout/MvLink/MvLink"
import { BsArrowRight } from "react-icons/bs"
import { MvLoading } from "@layout/MvLoading/MvLoading"


/**
 * ComicViewComicsSection.
 * 
 * Purpose:
 * - Section to show all comics.
 */
export const ComicViewComicsSection = () => {

    /**
     * useNavigate.
     *
     * Purpose:
     * - Hook navigate (navigate to anohter page)
     */
    const navigate = useNavigate()

    
    /**
     * comicsList.
     * 
     * Purpose:
     * - Get comics from reducer store.
    */
   const comicsList = useSelector(store => store.comicsReducer.comics)
   
    /**
     * loadingStatus
     * 
     * Purpose:
     * - Get boolean loading state.
     */
    const loadingStatus = useSelector(store => store.comicsReducer.loading)


    /**
     * Purpose:
     * - Check if the page is loading.
     */
    if (loadingStatus) return <MvLoading />

    return (
        <MvSection>
            <div className="comicSection">
                <table className="comicSection__table">
                    <thead className="comicSection__table__thead">
                        <tr>
                            <th className="noDisplay-600">Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>detail</th>
                        </tr>
                    </thead>
                    <tbody className="comicSection__table__thbody">
                        {
                            comicsList.map((comic) => 
                                <tr key={comic.id} className="comicSection__table__thbody__tr">
                                    <td className="comicSection__table__thbody__tr__td noDisplay-600">
                                        <img 
                                            className="comicSection__table__thbody__tr__td__img"
                                            src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} 
                                            alt="img"
                                        />
                                    </td>
                                    <td className="comicSection__table__thbody__tr__td">{comic.title}</td>
                                    <td className="comicSection__table__thbody__tr__td">$ {comic?.prices[0].price}</td>
                                    <td className="comicSection__table__thbody__tr__td">
                                        <MvLink path={`/comic/${comic.id}`} icon={<BsArrowRight />}/>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {/* TODO: button to get more results. */}
            </div>
        </MvSection>
    )
}
