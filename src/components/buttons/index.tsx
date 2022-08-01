import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../redux/hooks/AuthHooks';
import { Icon, StyledButton2, StyledButtonGiant } from '../../styles'

type Props = {}

export const Logout: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate();
    const [loggingOut] = useLogout();
    const clickHandler = () => {
        loggingOut();
        navigate('/login', { replace: true });
    }
    return (<StyledButton2 onClick={clickHandler} ><Icon alt="logout" src={require('../../assets/icons/logout.svg').default} />Logout</StyledButton2>
    )
}
export const Favourites: FunctionComponent<Props> = (props) => {
    return (<StyledButton2><Icon alt="fav" src={require('../../assets/icons/heart.png')} />Favourites</StyledButton2>
    )
}
export const AddLinkButton: FunctionComponent<Props> = (props) => {
    return (<StyledButtonGiant variant='outlined' >+ Add Folder</StyledButtonGiant>
    )
}
