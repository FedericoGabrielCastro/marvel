import { MvSection } from "@layout/MvSection/MvSection"
import { useSelector } from "react-redux"
import { MvCard } from "@layout/MvCard/MvCard"
import { useNavigate } from "react-router-dom"

/**
 * CharacterViewCharactersSection.
 * 
 * Puporse:
 * - Show characters section.
 * 
 * @returns CharacterView section.
 */
export const CharacterViewCharactersSection = () => {

    /**
     * useNavigate.
     *
     * Purpose:
     * - Hook navigate (navigate to anohter page)
     */
    const navigate = useNavigate()

    /**
     * charactersList.
     * 
     * Purpose:
     * - Get characters from reducer store.
     */
    const charactersList = useSelector(store => store.charactersReducer.characters)

    /**
     * handleClickCharacter.
     * 
     * Puporse:
     * - Capture the id of card and go to character detail.
     * 
     * @param id ID of character card. 
     */
    const handleClickCharacter = (id) => {
        navigate(`/character/${id}`)
    }

    return (
        <MvSection>
            <div className="charactersSection">
                {
                    charactersList.map((character) => 
                        <MvCard 
                            key={character.id}
                            onClick={() => handleClickCharacter(character.id)}
                            name={character.name} 
                            image={`${character.thumbnail.path}.${character.thumbnail.extension} `}
                        />
                    )
                }
            </div>
        </MvSection>
    )
}
