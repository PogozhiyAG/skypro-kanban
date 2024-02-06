import styled from "styled-components";
import { HoverEffects } from "../styled/shared";

export const HeaderHeader = styled.header`
    width: 100%;
    margin: 0 auto;
    background-color: ${props => props.theme.bg.primary};
`;

export const HeaderBlockDiv = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;


export const HeaderLogoDiv = styled.div`   
`;


export const HeaderLogoImage = styled.img`
   width: 85px;
`;


export const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const HeaderNewButton =  styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;

    ${HoverEffects.hover01}

    @media screen and (max-width: 495px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;
    }
`;


export const HeaderUserA = styled.a`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.fg.secondary};

    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid ${props => props.theme.fg.secondary};
        border-bottom: 1.9px solid ${props => props.theme.fg.secondary};
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }

    ${HoverEffects.hover02}
`;


export const HeaderPopUserSetDiv = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: ${props => props.theme.bg.primary};
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`;

export const HeaderPopUserSetButton = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${props => props.theme.fg.primary};
    border-radius: 4px;
    border: 1px solid ${props => props.theme.fg.primary};

    ${HoverEffects.hover03}
`;

export const HeaderPopUserSetA = styled.a`    
    color: ${props => props.theme.fg.primary};
`;


export const PopUserSetNameP = styled.p`
    color: ${props => props.theme.fg.primary};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`;


export const PopUserSetMailP = styled.p`
    color: #94A6BE;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`;


export const PopUserSetThemeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;


export const PopUserSetThemeP = styled.p`
    color: ${props => props.theme.fg.primary};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
`;