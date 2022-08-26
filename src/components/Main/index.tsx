import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAddBookmark } from '../../redux/hooks/BookmarkHooks';
import { IRootState } from '../../redux/reducers';
import { stateSelector } from '../../services/SelectorFunctions';
import {
  Cards,
  CustomBoxBlueSmall,
  FormImage,
  MainContainer,
  NoBookmarks
} from '../../styles';
import { BookmarkForm } from '../custForm';
import { Loader } from '../Loader';
import { Card } from './Cards';
import MiddleBar from './MiddlePart';
import { ProfileSection } from './Profile';

export const Main: FunctionComponent = (props) => {
  const params = useParams();
  const { auth, folder, bookmark }: IRootState = useSelector(stateSelector);
  const [addBookmark] = useAddBookmark();
  const currentBookmarkIds =
    params && !params.hasOwnProperty('id')
      ? bookmark.rootBookmarkIds
      : folder.folders[params.id!] &&
        folder.folders[params.id!].hasOwnProperty('bookmarkIds')
      ? folder.folders[params.id!].bookmarkIds
      : [];
  return (
    <MainContainer>
      <ProfileSection user={auth.user} />
      <CustomBoxBlueSmall>
        <BookmarkForm
          onSubmit={({ url }) => {
            addBookmark({
              url,
              folderId: params.hasOwnProperty('id') ? params.id : undefined
            });
          }}
        />
        <FormImage alt="" src={'/assets/images/juggle.png'} />
      </CustomBoxBlueSmall>
      <MiddleBar />
      <Cards>
        {bookmark.isLoading ? (
          <Loader />
        ) : currentBookmarkIds.length > 0 ? (
          currentBookmarkIds.map((id: string) => (
            <Card key={id} bookmark={bookmark.bookmarks[id]} />
          ))
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
