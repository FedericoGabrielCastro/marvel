/**
 * MvCard.
 * 
 * Puporse:
 * - Create a card.
 * 
 * @param onClick Function onCLick.
 * @param name Name.
 * @param image Image.
 * @returns card.
 */
export const MvCard = ({name, image, onClick }) => {
    return (
        <div className="mvCard" onClick={onClick}>
            <p className="mvCard__name">{name}</p>
            <img className="mvCard__image" src={image} alt={name}/>
        </div>
    )
}
