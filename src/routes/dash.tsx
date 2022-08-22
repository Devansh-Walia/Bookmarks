import { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Favourites, Folders, Logout, Main, SearchBox } from '../components';
import { useGetBookmark, useGetFolder, useGetUser } from '../redux';
import { stateSelector } from '../services/SelectorFunctions';
import {
  DashContainer,
  LeftPane,
  LoadingGif,
  Logo,
  LogoTitle
} from '../styles';

const Dash: FunctionComponent = () => {
  const state = useSelector(stateSelector);
  const params = useParams();
  const [getUser] = useGetUser();
  const [getBookmark] = useGetBookmark();
  const [getFolder] = useGetFolder();
  useEffect(() => {
    console.log('changed');
    getBookmark(params.hasOwnProperty('id') ? params.id : undefined);
    getFolder(params.hasOwnProperty('id') ? params.id : undefined);
    getUser();
  }, [params, getBookmark, getFolder, getUser]);

  return (
    <DashContainer>
      {state.auth.isLoading ||
      state.bookmark.isLoading ||
      state.folder.isLoading ? (
        <LoadingGif src={'/assets/gifs/loading.gif'} alt="" />
      ) : (
        <>
          <LeftPane>
            <Link to="/">
              <Logo src={'/assets/icons/logo.png'} alt="BookmarkLogo" />
            </Link>
            <LogoTitle>BOOKMARK</LogoTitle>
            <SearchBox width={'230px'} bgcolor={'white'} />
            <Folders folders={state.folder.folders} />
            <Favourites />
            <Logout />
          </LeftPane>
          <Main user={state.auth.user} bookmarks={state.bookmark.bookmarks} />
        </>
      )}
    </DashContainer>
  );
};

export { Dash };
