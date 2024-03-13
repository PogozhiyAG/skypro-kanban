/* eslint-disable react/prop-types */
import { CardItem } from "../CardItem/CardItem.jsx";
import { TASK_STATUSES } from "../../data";
import { CardsDiv, ColumnTitleDiv, ColumnTitleP, MainColumnDiv } from './CardStatusList.styled.js';
import { Droppable } from "react-beautiful-dnd";


export const CardStatusList = ({tasks, statusCode}) => {
    const status = TASK_STATUSES[statusCode];
    const statusName = status?.name ?? statusCode;

    return (        
        <MainColumnDiv>
            <ColumnTitleDiv>
                <ColumnTitleP>{statusName}</ColumnTitleP>
            </ColumnTitleDiv>
            <Droppable droppableId={statusCode}>
                {(provided) => (
                    <CardsDiv
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        {
                            tasks
                                .filter(t => t.status === statusCode)
                                .map((t, i) => <CardItem key={t._id} cardItem={t} index={i}/>)
                        }
                        {provided.placeholder}
                    </CardsDiv>
                )}
            </Droppable>
        </MainColumnDiv>
    );
};