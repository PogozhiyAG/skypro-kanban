/* eslint-disable react/prop-types */
import { DragDropContext } from 'react-beautiful-dnd';
import { TASK_STATUSES } from '../../data';
import { CardStatusList } from '../CardStatusList/CardStatusList';


export const CardBoard = ({tasks}) => {
    const onDragEnd = result => {
        console.log(result);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {Object.keys(TASK_STATUSES).map((s, i) => 
                <CardStatusList key={i} tasks={tasks} statusCode={s}/>
            )}
        </DragDropContext>
    );
};