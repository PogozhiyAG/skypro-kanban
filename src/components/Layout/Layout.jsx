/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { ContainerDiv } from "../styled/shared";
import { MainBlockDiv, MainContentDiv, MainMain, WrapperDiv } from "./Layout.styled";

export const Layout = () => {
    return (
        <WrapperDiv>
            <Header />

            <MainMain>
                <ContainerDiv>                    
                    <MainBlockDiv>
                        <MainContentDiv>
                            <Outlet/>
                        </MainContentDiv>				
                    </MainBlockDiv>
                </ContainerDiv>
            </MainMain>
            
      </WrapperDiv>
    );
}