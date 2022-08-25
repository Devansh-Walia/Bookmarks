import { FunctionComponent, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Favourites, Folders, Logout, Main, SearchBox } from '../components';
import { useGetBookmark, useGetFolder, useGetUser } from '../redux';
import { DashContainer, LeftPane, Logo, LogoTitle } from '../styles';

const Dash: FunctionComponent = () => {
  const params = useParams();
  const [getUser] = useGetUser();
  const [getBookmark] = useGetBookmark();
  const [getFolder] = useGetFolder();

  useEffect(() => {
    getFolder();
    getUser();
  }, [getFolder, getUser]);

  useEffect(() => {
    getBookmark(params.hasOwnProperty('id') ? params.id : undefined);
  }, [getBookmark, params]);

  return (
    <DashContainer>
      <LeftPane>
        <Link to="/">
          <Logo src={'/assets/icons/logo.png'} alt="BookmarkLogo" />
        </Link>
        <LogoTitle>BOOKMARK</LogoTitle>
        <SearchBox width={'230px'} bgcolor={'white'} />
        <Folders />
        <Favourites />
        <Logout />
      </LeftPane>
      <Main />
    </DashContainer>
  );
};

export { Dash };
