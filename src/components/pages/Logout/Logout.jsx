import { useContext } from "react";
import { StyledButton } from "../../styled/shared";
import { AuthContext } from "../../../context/AuthContext";
import { FlexColumnDiv } from "../../styled/FlexColumnDiv";

/* eslint-disable react/prop-types */
export const Logout = () => {
    const {setAuth} = useContext(AuthContext);

    const handleLogoutClick = () => {
        setAuth(null);
    }

    return (
        <FlexColumnDiv>
            <h3>Выход из аккаунта</h3>
            <StyledButton onClick={handleLogoutClick}>Выйти</StyledButton>
        </FlexColumnDiv>
    );
}