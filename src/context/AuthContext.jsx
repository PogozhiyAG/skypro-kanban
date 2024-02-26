/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext({});

const getUserFromLocalStorage = () => {
    try {
        return JSON.parse(window.localStorage.user);
    } catch (error) {
        return null;
    }
};

export const AuthContextProvider = ({children}) => { 
    const [auth, setAuthState] = useState(getUserFromLocalStorage());

    const setAuth = value => {
        setAuthState(value);
        if (value) {
            window.localStorage.user = JSON.stringify(value);
        } else {
            delete window.localStorage.user;
        }    
    }

    const value = {
        auth,
        setAuth
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );    
}