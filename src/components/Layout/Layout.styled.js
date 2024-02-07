import styled from "styled-components";

export const MainMain = styled.main`
    width: 100%;
    background-color: ${props => props.theme.bg.secondary};
`;

export const MainBlockDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
    
    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px; 
    }
`;


export const MainContentDiv = styled.div`
    width: 100%;
    display: flex;

    @media screen and (max-width: 1200px) { 
        display: block;
    }
`;


export const WrapperDiv = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${props => props.theme.bg.secondary};
`;