import { Box, ButtonBase } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FolderMenu from '../Main/Menu';
import { useGetChildren } from '../../redux';
import { useLogout } from '../../redux/hooks/AuthHooks';
import { folderSelector } from '../../services/SelectorFunctions';
import {
  AddLinkStyle,
  FolderButtonsAndMenuDiv,
  Icon,
  InnerFolderContainer,
  StyledButton2,
  StyledButtonGiant
} from '../../styles';

export const Logout: FunctionComponent = () => {
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

export const Favourites: FunctionComponent = () => {
  return (
    <StyledButton2>
      <Icon alt="fav" src={'/assets/icons/heart.png'} />
      Favourites
    </StyledButton2>
  );
};

export const AddLinkGiant: FunctionComponent = () => {
  return <StyledButtonGiant variant="outlined">+ Add Folder</StyledButtonGiant>;
};

export const AddLink: FunctionComponent = () => {
  return <AddLinkStyle variant="outlined">+ Add Link</AddLinkStyle>;
};

interface IfolderProps {
  folder: {
    name?: string;
    id?: string;
    children?: Object[];
  };
  inner?: boolean;
}
export const FolderButton: FunctionComponent<IfolderProps> = ({
  folder,
  inner = false
}) => {
  const navigate = useNavigate();
  const { isLoadingChildren, parentId } = useSelector(folderSelector);
  const [rotate, setRotate] = useState(parentId === folder.id);

  const [getChildren] = useGetChildren();

  return (
    <Box
      sx={{
        minWidth: 'inherit',
        width: 'fit-content',
        borderRadius: 20
      }}>
      <FolderButtonsAndMenuDiv>
        <div style={{ flex: 1 }}>
          <ButtonBase
            onClick={() => {
              getChildren(folder.id!);
              setRotate(true);
            }}>
            <Icon
              alt=""
              src={'/assets/icons/folderOptions.png'}
              style={{ transform: rotate ? 'rotate(90deg)' : undefined }}
            />
          </ButtonBase>
          <ButtonBase
            onClick={() => {
              navigate(`/dash/${folder.id}`);
            }}>
            <Icon
              alt=""
              src={
                inner
                  ? '/assets/icons/FolderEmpty.png'
                  : '/assets/icons/Folder.png'
              }
            />
            {folder.name}
          </ButtonBase>
        </div>
        <FolderMenu
          options={[
            {
              value: 'Add subFolder',
              handleClick: () => {
                console.log('adding subfolder to', folder.id);
              }
            },
            {
              value: 'delete',
              handleClick: () => {
                console.log('delete', folder.id);
              }
            },
            {
              value: 'Rename',
              handleClick: () => {
                console.log('renaming ', folder.id);
              }
            }
          ]}
        />
      </FolderButtonsAndMenuDiv>
      {parentId === folder.id && (folder.children || isLoadingChildren) && (
        <InnerFolderContainer>
          {isLoadingChildren
            ? '...loading'
            : folder.children!.map((child, index) => (
                <FolderButton key={index} folder={child} inner={true} />
              ))}
        </InnerFolderContainer>
      )}
    </Box>
  );
};
