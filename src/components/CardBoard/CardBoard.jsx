/* eslint-disable react/prop-types */
import { TASK_STATUSES } from '../../data';
import { CardStatusList } from '../CardStatusList/CardStatusList';
import { PopBrowse } from '../popups/PopBrowse/PopBrowse';

export const CardBoard = ({tasks}) => {
    return (
        <>
            {Object.keys(TASK_STATUSES).map((s, i) => 
                <CardStatusList key={i} tasks={tasks} statusCode={s}/>
            )}
            
            <PopBrowse/>
        </>
    );
};