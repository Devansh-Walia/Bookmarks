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
import { folderType } from '../../constants/types';

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
  folder: folderType;
  inner?: boolean;
}
export const FolderButton: FunctionComponent<IfolderProps> = ({
  folder,
  inner = false
}) => {
  const { isLoadingChildren, isOpen, folders } = useSelector(folderSelector);
  const [rotate, setRotate] = useState(
    isOpen[folder.id] !== undefined && isOpen[folder.id]
  );
  const [getChildren] = useGetChildren();

  const toggleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <Box
      sx={{
        minWidth: 'inherit',
        width: 'fit-content',
        borderRadius: 20
      }}>
      <FolderButtonsAndMenuDiv>
        <div style={{ flex: 1, minWidth: 100 }}>
          <ButtonBase
            onClick={() => {
              if (!rotate) {
                isOpen[folder.id] = true;
                if (!folder.childrenIds) getChildren(folder.id);
              } else {
                isOpen[folder.id] = false;
              }
              toggleRotate();
            }}>
            <Icon
              alt=""
              src={'/assets/icons/folderOptions.png'}
              style={{ transform: rotate ? 'rotate(90deg)' : undefined }}
            />
          </ButtonBase>
          <ButtonBase
            onClick={() => {
              console.log(folder.id);
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
      {rotate && (
        <InnerFolderContainer>
          {isLoadingChildren === folder.id
            ? '...loading'
            : folder.childrenIds && folder.childrenIds.length > 0
            ? folder.childrenIds.map((id) => (
                <FolderButton key={id} folder={folders[id]} />
              ))
            : 'No children'}
        </InnerFolderContainer>
      )}
    </Box>
  );
};
