import { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Favourites, Folders, Logout, Main, SearchBox } from '../components';
import { useGetBookmark, useGetFolder, useGetUser } from '../redux';
import { IRootState } from '../redux/reducers';
import { DashContainer, LeftPane, LoadingGif, Logo, LogoTitle } from '../styles';

type Props = {};
const Dash: FunctionComponent<Props> = (props) => {
    const state = useSelector((state: IRootState) => state);
    const [getUser] = useGetUser();
    const [getBookmark] = useGetBookmark();
    const [getFolder] = useGetFolder();

    useEffect(() => {
        getUser();
        getBookmark();
        getFolder();
    }, [getUser, getBookmark, getFolder]);

    return (
        <DashContainer>
            {state.auth.isLoading || state.bookmark.isLoading || state.folder.isLoading ? (
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
