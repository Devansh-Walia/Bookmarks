import { ButtonBase, Box } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetChildren } from '../../redux';
import { useLogout } from '../../redux/hooks/AuthHooks';
import { IRootState } from '../../redux/reducers';
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
            <Icon alt="logout" src={'/assets/icons/logout.svg'} />
            Logout
        </StyledButton2>
    );
};
export const Favourites: FunctionComponent<Props> = (props) => {
    return (
        <StyledButton2>
            <Icon alt="fav" src={'/assets/icons/heart.png'} />
            Favourites
        </StyledButton2>
    );
};
export const AddLinkGiant: FunctionComponent<Props> = (props) => {
    return <StyledButtonGiant variant="outlined">+ Add Folder</StyledButtonGiant>;
};
export const AddLink: FunctionComponent<Props> = (props) => {
    return <AddLinkStyle variant="outlined">+ Add Link</AddLinkStyle>;
};

interface IfolderProps {
    folder: {
        name?: string;
        id?: string;
        children?: Object[];
    };
}
export const FolderButton: FunctionComponent<IfolderProps> = ({ folder }) => {
    const navigate = useNavigate();
    const [getChildren] = useGetChildren();
    const { isLoadingChildren, parentId } = useSelector((state: IRootState) => state.folder);
    const [rotate, setRotate] = useState(parentId === folder.id);
    return (
        <div>
            <ButtonBase
                onClick={() => {
                    console.log('id for folder: ', folder.id);
                    getChildren(folder.id!);
                    setRotate(true);
                }}
            >
                <Icon alt="fav" src={'/assets/icons/folderOptions.png'} style={{ transform: rotate ? 'rotate(90deg)' : undefined }} />
            </ButtonBase>
            <ButtonBase
                onClick={() => {
                    navigate(`/dash/${folder.id}`);
                }}
            >
                <Icon alt="fav" src={'/assets/icons/Folder.png'} />
                {folder.name}
            </ButtonBase>
            {parentId === folder.id && (folder.children || isLoadingChildren) && (
                <Box style={{ marginLeft: 30 }}>{isLoadingChildren ? '...loading' : folder.children!.map((child) => <FolderInnerButton folder={child} />)}</Box>
            )}
        </div>
    );
};

export const FolderInnerButton: FunctionComponent<IfolderProps> = ({ folder }) => {
    const navigate = useNavigate();
    return (
        <div>
            <ButtonBase
                onClick={() => {
                    navigate(`/dash/${folder.id}`);
                }}
            >
                <Icon alt="fav" src={'/assets/icons/FolderEmpty.png'} />
                {folder.name}
            </ButtonBase>
        </div>
    );
};
