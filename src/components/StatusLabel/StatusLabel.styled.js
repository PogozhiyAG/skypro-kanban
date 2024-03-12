import styled from "styled-components";

export const StatusDiv = styled.div`
  cursor: pointer;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);  
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  color: ${props => props.$isActive ? props.theme.bg.primary : props.theme.third};
  background-color: ${props => props.$isActive ? props.theme.third : `transparent`};
`;

export const StatusP = styled.p`
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;