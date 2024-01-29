/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PopExit } from '../popups/PopExit/PopExit';
import { PopNewCard } from '../popups/PopNewCard/PopNewCard';
import './Header.css';

export const Header = ({addNewTask}) => {
    const [isUserPopupShown, setIsUserPopupShown] = useState(false);

    const handleAddNewTaskClick = () => addNewTask && addNewTask();

    const toggleIsUserPopupShown = () => setIsUserPopupShown(shown => !shown);

    return (
        <>  
            <header className="header">
                <div className="container">
                    <div className="header__block">
                        <div className="header__logo _show _light">
                            <a href="" target="_self"><img src="../images/logo.png" alt="logo"/></a>
                        </div>
                        <div className="header__logo _dark">
                            <a href="" target="_self"><img src="../images/logo_dark.png" alt="logo"/></a>
                        </div>
                        <nav className="header__nav">
                            <button onClick={handleAddNewTaskClick} className="header__btn-main-new _hover01" id="btnMainNew">Создать новую задачу</button>
                            <a onClick={toggleIsUserPopupShown} className="header__user _hover02">Ivan Ivanov</a>

                            {isUserPopupShown && (
                                <div className="header__pop-user-set pop-user-set" id="user-set-target">            
                                    <p className="pop-user-set__name">Ivan Ivanov</p>
                                    <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                    <div className="pop-user-set__theme">
                                        <p>Темная тема</p>
                                        <input type="checkbox" className="checkbox" name="checkbox"/>
                                    </div>
                                    <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                                </div>
                            )}
                            
                        </nav>					
                    </div>
                </div>			
            </header>

            <PopNewCard/>
            <PopExit/>
        </>
    );
};