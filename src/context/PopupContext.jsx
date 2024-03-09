/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { PopBrowse } from "../components/popups/PopBrowse/PopBrowse";

export const PopupContext = createContext({});

export const PopupContextProvider = ({children}) => {
    const [activePopup, setActivePopup] = useState();

    const [browseItem, setBrowseItem] = useState();

    const showBrowsePopup = (item) => {
        setBrowseItem(item);
        setActivePopup("BROWSE");
        console.log("BROWSE");
    }

    const closePopup = () => {
        setActivePopup(null);
    }
    
    const value = {
        showBrowsePopup,
        closePopup
    }

    return (
        <PopupContext.Provider value={value}>
            <>
                {children}
                {activePopup == 'BROWSE' && <PopBrowse item={browseItem}/>}
            </>
        </PopupContext.Provider>
    );
};