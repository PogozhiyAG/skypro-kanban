import { useParams } from "react-router-dom";

export const Card = () => {
    const {cardId} = useParams();
    
    return (
        <>
            <h1>Просмотр карточки</h1>
            <div>
                CardId: {cardId}
            </div>
        </>
    );
}