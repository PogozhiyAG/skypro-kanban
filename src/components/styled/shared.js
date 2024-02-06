import styled, { css } from "styled-components";

export const ContainerDiv = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`;


export const HoverEffects = {
    hover01: css`
        &:hover{
            background-color: #33399b; 
        }
    `,
    hover02: css`
        &:hover{
            color: #33399b;
        }
        &:hover::after {
            border-left-color: #33399b;
            border-bottom-color: #33399b;
        }
    `,
    hover03: css`
        &:hover{
            background-color: #33399b;
            color: #FFFFFF;
        }
        &:hover a{
            color: #FFFFFF;
        }
    `,
};