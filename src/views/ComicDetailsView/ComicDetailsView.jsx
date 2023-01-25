import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom" 
import { MvMain } from "@layout/MvMain/MvMain"
import { getComicDetailAction } from "@redux/actions/getComicDetailAction"

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
    let { id } = useParams()

    const dispatch = useDispatch()

    /**
     * useEffect.
     * 
     * Purpose:
     * - Dispatch an action to get details about one comic.
     */
    useEffect(() => {
        dispatch(getComicDetailAction({
            id: id
        }))
    },[dispatch])

    return (
        <MvMain>ComicDetailsView</MvMain>
    )
}

export default ComicDetailsView