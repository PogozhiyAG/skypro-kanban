/* eslint-disable react/prop-types */
import calendarSvg from '../../assets/calendar.svg';
import { TASK_CATEGORY } from '../../data.js';
import { CardButtonDot, CardButtons, CardDate, CardDateImg, CardDateP, CardTitle, DivCardContent, DivCardGroup, DivCardTheme, DivCardsCard, DivCardsItem, PCardCategory } from './CardItem.styled.js';

export const CardItem = ({cardItem}) => {
    const category = TASK_CATEGORY[cardItem.category];
    const categoryName = category?.name ?? cardItem.category;
    const categoryClass = category.class ?? '';

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
                    <a href="" target="_blank">
                        <CardTitle>{cardItem.name}</CardTitle>
                    </a>
                    <CardDate>
                    <CardDateImg src={calendarSvg}></CardDateImg>
                        <CardDateP>{cardItem.date}</CardDateP>
                    </CardDate>
                </DivCardContent>
            </DivCardsCard>
        </DivCardsItem>
    );
};