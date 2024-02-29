import styled, { css } from "styled-components";

const CategoryThemes = {
    _orange: css`
        background-color: #FFE4C2;
        color: #FF6D00;
    `, 
    _green: css`
        background-color: #B4FDD1;
        color: #06B16E;
    `,
    _purple: css`
        background-color: #E9D4FF;
        color: #9A48F1;
    `,
    _gray: css`
        background: #94A6BE;
        color: #FFFFFF;
    `
};

const DivSizes = {
    M: css`    
        height: 20px;
        padding: 5px 14px;
        border-radius: 18px;
    `,
    L: css`
        height: 30px;
        padding: 8px 20px;
        border-radius: 24px;
        margin-right: 7px;
    `
};

const PSizes = {
    M: css`
        font-size: 10px;
        font-weight: 600;
        line-height: 10px;
    `,
    L: css`
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
    `
}

export const CategoryDiv = styled.div`
    display: inline-block;
    width: auto;    
    
    ${props => DivSizes[props.$size ?? 'M']}
    ${props => CategoryThemes[props.$categoryClass]}
`;

export const CategoryP = styled.p`
    white-space: nowrap;
    ${props => PSizes[props.$size ?? 'M']}
    ${props => CategoryThemes[props.$categoryClass]}
`;