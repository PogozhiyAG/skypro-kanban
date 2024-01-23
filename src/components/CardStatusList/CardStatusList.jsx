/* eslint-disable react/prop-types */
import './CardStatusList.css';
import { CardItem } from "../CardItem/CardItem";
import { TASK_STATUSES } from "../../data";


export const CardStatusList = ({tasks, statusCode}) => {
    const status = TASK_STATUSES[statusCode];
    const statusName = status?.name ?? statusCode;

    return (
        <div className="main__column ">
            <div className="column__title">
                <p>{statusName}</p>
            </div>
            <div className="cards">
                {
                    tasks
                        .filter(t => t.status === statusCode)
                        .map((t, i) => <CardItem key={i} cardItem={t}/>)
                }
            </div>
        </div>		
    );
};