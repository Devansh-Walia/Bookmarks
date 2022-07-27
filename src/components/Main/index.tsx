import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { CustomBoxBlueSmall } from "../../styles";
import { BookmarkForm } from "../custForm";
import { SearchBox } from "../searchBox";

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
    alignItems: 'center',

    width: 248,
    height: 301,
    padding: 20,

    background: '#FFFFFF',
    boxShadow: '0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)',
    borderRadius: 20,
})

export const CardImage = styled('img')({
    width: 255,
    height: 170,
    filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04))',
    borderRadius: 16,
})
export const MiddleText = styled('div')({
    display: 'grid',
    gridTemplateColumns: '90% 10%',
    textAlign: 'left',
    gap: '20px',
})
export const LowerText = styled('div')({
    textAlign: 'left',
    paddingRight: 80,
    paddingLeft: 25,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 19,
    alignItems: 'center',
    color: '#9D9B9F',
})
export const MiddleBar = styled(Box)({
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
})


export const Toggle = styled(Box)(({ theme }) => ({
    width: 'fit-content',
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.primary.main,
    borderRadius: "30px",
    marginTop: 10
}))
interface toggleProps {
    checked?: boolean;
}
export const ToggleButton = styled(Button)<toggleProps>(({ theme, checked }) => ({
    backgroundColor: !checked ? theme.palette.primary.main : "#dbd4d4",
    padding: '5px',
    width: 'fit-content',
    minWidth: checked ? '0px' : 'initial',
    height: checked ? 37 : 'initial',
    top: checked ? -2 : 'initial',
    borcerRadius: checked ? '10px' : 'initial',
    "&:hover": {
        backgroundColor: !checked ? theme.palette.primary.main : "#dbd4d4",
    }
}))

export const FormImage = styled('img')({
    marginLeft: 100,
    marginRight: 100,
    height: '250px'
})

export const Main: FunctionComponent<MainProps> = (props) => {
    const [typeToggleChecked, setTypeToggleChecked] = useState(true);
    return (
        <MainContainer>
            <div style={{ height: 50, width: "100%" }} ></div>
            <CustomBoxBlueSmall>
                <BookmarkForm onSubmit={({ url, folder }) => {
                    console.log(url, folder)
                }
                } />
                <FormImage alt="" src={require('../../assets/images/juggle.png')} />
            </CustomBoxBlueSmall>
            <MiddleBar>
                <SearchBox width={'400px'} bgcolor={'rgb(116 114 114 / 20%)'} />
                <Toggle>
                    <ToggleButton checked={typeToggleChecked} onClick={() => { setTypeToggleChecked(!typeToggleChecked) }} >
                        <img src={require('../../assets/icons/uis_apps.png')} alt="h" />
                    </ToggleButton>
                    <ToggleButton checked={!typeToggleChecked} onClick={() => { setTypeToggleChecked(!typeToggleChecked) }} >
                        <img src={require('../../assets/icons/burger.png')} alt="h" />
                    </ToggleButton>
                </Toggle>
            </MiddleBar>
            <Cards>
                <CardContainer>
                    <CardImage src={require('../../assets/images/TitleCard.png')} alt="titleCard" />
                    <MiddleText>
                        <Typography variant='h6'>Title Lorem Ipsum</Typography>
                        <IconButton aria-label="moreVertical">
                            <img src={require('../../assets/icons/3dot.png')} alt="" />
                        </IconButton>
                    </MiddleText>
                    <div>
                        <Typography className='bookmark-card-bottom-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    </div>
                </CardContainer>
            </Cards>
        </MainContainer>
    )
}