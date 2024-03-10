/* eslint-disable react/prop-types */
import { TASK_STATUSES } from "../../data";
import { StatusDiv, StatusP } from "./StatusLabel.styled";

export const StatusLabel = ({code, $isActive, onClick, className}) => {
    const status = TASK_STATUSES[code];
    const statusName = status?.name ?? code
    
    return (
        <StatusDiv $isActive={$isActive} onClick={onClick} className={className}>
            <StatusP $isActive={$isActive}>{statusName}</StatusP>
        </StatusDiv>
    );
}