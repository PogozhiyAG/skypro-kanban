import styled, { css, keyframes } from "styled-components";

const cardAnimation = keyframes`
    0% {        
        opacity: 0;
    }
    100% {        
        opacity: 1;
    }
`;

export const DivCardsItem = styled.div`
    padding: 5px;
    animation-name: ${cardAnimation};
    animation-duration: 500ms;
    animation-timing-function: linear;
`;

export const DivCardsCard = styled.div`
    width: 220px;
    height: 130px;
    background-color: ${props => props.theme.bg.primary};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
`;


export const DivCardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;  
`;

export const DivCardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;




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

export const DivCardTheme = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    ${props => CategoryThemes[props.$categoryclass]}
`;

export const PCardCategory = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    ${props => CategoryThemes[props.$categoryclass]}
`;

export const CardButtons = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
`;

export const CardButtonDot = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
`;

export const CardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${props => props.theme.fg.primary};
    margin-bottom: 10px;
`;



export const CardDateP = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;    
`;

export const CardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;


export const CardDateImg = styled.img`
    width: 13px;
`;