import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../styled/StyledButton";

/* eslint-disable react/prop-types */
export const Login = ({setIsAuth}) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        setIsAuth(true);
        navigate('/');
    }

    return (
        <>
            <h1>Login page</h1>
            <div>
                <StyledButton onClick={handleLoginClick}>Войти</StyledButton>
            </div>
            
        </>
    );
}