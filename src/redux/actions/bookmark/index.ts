
import { bookmarkConstants, bookmarkFaliureConstants, bookmarkSucessConstants } from '../../../constants';

export interface CREATE { type: bookmarkConstants.CREATE, payload: { name: string, url: string } }
export interface READ { type: bookmarkConstants.READ, payload: { folderId: string } }
export interface DELETE { type: bookmarkConstants.DELETE, payload: { bookmarkId: string } }
export interface PATCH { type: bookmarkConstants.PATCH, payload: { bookmarkId: string, folderId: string } }
export interface TOGGLE { type: bookmarkConstants.TOGGLE, payload: { bookmarkId: string } }
export interface CHANGE_DETAILS { type: bookmarkConstants.CHANGE_DETAILS, payload: { bookmarkId: string, name: string, url: string } }

export interface CREATE_SUCCESS { type: bookmarkSucessConstants.CREATE, payload: { bookmark: object } }
export interface READ_SUCCESS { type: bookmarkSucessConstants.READ, payload: object }
export interface DELETE_SUCCESS { type: bookmarkSucessConstants.DELETE, payload: object }
export interface PATCH_SUCCESS { type: bookmarkSucessConstants.PATCH, payload: object }
export interface TOGGLE_SUCCESS { type: bookmarkSucessConstants.TOGGLE, payload: object }
export interface CHANGE_DETAILS_SUCCESS { type: bookmarkSucessConstants.CHANGE_DETAILS, payload: object }

export interface CREATE_FALIURE { type: bookmarkFaliureConstants.CREATE, payload: object }
export interface READ_FALIURE { type: bookmarkFaliureConstants.READ, payload: object }
export interface DELETE_FALIURE { type: bookmarkFaliureConstants.DELETE, payload: object }
export interface PATCH_FALIURE { type: bookmarkFaliureConstants.PATCH, payload: object }
export interface TOGGLE_FALIURE { type: bookmarkFaliureConstants.TOGGLE, payload: object }
export interface CHANGE_DETAILS_FALIURE { type: bookmarkFaliureConstants.CHANGE_DETAILS, payload: object }


export type bookmarkActions = CREATE | READ | DELETE | PATCH | TOGGLE | CHANGE_DETAILS
    | CREATE_FALIURE | CREATE_SUCCESS
    | READ_FALIURE | READ_SUCCESS
    | DELETE_FALIURE | DELETE_SUCCESS
    | PATCH_FALIURE | PATCH_SUCCESS
    | TOGGLE_FALIURE | TOGGLE_SUCCESS
    | CHANGE_DETAILS_FALIURE | CHANGE_DETAILS_SUCCESS;
