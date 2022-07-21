import { Box, styled } from "@mui/material";
import { FunctionComponent } from "react";
import { CustomBoxBlueSmall, FlexDiv } from "../../styles";

interface MainProps {

}
export const MainContainer = styled(Box)({
    padding: 20,
    flex: 3,
})
export const Cards = styled(Box)({
    flex: 2,
    padding: 20
})
export const CardContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',

    width: 248,
    height: 301,

    background: '#FFFFFF',
    boxShadow: '0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)',
    borderRadius: 20,
})

export const CardImage = styled('img')({
    width: 200,
    height: 89,
    filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04))',
    borderRadius: 16,
})
export const Main: FunctionComponent<MainProps> = (props) => {
    return (
        <MainContainer>
            <CustomBoxBlueSmall>
            </CustomBoxBlueSmall>
            <Cards>
                <CardContainer>
                    <CardImage src={require('../../assets/images/TitleCard.png')} alt="titleCard" />
                    <FlexDiv>
                        Title Lorem
                    </FlexDiv>
                </CardContainer>
            </Cards>
        </MainContainer>
    )
}