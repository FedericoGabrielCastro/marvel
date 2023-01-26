import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { MvMain } from "@layout/MvMain/MvMain"
import { ComicViewComicsSection } from "@views/ComicView/sections/ComicViewComicsSection"
import { getComicsAction } from "@redux/actions/getComicsAction"
import { setLoadingAction } from "@redux/actions/setLoadingAction"

/**
 * ComicView.
 * 
 * Purpose: 
 * - Show comic view page.
 * 
 * @returns Comics view page.
 */
const ComicView = () => {

    const dispatch = useDispatch()

    /**
     * useEffect.
     * 
     * Purpose:
     * - Dispatch an action to get all comics.
     */
    useEffect(() => {
        dispatch(setLoadingAction())
        dispatch(getComicsAction())
    },[dispatch])

    return (
        <MvMain>
            <ComicViewComicsSection />
        </MvMain>
    )
}

export default ComicView