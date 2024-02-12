/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PopExit } from '../popups/PopExit/PopExit';
import { PopNewCard } from '../popups/PopNewCard/PopNewCard';
import './Header.css';
import { HeaderBlockDiv, HeaderHeader, HeaderLogoDiv, HeaderLogoImage, HeaderNav, HeaderNewButton, HeaderPopUserSetA, HeaderPopUserSetButton, HeaderPopUserSetDiv, HeaderUserA, PopUserSetMailP, PopUserSetNameP, PopUserSetThemeDiv, PopUserSetThemeP } from './Header.styled';
import { ContainerDiv } from '../styled/shared';
import { CircleCheckBox } from '../styled/CircleCheckBox';
import { useTheme } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../AppRoutes';

export const Header = ({addNewTask, changeTheme}) => {
    const [isUserPopupShown, setIsUserPopupShown] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    const handleAddNewTaskClick = () => addNewTask && addNewTask();

    const toggleIsUserPopupShown = () => setIsUserPopupShown(shown => !shown);

    const handleToggleTheme = e => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        changeTheme(newTheme);
    }

    const handleLogoutClick = () => {
        setIsUserPopupShown(false);
        navigate(AppRoutes.Logout);
    }

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
                            <HeaderUserA onClick={toggleIsUserPopupShown}>Ivan Ivanov</HeaderUserA>

                            {isUserPopupShown && (
                                <HeaderPopUserSetDiv>            
                                    <PopUserSetNameP>Ivan Ivanov</PopUserSetNameP>
                                    <PopUserSetMailP>ivan.ivanov@gmail.com</PopUserSetMailP>
                                    <PopUserSetThemeDiv>
                                        <PopUserSetThemeP>Темная тема</PopUserSetThemeP>
                                        <CircleCheckBox type="checkbox" onChange={handleToggleTheme}/>
                                    </PopUserSetThemeDiv>
                                    <HeaderPopUserSetButton>
                                        <HeaderPopUserSetA onClick={handleLogoutClick}>Выйти</HeaderPopUserSetA>
                                    </HeaderPopUserSetButton>
                                </HeaderPopUserSetDiv>
                            )}
                            
                        </HeaderNav>					
                    </HeaderBlockDiv>
                </ContainerDiv>			
            </HeaderHeader>

            <PopNewCard/>
            <PopExit/>
        </>
    );
};