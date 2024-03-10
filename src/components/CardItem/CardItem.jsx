/* eslint-disable react/prop-types */
import calendarSvg from '../../assets/calendar.svg';
import { CardButtonDot, CardButtons, CardDate, CardDateImg, CardDateP, CardTitle, DivCardContent, DivCardGroup, DivCardsCard, DivCardsItem } from './CardItem.styled.js';
import { CategoryLabel } from '../CategoryLabel/CategoryLabel.jsx';
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { useContext } from 'react';
import { PopupContext } from '../../context/PopupContext.jsx';

export const CardItem = ({cardItem}) => {    
    const {showBrowsePopup} = useContext(PopupContext);

    const handleEditClick = e => {
        e.preventDefault();
        showBrowsePopup(cardItem);
    }

    return (
        <DivCardsItem>
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
    );
};