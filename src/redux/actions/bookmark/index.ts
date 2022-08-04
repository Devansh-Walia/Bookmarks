
import { bookmarkConstants, bookmarkFaliureConstants, bookmarkSucessConstants } from '../../../constants';

interface CREATE { type: bookmarkConstants.CREATE, payload: object }
interface READ { type: bookmarkConstants.READ, payload: object }
interface DELETE { type: bookmarkConstants.DELETE, payload: object }
interface PATCH { type: bookmarkConstants.PATCH, payload: object }
interface TOGGLE { type: bookmarkConstants.TOGGLE, payload: object }
interface CHANGE_DETAILS { type: bookmarkConstants.CHANGE_DETAILS, payload: object }

interface CREATE_SUCCESS { type: bookmarkSucessConstants.CREATE, payload: object }
interface READ_SUCCESS { type: bookmarkSucessConstants.READ, payload: object }
interface DELETE_SUCCESS { type: bookmarkSucessConstants.DELETE, payload: object }
interface PATCH_SUCCESS { type: bookmarkSucessConstants.PATCH, payload: object }
interface TOGGLE_SUCCESS { type: bookmarkSucessConstants.TOGGLE, payload: object }
interface CHANGE_DETAILS_SUCCESS { type: bookmarkSucessConstants.CHANGE_DETAILS, payload: object }

interface CREATE_FALIURE { type: bookmarkFaliureConstants.CREATE, payload: object }
interface READ_FALIURE { type: bookmarkFaliureConstants.READ, payload: object }
interface DELETE_FALIURE { type: bookmarkFaliureConstants.DELETE, payload: object }
interface PATCH_FALIURE { type: bookmarkFaliureConstants.PATCH, payload: object }
interface TOGGLE_FALIURE { type: bookmarkFaliureConstants.TOGGLE, payload: object }
interface CHANGE_DETAILS_FALIURE { type: bookmarkFaliureConstants.CHANGE_DETAILS, payload: object }


export type bookmarkActions = CREATE | READ | DELETE | PATCH | TOGGLE | CHANGE_DETAILS
    | CREATE_FALIURE | CREATE_SUCCESS
    | READ_FALIURE | READ_SUCCESS
    | DELETE_FALIURE | DELETE_SUCCESS
    | PATCH_FALIURE | PATCH_SUCCESS
    | TOGGLE_FALIURE | TOGGLE_SUCCESS
    | CHANGE_DETAILS_FALIURE | CHANGE_DETAILS_SUCCESS;
