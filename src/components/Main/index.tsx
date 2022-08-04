import { Button, IconButton, styled, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { CardContainer, CardImage, Cards, ContainerCheckbox, CustomBoxBlueSmall, FormImage, Icon, MainContainer, MiddleBar, MiddleText, Profile, ProfileContainer, Toggle, ToggleButton } from "../../styles";
import { AddLink } from "../buttons";
import CustomizedCheckbox from "../checkboxes";
import { BookmarkForm } from "../custForm";
import { SearchBox } from "../searchBox";
interface MainProps {

}

export const AddLinkBtn = styled(Button)({

})
export const Main: FunctionComponent<MainProps> = (props) => {
    const [typeToggleChecked, setTypeToggleChecked] = useState(true);
    return (
        <MainContainer>
            <ProfileContainer>
                <Profile>
                    <img src={require('../../assets/images/profile.png')} alt="" />
                    <div>
                        <Typography>Email</Typography>
                        <Typography>Name</Typography>
                    </div>
                </Profile>
                <button><Icon src={require('../../assets/icons/ArrowHead.png')} style={{ transform: 'rotate(90deg)' }} alt="" /></button>
            </ProfileContainer>
            <CustomBoxBlueSmall>
                <BookmarkForm onSubmit={({ url, folder }) => {
                    console.log(url, folder)
                }
                } />
                <FormImage alt="" src={require('../../assets/images/juggle.png')} />
            </CustomBoxBlueSmall>
            <MiddleBar>
                <SearchBox width={'400px'} bgcolor={'rgb(116 114 114 / 20%)'} />
                <div style={{ display: 'flex', gap: 40 }} >
                    <AddLink />
                    <Toggle>
                        <ToggleButton checked={typeToggleChecked} onClick={() => { setTypeToggleChecked(!typeToggleChecked) }} >
                            <img src={require('../../assets/icons/uis_apps.png')} alt="h" />
                        </ToggleButton>
                        <ToggleButton checked={!typeToggleChecked} onClick={() => { setTypeToggleChecked(!typeToggleChecked) }} >
                            <img src={require('../../assets/icons/burger.png')} alt="h" />
                        </ToggleButton>
                    </Toggle>
                </div>
            </MiddleBar>
            <Cards>
                <CardContainer>
                    <ContainerCheckbox>
                        <CustomizedCheckbox like={"check"} />
                        <CustomizedCheckbox like={"fav"} />
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