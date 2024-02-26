/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import calendarSvg from '../../assets/calendar.svg';
import { TASK_CATEGORY } from '../../data.js';
import { CardButtonDot, CardButtons, CardDate, CardDateImg, CardDateP, CardTitle, DivCardContent, DivCardGroup, DivCardTheme, DivCardsCard, DivCardsItem, PCardCategory } from './CardItem.styled.js';

export const CardItem = ({cardItem}) => {
    const category = TASK_CATEGORY[cardItem.topic];
    const categoryName = category?.name ?? cardItem.topic;
    const categoryClass = category?.class ?? '';

    const cardUrl = `/card/${cardItem._id}`;

    return (
        <DivCardsItem>
            <DivCardsCard>
                <DivCardGroup>
                    <DivCardTheme $categoryclass={categoryClass}>
                        <PCardCategory $categoryclass={categoryClass}>{categoryName}</PCardCategory>
                    </DivCardTheme>
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