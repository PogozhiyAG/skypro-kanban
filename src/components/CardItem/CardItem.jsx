/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import calendarSvg from '../../assets/calendar.svg';
import { CardButtonDot, CardButtons, CardDate, CardDateImg, CardDateP, CardTitle, DivCardContent, DivCardGroup, DivCardsCard, DivCardsItem } from './CardItem.styled.js';
import { CategoryLabel } from '../CategoryLabel/CategoryLabel.jsx';

export const CardItem = ({cardItem}) => {
    const cardUrl = `/card/${cardItem._id}`;

    return (
        <DivCardsItem>
            <DivCardsCard>
                <DivCardGroup>
                    <CategoryLabel code={cardItem.topic}/>
                    <a href="#popBrowse" target="_self">
                        <CardButtons>
                            <CardButtonDot/>
                            <CardButtonDot/>
                            <CardButtonDot/>
                        </CardButtons>
                    </a>
                </DivCardGroup>
                <DivCardContent>
                    <Link to={cardUrl}>
                        <CardTitle>{cardItem.title}</CardTitle>
                    </Link>
                    <CardDate>
                    <CardDateImg src={calendarSvg}></CardDateImg>
                        <CardDateP>{cardItem.date}</CardDateP>
                    </CardDate>
                </DivCardContent>
            </DivCardsCard>
        </DivCardsItem>
    );
};