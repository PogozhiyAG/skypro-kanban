/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { PopExit } from "../popups/PopExit/PopExit";
import { ContainerDiv } from "../styled/shared";
import { MainBlockDiv, MainContentDiv, MainMain, WrapperDiv } from "./Layout.styled";

export const Layout = ({addNewTask, changeTheme}) => {
    return (
        <WrapperDiv>
            <Header addNewTask={addNewTask} changeTheme={changeTheme}/>

            <MainMain>
                <ContainerDiv>                    
                    <MainBlockDiv>
                        <MainContentDiv>
                            <Outlet/>
                        </MainContentDiv>				
                    </MainBlockDiv>
                </ContainerDiv>
            </MainMain>

            <PopExit/>
      </WrapperDiv>
    );
}