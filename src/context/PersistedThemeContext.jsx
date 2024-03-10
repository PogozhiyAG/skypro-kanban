/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { themes } from "../Themes";
import { ThemeProvider } from "styled-components";

export const PersistedThemeContext = createContext({});

const getThemeNameFromLocalStorage = () => window.localStorage.theme ?? 'light';

export const PersistedThemeContextProvider = ({children}) => {
    const [themeName, setThemeName] = useState(getThemeNameFromLocalStorage())
    const [theme, setTheme] = useState(themes[themeName]);

    useEffect(() => {
        window.localStorage.theme = themeName;
        setTheme(themes[themeName])
    }, [themeName]);    

    const value = {
        themeName,
        setThemeName
    }

    return (
        <PersistedThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </PersistedThemeContext.Provider>
    );
}