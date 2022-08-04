
import { folderConstants, folderFaliureConstants, folderSucessConstants } from '../../../constants';

interface CREATE { type: folderConstants.CREATE, payload: object }
interface READ { type: folderConstants.READ }
interface DELETE { type: folderConstants.DELETE, payload: object }
interface UPDATE { type: folderConstants.UPDATE, payload: object }

interface CREATE_SUCCESS { type: folderSucessConstants.CREATE, payload: object }
interface READ_SUCCESS { type: folderSucessConstants.READ, payload: object }
interface DELETE_SUCCESS { type: folderSucessConstants.DELETE, payload: object }
interface UPDATE_SUCCESS { type: folderSucessConstants.UPDATE, payload: object }

interface CREATE_FALIURE { type: folderFaliureConstants.CREATE, payload: object }
interface READ_FALIURE { type: folderFaliureConstants.READ }
interface DELETE_FALIURE { type: folderFaliureConstants.DELETE, payload: object }
interface UPDATE_FALIURE { type: folderFaliureConstants.UPDATE, payload: object }


export type folderActions = CREATE | READ | DELETE | UPDATE
    | CREATE_FALIURE | CREATE_SUCCESS
    | READ_FALIURE | READ_SUCCESS
    | DELETE_FALIURE | DELETE_SUCCESS
    | UPDATE_FALIURE | UPDATE_SUCCESS;
