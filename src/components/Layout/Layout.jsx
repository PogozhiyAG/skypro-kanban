/* eslint-disable react/prop-types */
import { Header } from "../Header/Header";
import { PopExit } from "../popups/PopExit/PopExit";
import { ContainerDiv } from "../styled/shared";
import { MainBlockDiv, MainContentDiv, MainMain } from "./Layout.styled";

export const Layout = ({children, addNewTask, changeTheme}) => {
    return (
        <div className="wrapper">
            <Header addNewTask={addNewTask} changeTheme={changeTheme}/>

            <MainMain>
                <ContainerDiv>                    
                    <MainBlockDiv>
                        <MainContentDiv>
                            {children}
                        </MainContentDiv>				
                    </MainBlockDiv>
                </ContainerDiv>
            </MainMain>

            <PopExit/>
      </div>
    );
}