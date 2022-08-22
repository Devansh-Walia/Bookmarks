import { FunctionComponent } from 'react';

import { FoldersDiv } from '../../styles';
import { AddLinkGiant, FolderButton } from '../buttons';

interface FolderProps {
  createdAt?: string;
  deletedAt?: string;
  id?: string;
  name?: string;
  updatedAt?: string;
}
type Props = {
  folders: FolderProps[];
};

export const Folders: FunctionComponent<Props> = ({ folders }) => {
  return (
    <FoldersDiv>
      {folders.length === 0 ? (
        <AddLinkGiant />
      ) : (
        folders.map((folder) => {
          return <FolderButton key={folder.id} folder={folder!} />;
        })
      )}
    </FoldersDiv>
  );
};
