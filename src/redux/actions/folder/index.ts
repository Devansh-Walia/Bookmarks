
import { folderConstants, folderFailureConstants, folderSuccessConstants } from '../../../constants';
import { foldersType } from '../../../constants/types';

interface CREATE { type: folderConstants.CREATE, payload: object }
interface CREATE_SUCCESS { type: folderSuccessConstants.CREATE, payload: object }
interface CREATE_FAILURE { type: folderFailureConstants.CREATE, payload: object }

interface READ { type: folderConstants.READ, payload: object }
interface READ_SUCCESS { type: folderSuccessConstants.READ, payload: object }
interface READ_FAILURE { type: folderFailureConstants.READ, payload: object }

interface READ_CHILDREN { type: folderConstants.READ_CHILDREN, payload: object }
interface READ_CHILDREN_SUCCESS { type: folderSuccessConstants.READ_CHILDREN, payload: { parentId: string, childFolders: foldersType, childFolderIds: string[] } }
interface READ_CHILDREN_FAILURE { type: folderFailureConstants.READ_CHILDREN, payload: object }

interface DELETE { type: folderConstants.DELETE, payload: string }
interface DELETE_SUCCESS { type: folderSuccessConstants.DELETE, payload: string }
interface DELETE_FAILURE { type: folderFailureConstants.DELETE, payload: object }

interface UPDATE { type: folderConstants.UPDATE, payload: object }
interface UPDATE_SUCCESS { type: folderSuccessConstants.UPDATE, payload: object }
interface UPDATE_FAILURE { type: folderFailureConstants.UPDATE, payload: object }

interface ADD_BIDS { type: folderSuccessConstants.ADD_BID, payload: { folderId: string, bookmarkIds: string[] } }




export type folderActions = CREATE | READ | READ_CHILDREN | DELETE | UPDATE
    | CREATE_FAILURE | CREATE_SUCCESS
    | READ_FAILURE | READ_SUCCESS
    | READ_CHILDREN_FAILURE | READ_CHILDREN_SUCCESS
    | DELETE_FAILURE | DELETE_SUCCESS
    | UPDATE_FAILURE | UPDATE_SUCCESS
    | ADD_BIDS;
