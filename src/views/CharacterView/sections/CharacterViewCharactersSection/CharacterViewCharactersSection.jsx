import { MvSection } from "@layout/MvSection/MvSection"
import { useSelector } from "react-redux"
import { MvCharacterCard } from "@layout/MvCharacterCard/MvCharacterCard"

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
        
    }

    return (
        <MvSection>
            <div className="charactersSection">
                {
                    charactersList.map((character) => 
                        <MvCharacterCard 
                            key={character.id}
                            onClick={() => handleClickCharacter(character.id)}
                            id={character.id} 
                            name={character.name} 
                            image={`${character.thumbnail.path}.${character.thumbnail.extension} `}
                        />
                    )
                }
            </div>
        </MvSection>
    )
}
