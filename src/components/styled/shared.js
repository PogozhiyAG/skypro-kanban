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


export const StyledButton = styled.button`
    padding: .5em 1em;
    background: ${props => props.$highlight ? props.theme.button.highlightBackground : props.theme.button.background};
    color: ${props => props.$highlight ? props.theme.button.highlightColor : props.theme.button.color};
    border-radius: 4px;
    border: 1px solid ${props => props.$highlight ? props.theme.button.highlightBorder : props.theme.button.border};
    width: ${props => props.$width ?? 'auto'};

    &:hover{
        background-color: #33399b;
        color: #FFFFFF;
        border: 1px solid #33399b
    }    
`;

export const StyledInput = styled.input`
    background: transparent;    
    border: 1px solid ${props => props.theme.border};
    padding: 5px;
    border-radius: 4px;
    color: ${props => props.theme.fg.primary};
`;

