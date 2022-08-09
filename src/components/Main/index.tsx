import { FunctionComponent } from 'react';
import { useAddBookmark } from '../../redux/hooks/BookmarkHooks';
import { Cards, CustomBoxBlueSmall, FormImage, MainContainer } from '../../styles';
import { BookmarkForm } from '../custForm';
import { Card } from './Cards';
import MiddleBar from './MiddlePart';
import { ProfileSection } from './Profile';

interface MainProps {
    user: object;
    bookmarks: object[];
}

export const Main: FunctionComponent<MainProps> = (props) => {
    const [addBookmark] = useAddBookmark();
    return (
        <MainContainer>
            <ProfileSection user={props.user} />
            <CustomBoxBlueSmall>
                <BookmarkForm
                    onSubmit={({ url, folder }) => {
                        console.log(url);
                        addBookmark({ folder, url });
                    }}
                />
                <FormImage alt="" src={'assets/images/juggle.png'} />
            </CustomBoxBlueSmall>
            <MiddleBar />
            <Cards>
                {props.bookmarks.map((bookmark, index) => (
                    <Card key={index} bookmark={bookmark} />
                ))}
            </Cards>
        </MainContainer>
    );
};
