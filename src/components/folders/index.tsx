import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { folderSelector } from '../../services/SelectorFunctions';

import { FoldersDiv } from '../../styles';
import { AddLinkGiant, FolderButton } from '../buttons';
import Loader from '../Loader';

export const Folders: FunctionComponent = () => {
  const { folders, rootIds, isLoading } = useSelector(folderSelector);
  return (
    <FoldersDiv>
      {isLoading ? (
        <Loader />
      ) : rootIds.length === 0 ? (
        <AddLinkGiant />
      ) : (
        rootIds.map((id: string) => {
          return <FolderButton key={id} folder={folders[id]} />;
        })
      )}
    </FoldersDiv>
  );
};
