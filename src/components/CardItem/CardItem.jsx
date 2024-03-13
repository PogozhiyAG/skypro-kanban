/* eslint-disable react/prop-types */
import calendarSvg from '../../assets/calendar.svg';
import { CardButtonDot, CardButtons, CardDate, CardDateImg, CardDateP, CardTitle, DivCardContent, DivCardGroup, DivCardsCard, DivCardsItem } from './CardItem.styled.js';
import { CategoryLabel } from '../CategoryLabel/CategoryLabel.jsx';
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { useContext } from 'react';
import { PopupContext } from '../../context/PopupContext.jsx';
import { Draggable } from 'react-beautiful-dnd';

export const CardItem = ({cardItem, index}) => {    
    const {showBrowsePopup} = useContext(PopupContext);

    const handleEditClick = e => {
        e.preventDefault();
        showBrowsePopup(cardItem);
    }

    return (
        <Draggable draggableId={cardItem._id} index={index}>
            {(provided) => (
                <DivCardsItem
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <DivCardsCard>
                        <DivCardGroup>
                            <CategoryLabel code={cardItem.topic}/>
                            <a onClick={handleEditClick}>
                                <CardButtons>
                                    <CardButtonDot/>
                                    <CardButtonDot/>
                                    <CardButtonDot/>
                                </CardButtons>
                            </a>
                        </DivCardGroup>
                        <DivCardContent>
                            <CardTitle onClick={handleEditClick}>{cardItem.title}</CardTitle>
                            <CardDate>
                            <CardDateImg src={calendarSvg}></CardDateImg>
                                <CardDateP>{format(cardItem.date, 'P', {locale: ru})}</CardDateP>
                            </CardDate>
                        </DivCardContent>
                    </DivCardsCard>
                </DivCardsItem>
            )}
        </Draggable>
    );
};