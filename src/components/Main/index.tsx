import { IconButton, styled, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { CardContainer, CardImage, Cards, CustomBoxBlueSmall, FormImage, MainContainer, MiddleBar, MiddleText, Toggle, ToggleButton } from "../../styles";
import CustomizedCheckbox from "../checkboxes";
import { BookmarkForm } from "../custForm";
import { SearchBox } from "../searchBox";

interface MainProps {

}
export const ContainerCheckbox = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    width: 'inherit',
    position: 'absolute',
    zIndex: 1,
})

export const Main: FunctionComponent<MainProps> = (props) => {
    const [typeToggleChecked, setTypeToggleChecked] = useState(true);
    return (
        <MainContainer>
            <div style={{ height: 50, width: "100%", display: 'flex', justifyContent: 'flex-end' }} >
            </div>
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
                    <ContainerCheckbox>
                        <CustomizedCheckbox like={false} />
                        <CustomizedCheckbox like={true} />
                    </ContainerCheckbox>
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