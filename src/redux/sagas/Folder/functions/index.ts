import { call, put } from 'redux-saga/effects';

import {
  folderFailureConstants,
  folderSuccessConstants
} from '../../../../constants';
import {
  createFolder,
  DeleteFolder,
  getFolder,
  renameFolder
} from '../../../../services';
import { foldersType, folderType } from '../../../../constants/types';

export function* CreateFolderWatcherFunction(action: any): Generator<any> {
  try {
    console.log(action);
    const response: any = yield call(createFolder, {
      name: action.payload.name,
      parentId: action.payload.parentId
    });
    yield put({ type: folderSuccessConstants.CREATE, payload: response.data });
  } catch (e) {
    yield put({ type: folderFailureConstants.CREATE });
  }
}

export function* DeleteFolderWatcherFunction(action: any): Generator<any> {
  try {
    console.log(action);
    const response: any = yield call(DeleteFolder, {
      folderId: action.payload
    });
    console.log(response);

    yield put({ type: folderSuccessConstants.DELETE, payload: action.payload });
  } catch (e) {
    yield put({ type: folderFailureConstants.DELETE });
  }
}

export function* GetFolderWatcherFunction(action: any): Generator<any> {
  try {
    const response: any = yield call(getFolder, {
      folderId: action.payload.folderId
    });
    const rootIds: string[] = [];
    const folders: foldersType = {};
    response.data.forEach((element: folderType) => {
      const id: string = element.id;
      rootIds.push(id);
      folders[id] = element;
    });
    yield put({
      type: folderSuccessConstants.READ,
      payload: { folders, rootIds }
    });
  } catch (e) {
    yield put({ type: folderFailureConstants.READ, payload: e });
  }
}

export function* GetChildrenWatcherFunction(action: any): Generator<any> {
  try {
    const response: any = yield call(getFolder, { folderId: action.payload });
    const childFolders: foldersType = {};
    const childFolderIds: string[] = [];
    response.data.forEach((element: folderType) => {
      const id: string = element.id;
      childFolderIds.push(id);
      childFolders[id] = element;
    });
    yield put({
      type: folderSuccessConstants.READ_CHILDREN,
      payload: { parentId: action.payload, childFolders, childFolderIds }
    });
  } catch (e) {
    yield put({ type: folderFailureConstants.READ_CHILDREN, payload: e });
  }
}

export function* RenameFolderWatcherFunction(action: any): Generator<any> {
  try {
    console.log(action);
    const response: any = yield call(renameFolder, {
      folderId: action.payload.folderId,
      name: action.payload.name
    });
    console.log(response);

    yield put({ type: folderSuccessConstants.UPDATE });
  } catch (e) {
    yield put({ type: folderFailureConstants.UPDATE });
  }
}
