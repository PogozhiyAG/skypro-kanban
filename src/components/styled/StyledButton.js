import styled from "styled-components";
import { HoverEffects } from "./shared";

export const StyledButton = styled.button`
    padding: .5em 1em;
    background: transparent;
    color: ${props => props.theme.fg.primary};
    border-radius: 4px;
    border: 1px solid ${props => props.theme.fg.primary};

    ${HoverEffects.hover03}
`;