import { useEffect } from "react"
import { MvMain } from "@layout/MvMain/MvMain"
import { useDispatch, useSelector } from "react-redux"
import { getCharactersAction } from "@redux/actions/getCharactersAction"
import { CharacterViewCharactersSection } from "@views/CharacterView/sections/CharacterViewCharactersSection/CharacterViewCharactersSection"
import { CharacterViewPaginationSection } from "@views/CharacterView/sections/CharacterViewPaginationSection/CharacterViewPaginationSection"
import { setLoadingAction } from "@redux/actions/setLoadingAction"


/**
 * CharacterView.
 * 
 * Purpose:
 * - Render page characters.
 * 
 * @returns page with a list of characters
 */
const CharacterView = () => {

  const dispatch = useDispatch()

  /**
   *  offset.
   * 
   * Purpose:
   * - Capture a number from reducer.
   */
  const offset = useSelector(store => store.changeCharctersOffsetReducer.offset)

  /**
   * useEffect.
   * 
   * Purpose: 
   * - Dispatch an action to get all characters.
   */
  useEffect(() => {
    dispatch(setLoadingAction())
    dispatch(getCharactersAction({ offset: offset }))
  },[dispatch, offset])

  return (
    <MvMain>
      <CharacterViewPaginationSection />
      <CharacterViewCharactersSection />
    </MvMain>
  )
}

export default CharacterView