/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { PopBrowse } from "../components/popups/PopBrowse/PopBrowse";
import { PopExit } from "../components/popups/PopExit/PopExit";
import { PopNewCard } from "../components/popups/PopNewCard/PopNewCard";

export const PopupContext = createContext({});

export const PopupContextProvider = ({children}) => {
    const [activePopup, setActivePopup] = useState();

    const [browseItem, setBrowseItem] = useState();

    const showBrowsePopup = (item) => {
        setBrowseItem(item);
        setActivePopup("BROWSE");        
    }

    const showLogoutPopup = () => {
        setActivePopup("LOGOUT");
    }

    const showNewPopup = () => {
        setActivePopup("NEW");
    }

    const closePopup = () => {
        setActivePopup(null);
    }
    
    const value = {
        showNewPopup,
        showBrowsePopup,
        showLogoutPopup,
        closePopup
    }

    return (
        <PopupContext.Provider value={value}>
            <>
                {children}
                {activePopup == 'BROWSE' && <PopBrowse item={browseItem}/>}
                {activePopup == 'LOGOUT' && <PopExit/>}
                {activePopup == 'NEW'    && <PopNewCard/>}
            </>
        </PopupContext.Provider>
    );
};