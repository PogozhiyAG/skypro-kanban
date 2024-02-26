import { Link, useNavigate } from "react-router-dom";
import { FlexColumnDiv } from "../../styled/FlexColumnDiv";
import { StyledInput, StyledButton } from "../../styled/shared";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { loginUser } from "../../../api";

/* eslint-disable react/prop-types */
export const Login = () => {
    const refLogin = useRef(null);
    const refPassword = useRef(null);  

    const {setAuth} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();
    

    const handleSubmit = e => {
        e.preventDefault();
        setErrorMessage(null);
        
        loginUser({
            login: refLogin.current.value,
            password: refPassword.current.value,  
        })
        .then(user => {            
            console.log(user);
            setAuth(user);            
        })
        .then(() => navigate('/'))
        .catch(error => {
            setErrorMessage(error.message);
        });
    }

    return (
        <>
            
            <form onSubmit={handleSubmit}>
                <FlexColumnDiv>
                    <h3>Войти</h3>
                    <StyledInput type="text" placeholder="Логин" ref={refLogin}/>
                    <StyledInput type="password" placeholder="Пароль" ref={refPassword}/>
                    <StyledButton>Войти</StyledButton>
                    <Link to="/register">Зарегистрироваться</Link>
                    <div>{errorMessage}</div>
                </FlexColumnDiv>
            </form>            
        </>
    );
}
