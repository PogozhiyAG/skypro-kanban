import { StyledButton } from "../../styled/StyledButton";

/* eslint-disable react/prop-types */
export const Logout = ({setIsAuth}) => {
    const handleLogoutClick = () => {
        setIsAuth(false);
    }

    return (
        <>
            <h1>Выход из аккаунта</h1>
            <div>
                <StyledButton onClick={handleLogoutClick}>Выйти</StyledButton>
            </div>
            
        </>
    );
}