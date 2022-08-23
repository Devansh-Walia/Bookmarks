import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { folderSelector } from '../../services/SelectorFunctions';

import { FoldersDiv } from '../../styles';
import { AddLinkGiant, FolderButton } from '../buttons';

export const Folders: FunctionComponent = () => {
  const { folders, rootIds } = useSelector(folderSelector);
  return (
    <FoldersDiv>
      {rootIds.length === 0 ? (
        <AddLinkGiant />
      ) : (
        rootIds.map((id: string) => {
          return <FolderButton key={id} folder={folders[id]} />;
        })
      )}
    </FoldersDiv>
  );
};
