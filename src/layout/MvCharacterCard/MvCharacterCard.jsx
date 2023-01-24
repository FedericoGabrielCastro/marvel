/**
 * MvCharacterCard.
 * 
 * Puporse:
 * - Create a card with character.
 * 
 * @param onClick Function onCLick.
 * @param name Name character.
 * @param image Image character.
 * @returns Character card.
 */
export const MvCharacterCard = ({name, image, onClick }) => {
    return (
        <div className="MvCharacterCard" onClick={onClick}>
            <p className="MvCharacterCard__name">{name}</p>
            <img className="MvCharacterCard__image" src={image} alt={name}/>
        </div>
    )
}
