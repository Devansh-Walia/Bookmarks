import { FunctionComponent } from 'react'
import { Favourites, Folders, Logout, Main, SearchBox } from '../components'
import { DashContainer, LeftPane, Logo, LogoTitle } from '../styles'

type Props = {}
const Dash: FunctionComponent<Props> = (props) => {
    return (
        <DashContainer>
            <LeftPane>
                <Logo src={require('../assets/icons/logo.png')} alt="BookmarkLogo" />
                <LogoTitle>BOOKMARK</LogoTitle>
                <SearchBox width={'230px'} bgcolor={'white'} />
                <Folders />
                <Favourites />
                <Logout />
            </LeftPane>
            <Main />
        </DashContainer>
    )
}

export { Dash }