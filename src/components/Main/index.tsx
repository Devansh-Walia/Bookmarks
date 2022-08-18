import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useAddBookmark } from '../../redux/hooks/BookmarkHooks';
import { Cards, CustomBoxBlueSmall, FormImage, MainContainer, NoBookmarks } from '../../styles';
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
    const params = useParams();
    return (
        <MainContainer>
            <ProfileSection user={props.user} />
            <CustomBoxBlueSmall>
                <BookmarkForm
                    onSubmit={({ url }) => {
                        addBookmark({ url, folderId: params.hasOwnProperty('id') ? params.id : undefined });
                    }}
                />
                <FormImage alt="" src={'/assets/images/juggle.png'} />
            </CustomBoxBlueSmall>
            <MiddleBar />
            <Cards>
                {props.bookmarks.length > 0 ? (
                    props.bookmarks.map((bookmark, index) => <Card key={index} bookmark={bookmark} />)
                ) : (
                    <NoBookmarks>
                        <img src="/assets/icons/journal.png" alt="" />
                        <h3>No Bookmark Found</h3>
                        <p>Keep content organized </p>
                        <p>with folders and subfolders</p>
                    </NoBookmarks>
                )}
            </Cards>
        </MainContainer>
    );
};
