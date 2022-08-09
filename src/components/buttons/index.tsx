import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../redux/hooks/AuthHooks';
import { AddLinkStyle, Icon, StyledButton2, StyledButtonGiant } from '../../styles';

type Props = {};

export const Logout: FunctionComponent<Props> = (props) => {
    const navigate = useNavigate();
    const [loggingOut] = useLogout();
    const clickHandler = () => {
        loggingOut();
        navigate('/login', { replace: true });
    };
    return (
        <StyledButton2 onClick={clickHandler}>
            <Icon alt="logout" src={'assets/icons/logout.svg'} />
            Logout
        </StyledButton2>
    );
};
export const Favourites: FunctionComponent<Props> = (props) => {
    return (
        <StyledButton2>
            <Icon alt="fav" src={'assets/icons/heart.png'} />
            Favourites
        </StyledButton2>
    );
};
export const AddLinkGiant: FunctionComponent<Props> = (props) => {
    return <StyledButtonGiant variant="outlined">+ Add Link</StyledButtonGiant>;
};
export const AddLink: FunctionComponent<Props> = (props) => {
    return <AddLinkStyle variant="outlined">+ Add Link</AddLinkStyle>;
};
