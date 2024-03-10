/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { PopNewCard } from '../popups/PopNewCard/PopNewCard';
import './Header.css';
import { HeaderBlockDiv, HeaderHeader, HeaderLogoDiv, HeaderLogoImage, HeaderNav, HeaderNewButton, HeaderPopUserSetA, HeaderPopUserSetButton, HeaderPopUserSetDiv, HeaderUserA, PopUserSetNameP, PopUserSetThemeDiv, PopUserSetThemeP } from './Header.styled';
import { ContainerDiv } from '../styled/shared';
import { CircleCheckBox } from '../styled/CircleCheckBox';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { PersistedThemeContext } from '../../context/PersistedThemeContext';
import { PopupContext } from '../../context/PopupContext';


export const Header = () => {
    const {auth} = useContext(AuthContext);
    const {themeName, setThemeName} = useContext(PersistedThemeContext);
    const {showLogoutPopup} = useContext(PopupContext);
    const [isUserPopupShown, setIsUserPopupShown] = useState(false);
    const [isNewCardPopupShown, setIsNewCardPopupShown] = useState(false);        
    const theme = useTheme();

    const handleAddNewTaskClick = () => {    
        setIsNewCardPopupShown(!isNewCardPopupShown);
    }

    const toggleIsUserPopupShown = () => setIsUserPopupShown(shown => !shown);

    const handleToggleTheme = e => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setThemeName(newTheme);
    }

    const handleLogoutClick = () => {
        setIsUserPopupShown(false);
        showLogoutPopup();
    }

    const getUserDisplayName = () => auth?.user?.name ?? "Аноним";

    return (
        <>  
            <HeaderHeader>
                <ContainerDiv>
                    <HeaderBlockDiv>
                        <HeaderLogoDiv>
                            <Link to="/">
                                <HeaderLogoImage src={theme.logo} alt="logo"/>
                            </Link>                            
                        </HeaderLogoDiv>
                       
                        <HeaderNav>
                            <HeaderNewButton onClick={handleAddNewTaskClick} id="btnMainNew">Создать новую задачу</HeaderNewButton>                            
                            <HeaderUserA onClick={toggleIsUserPopupShown}>{getUserDisplayName()}</HeaderUserA>

                            {isUserPopupShown && (
                                <HeaderPopUserSetDiv>            
                                    <PopUserSetNameP>{getUserDisplayName()}</PopUserSetNameP>                                    
                                    <PopUserSetThemeDiv>
                                        <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
                                        <CircleCheckBox type="checkbox" checked={themeName === 'dark'} onChange={handleToggleTheme}/>
                                    </PopUserSetThemeDiv>
                                    {auth?.user && (
                                        <HeaderPopUserSetButton>
                                            <HeaderPopUserSetA onClick={handleLogoutClick}>Выйти</HeaderPopUserSetA>
                                        </HeaderPopUserSetButton>
                                    )}                                    
                                </HeaderPopUserSetDiv>
                            )}
                            
                        </HeaderNav>					
                    </HeaderBlockDiv>
                </ContainerDiv>			
            </HeaderHeader>

            {isNewCardPopupShown && <PopNewCard setIsShown={setIsNewCardPopupShown}/>}            
        </>
    );
};