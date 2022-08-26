import {
  bookmarkConstants,
  bookmarkFailureConstants,
  bookmarkSuccessConstants
} from '../../../constants';
import { bookmarksType, bookmarkType } from '../../../constants/types';

export interface CREATE {
  type: bookmarkConstants.CREATE;
  payload: { name: string; url: string; folderId?: string };
}

export interface CREATE_SUCCESS {
  type: bookmarkSuccessConstants.CREATE;
  payload: { bookmark: bookmarkType };
}

export interface CREATE_FAILURE {
  type: bookmarkFailureConstants.CREATE;
  payload: object;
}

export interface READ {
  type: bookmarkConstants.READ;
  payload: { folderId: string };
}

export interface READ_SUCCESS {
  type: bookmarkSuccessConstants.READ;
  payload: {
    bookmarks: bookmarksType;
    rootBookmarkIds: string[];
    currentFolder: string;
  };
}

export interface READ_FAILURE {
  type: bookmarkFailureConstants.READ;
  payload: object;
}

export interface DELETE {
  type: bookmarkConstants.DELETE;
  payload: { bookmarkId: string };
}

export interface DELETE_SUCCESS {
  type: bookmarkSuccessConstants.DELETE;
  payload: { id: string; url: string; createdAt: string };
}

export interface DELETE_FAILURE {
  type: bookmarkFailureConstants.DELETE;
  payload: object;
}

export interface PATCH {
  type: bookmarkConstants.PATCH;
  payload: { bookmarkId: string; folderId: string };
}

export interface PATCH_SUCCESS {
  type: bookmarkSuccessConstants.PATCH;
  payload: object;
}

export interface PATCH_FAILURE {
  type: bookmarkFailureConstants.PATCH;
  payload: object;
}

export interface TOGGLE {
  type: bookmarkConstants.TOGGLE;
  payload: { bookmarkId: string };
}

export interface TOGGLE_SUCCESS {
  type: bookmarkSuccessConstants.TOGGLE;
  payload: object;
}

export interface TOGGLE_FAILURE {
  type: bookmarkFailureConstants.TOGGLE;
  payload: object;
}

export interface CHANGE_DETAILS {
  type: bookmarkConstants.CHANGE_DETAILS;
  payload: { bookmarkId: string; name: string; url: string };
}

export interface CHANGE_DETAILS_SUCCESS {
  type: bookmarkSuccessConstants.CHANGE_DETAILS;
  payload: object;
}

export interface CHANGE_DETAILS_FAILURE {
  type: bookmarkFailureConstants.CHANGE_DETAILS;
  payload: object;
}

export type bookmarkActions =
  | CREATE
  | READ
  | DELETE
  | PATCH
  | TOGGLE
  | CHANGE_DETAILS
  | CREATE_FAILURE
  | CREATE_SUCCESS
  | READ_FAILURE
  | READ_SUCCESS
  | DELETE_FAILURE
  | DELETE_SUCCESS
  | PATCH_FAILURE
  | PATCH_SUCCESS
  | TOGGLE_FAILURE
  | TOGGLE_SUCCESS
  | CHANGE_DETAILS_FAILURE
  | CHANGE_DETAILS_SUCCESS;
