/* eslint-disable react/prop-types */
import { DragDropContext } from 'react-beautiful-dnd';
import { TASK_STATUSES } from '../../data';
import { CardStatusList } from '../CardStatusList/CardStatusList';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';


export const CardBoard = ({tasks}) => {
    const {editTask} = useContext(DataContext);

    const onDragEnd = async result => {
        const task = tasks.find(t => t._id === result.draggableId);
        
        const status = result.destination?.droppableId;
        if(!status){
            return;
        }

        // const newTask = {
        //     ...task,
        //     status
        // };

        task.status = status;

        await editTask(task)
        .catch(error => alert(error));
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {Object.keys(TASK_STATUSES).map((s, i) => 
                <CardStatusList key={i} tasks={tasks} statusCode={s}/>
            )}
        </DragDropContext>
    );
};