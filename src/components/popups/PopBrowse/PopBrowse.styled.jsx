import styled, { css } from "styled-components";

export const PopDiv = styled.div`  
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const PopContainer = styled.div`
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

export const PopBlock = styled.div`
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

export const PopContent = styled.div`
  display: block;
  text-align: left;
`;


export const PopTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const PopStatus = styled.div`
    margin-bottom: 11px;
`;

export const PopTitle = styled.h3`
  color: ${props => props.theme.fg.primary};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
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

export const SubtitleTitleP = styled.p`
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

export const FormInput = styled.input`
  ${cssInput}
  margin: 20px 0;
`;

export const FormArea = styled.textarea`
  ${cssInput}
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
`;



export const PopCalendar = styled.div`  
  font-size: 12px;
  width: 182px;
  margin-bottom: 20px;
`;


export const PopWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px){
    display: block;
  }
`;

export const PopForm = styled.form`
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


export const PopFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;


export const StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;