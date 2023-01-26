import { MvSection } from "@layout/MvSection/MvSection"
import { useSelector } from "react-redux"
import { MvCard } from "@layout/MvCard/MvCard"
import { useNavigate } from "react-router-dom"
import { MvLoading } from "@layout/MvLoading/MvLoading"

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
     * loadingStatus.
     * 
     * Purpose:
     * - Get boolean state from loading reducer. 
     */
    const loadingStatus = useSelector(store => store.charactersReducer.loading)

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

    /**
     * Purpose:
     * - Check if the page is loading.
     */
    if (loadingStatus) return <MvLoading />

    return (
        <MvSection>
            {
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
            }
        </MvSection>
    )
}
