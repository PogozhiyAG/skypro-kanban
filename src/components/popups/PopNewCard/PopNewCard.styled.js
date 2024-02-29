import styled, { css } from "styled-components";
import { HoverEffects } from "../../styled/shared";

export const PopNewCardDiv = styled.div`  
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${props => props.theme.bg.primary};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTitle = styled.h3`
  color: ${props => props.theme.fg.primary};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.fg.primary};
  }
`;



const cssSubTitle = css`
  color: ${props => props.theme.fg.primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SubTitleLabel = styled.label`
  ${cssSubTitle}
`;

export const CalendarTitleP = styled.p`
  ${cssSubTitle}
  margin-bottom: 14px;
  padding: 0 7px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const CategoriesTitleP = styled.p`
  ${cssSubTitle}
  margin-bottom: 14px;  
`;



const cssInputPlaceholder = css`
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
`;

const cssInput = css`
  color: ${props => props.theme.fg.primary};
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  &::placeholder{
    ${cssInputPlaceholder}
  }
  &::-moz-placeholder{
    ${cssInputPlaceholder}
  }
`;

export const FormNewInput = styled.input`
  ${cssInput}
  margin: 20px 0;
`;

export const FormNewArea = styled.textarea`
  ${cssInput}
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
`;



export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px){
    display: block;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
    width: 100%;
    display: block;
  }
`;


export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;


export const PopNewCardCalendar = styled.div`  
  font-size: 12px;
  width: 182px;
  margin-bottom: 20px;
`;

export const CategoriesDiv = styled.div`  
  margin-bottom: 20px;
`;

export const CategoriesThemes = styled.div`  
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FormNewCreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;

  ${HoverEffects.hover01}

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;