import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Favourites, Folders, Logout, Main, SearchBox } from '../components';
import { useGetBookmark, useGetFolder, useGetUser } from '../redux';
import { IRootState } from '../redux/reducers';
import { DashContainer, LeftPane, LoadingGif, Logo, LogoTitle } from '../styles';

type Props = {};
const Dash: FunctionComponent<Props> = (props) => {
    const [loading, setLoading] = useState(true);
    const state = useSelector((state: IRootState) => state);
    const [getUser] = useGetUser();
    const [getBookmark] = useGetBookmark();
    const [getFolder] = useGetFolder();
    useEffect(() => {
        getUser();
        getBookmark();
        getFolder();
    }, [getUser, getBookmark, getFolder]);
    useEffect(() => {
        if (!state.auth.isLoading && !state.bookmark.isLoading && !state.folder.isLoading) {
            console.log('final');
            setLoading(false);
        }
    }, [state]);
    return (
        <DashContainer>
            {loading ? (
                <LoadingGif src={'assets/gifs/loading.gif'} alt="" />
            ) : (
                <>
                    <LeftPane>
                        <Logo src={'assets/icons/logo.png'} alt="BookmarkLogo" />
                        <LogoTitle>BOOKMARK</LogoTitle>
                        <SearchBox width={'230px'} bgcolor={'white'} />
                        <Folders />
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
