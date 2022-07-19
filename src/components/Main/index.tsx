import { Box, styled } from "@mui/material";
import { FunctionComponent } from "react";

interface MainProps {

}
export const MainContainer = styled(Box)({
    padding: 20,
    flex: 1,
})
export const Main: FunctionComponent<MainProps> = (props) => {
    return (
        <MainContainer>
            helle
        </MainContainer>
    )
}