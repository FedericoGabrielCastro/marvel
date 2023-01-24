import { useEffect } from "react"
import { MvMain } from "@layout/MvMain/MvMain"
import { useDispatch } from "react-redux"
import { getCharactersAction } from "@redux/actions/getCharactersAction"
import { CharacterViewCharactersSection } from "@views/CharacterView/sections/CharacterViewCharactersSection/CharacterViewCharactersSection"

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

  useEffect(() => {
    dispatch(getCharactersAction())
  },[dispatch])

  return (
    <MvMain>
      <CharacterViewCharactersSection />
    </MvMain>
  )
}

export default CharacterView