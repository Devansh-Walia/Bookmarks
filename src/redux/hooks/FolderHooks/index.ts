import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  createFolderAction,
  deleteFolderAction,
  getChildrenAction,
  getFolderAction
} from '../../action-creators/folder';

interface AddPayload {
  name: string;
  parentId?: string;
}

export const useAddFolder = () => {
  const dispatch = useDispatch();

  const addFolder = useCallback(
    (payload: AddPayload) =>
      dispatch(createFolderAction(payload.name, payload.parentId)),
    [dispatch]
  );

  return [addFolder];
};

export const useGetFolder = () => {
  const dispatch = useDispatch();

  const getFolder = useCallback(
    (folderId?: string) => dispatch(getFolderAction(folderId)),
    [dispatch]
  );

  return [getFolder];
};

export const useGetChildren = () => {
  const dispatch = useDispatch();

  const getChildren = useCallback(
    (folderId: string) => dispatch(getChildrenAction(folderId)),
    [dispatch]
  );

  return [getChildren];
};
export const useDeleteFolder = () => {
  const dispatch = useDispatch();

  const deleteFolder = useCallback(
    (fid: string) => dispatch(deleteFolderAction(fid)),
    [dispatch]
  );

  return [deleteFolder];
};
