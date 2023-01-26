import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCharacterDetailAction } from "@redux/actions/getCharacterDetailAction"
import { useParams } from "react-router-dom" 
import { MvMain } from "@layout/MvMain/MvMain"
import { CharacterDetailViewCharacterSection } from "@views/CharacterDetailsView/sections/CharacterDetailViewCharacterSection/CharacterDetailViewCharacterSection"
import { setLoadingAction } from "@redux/actions/setLoadingAction"

/**
 * CharacterDetailsView.
 * 
 * Purpose:
 * - Render page character details
 * 
 * References:
 * - https://es.stackoverflow.com/questions/519911/obtener-la-url-de-la-pagina-que-se-visita-con-react
 * - https://pablomonteserin.com/curso/react/react-router/
 * 
 * @returns Character details view.
 */
const CharacterDetailsView = () => {

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
     * - Send id into an action and wait to reducer.
     */
    useEffect(() => {
        dispatch(setLoadingAction())
        dispatch(getCharacterDetailAction({
            id: id
        }))
    },[dispatch])

    return (
        <MvMain>
            <CharacterDetailViewCharacterSection />
        </MvMain>
    )
}

export default CharacterDetailsView