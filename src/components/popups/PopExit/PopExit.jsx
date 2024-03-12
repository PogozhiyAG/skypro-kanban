import { useContext } from "react";
import { StyledButton } from "../../styled/shared";
import { PopBlock, PopContainer, PopDiv, PopFormGroup, PopTitle } from "./PopExit.styled";
import { PopupContext } from "../../../context/PopupContext";
import { AuthContext } from "../../../context/AuthContext";

export const PopExit = () => {
	const {closePopup} = useContext(PopupContext);
	const {setAuth} = useContext(AuthContext);	

	const handleCloseClick = () => closePopup();

	const handleLogoutClick = () => {		
		setAuth(null);
		closePopup();
	}

    return(
        <PopDiv>
			<PopContainer>
				<PopBlock>
					<div>
						<PopTitle>Выйти из аккаунта?</PopTitle>
					</div>
					<PopFormGroup>
						<StyledButton onClick={handleLogoutClick} $width="153px" $highlight>Да, выйти</StyledButton>
						<StyledButton onClick={handleCloseClick} $width="153px">Нет, остаться</StyledButton>
					</PopFormGroup>
				</PopBlock>
			</PopContainer>
		</PopDiv>
    );
}