/* eslint-disable react/prop-types */
import { TASK_CATEGORY } from "../../data";
import { CategoryDiv, CategoryP } from "./CategoryLabel.styled"

export const CategoryLabel = ({code, $size, onClick, className}) => {
    const category = TASK_CATEGORY[code];
    const categoryName = category?.name ?? code;
    const categoryClass = category?.class ?? '';

    return (
        <CategoryDiv $categoryClass={categoryClass} $size={$size} onClick={onClick} className={className}>
            <CategoryP $categoryClass={categoryClass} $size={$size}>{categoryName}</CategoryP>
        </CategoryDiv>
    )
}