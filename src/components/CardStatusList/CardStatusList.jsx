/* eslint-disable react/prop-types */
import { CardItem } from "../CardItem/CardItem.jsx";
import { TASK_STATUSES } from "../../data";
import { CardsDiv, ColumnTitleDiv, ColumnTitleP, MainColumnDiv } from './CardStatusList.styled.js';


export const CardStatusList = ({tasks, statusCode}) => {
    const status = TASK_STATUSES[statusCode];
    const statusName = status?.name ?? statusCode;

    return (
        <MainColumnDiv>
            <ColumnTitleDiv>
                <ColumnTitleP>{statusName}</ColumnTitleP>
            </ColumnTitleDiv>
            <CardsDiv>
                {
                     tasks
                         .filter(t => t.status === statusCode)
                         .map(t => <CardItem key={t._id} cardItem={t}/>)
                }
            </CardsDiv>
        </MainColumnDiv>
    );
};