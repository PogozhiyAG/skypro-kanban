import styled from "styled-components";


export const FlexColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 368px;
    gap: 7px;
    padding: 50px 60px;
    font-size: 14px;
    background: ${props => props.theme.bg.primary};
    color: ${props => props.theme.fg.primary};
    border-radius: 4px;
    border: 0.7px solid ${props => props.theme.border};
`;