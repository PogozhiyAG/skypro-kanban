import styled from "styled-components";

export const CircleCheckBox = styled.input`
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #EAEEF6;
    outline: none;
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
    &::before{
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #94A6BE;
        transition: 0.5s;
    }

    &:checked::before{
        left: 12px;
    }
`;