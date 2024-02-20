import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { registerUser } from "../../../api";
import { AuthContext } from "../../../context/AuthContext";
import { FlexColumnDiv } from "../../styled/FlexColumnDiv";
import { StyledInput, StyledButton } from "../../styled/shared";

export const Register = () => {
    const refName = useRef(null);
    const refLogin = useRef(null);
    const refPassword = useRef(null);  
    
    const [errorMessage, setErrorMessage] = useState();
    const {setAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        setErrorMessage(null);

        registerUser({
            name: refName.current.value,
            login: refLogin.current.value,
            password: refPassword.current.value,
        })
        .then(user => {            
            setAuth(user);            
        })
        .then(() => navigate('/'))
        .catch(error => {
            setErrorMessage(error.message);
        });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <FlexColumnDiv>
                <h3>Регистрация</h3>
                <StyledInput type="text" placeholder="Имя" ref={refName}/>
                <StyledInput type="text" placeholder="Логин" ref={refLogin}/>
                <StyledInput type="password" placeholder="Пароль" ref={refPassword}/>
                <StyledButton >Зарегистрироваться</StyledButton>
                <span>Уже есть аккаунт? </span> <Link to="/login">Войдите здесь</Link>
                <div>{errorMessage}</div>
            </FlexColumnDiv>
        </form>            
    );
}